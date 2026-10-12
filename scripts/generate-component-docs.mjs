// Extracts the public API of every `sh-*` content component (props, slots and
// the default `ui` class config) into `app/data/component-docs.json`.
//
// The guideline pages render that file through the <ShDocApi> component, so a
// guideline never repeats information that lives in the component's code.
//
// Descriptions come from comments written next to the code:
//   - a JSDoc/`//` comment above a prop in `defineProps<{ ... }>()`
//   - a JSDoc/`//` comment above a key in `const config = { ... }`
//
// It also copies the OMA color palette from main.css to `app/data/theme-colors.json`.
//
// Usage: node scripts/generate-component-docs.mjs [--check]
//   --check  exit with an error if the generated file is out of date (for CI)

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse as parseSfc } from '@vue/compiler-sfc'
import { parse as parseJs } from '@babel/parser'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const componentsDir = join(root, 'app/components/content')
const outFile = join(root, 'app/data/component-docs.json')
const cssFile = join(root, 'app/assets/css/main.css')
const colorsFile = join(root, 'app/data/theme-colors.json')

// Props that exist on every component and are documented once, here.
const SHARED_PROP_DESCRIPTIONS = {
  ui: 'Overrides the default classes of the UI config below. Values are merged with the defaults using tailwind-merge.',
  description: 'Note for content writers. It is not rendered on the website.',
  class: 'Additional classes applied to the root element of the component.',
}

const toPascal = (kebab) => kebab.split('-').map((p) => p[0].toUpperCase() + p.slice(1)).join('')

/** Turns a babel comment list into one clean description string. */
function commentText(comments) {
  if (!comments?.length) return ''
  return comments
    .map((c) =>
      c.value
        .split('\n')
        .map((line) => line.replace(/^\s*\*+\s?/, '').trim())
        .filter((line) => line && !line.startsWith('@'))
        .join(' ')
    )
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Leading comments, or a trailing comment that sits on the same line. */
function descriptionOf(node, source) {
  const leading = commentText(node.leadingComments)
  if (leading) return leading
  const trailing = (node.trailingComments ?? []).filter((c) => !source.slice(node.end, c.start).includes('\n'))
  return commentText(trailing)
}

const keyName = (key) => (key.type === 'Identifier' ? key.name : key.value)
const unwrap = (node) => (node?.type === 'TSAsExpression' || node?.type === 'TSSatisfiesExpression' ? unwrap(node.expression) : node)

function extractProps(statements, source) {
  const props = new Map()

  for (const stmt of statements) {
    if (stmt.type !== 'VariableDeclaration') continue
    for (const decl of stmt.declarations) {
      const init = decl.init
      if (init?.type !== 'CallExpression' || init.callee.type !== 'Identifier') continue

      const isWithDefaults = init.callee.name === 'withDefaults'
      const define = isWithDefaults ? init.arguments[0] : init
      if (define?.type !== 'CallExpression' || define.callee.name !== 'defineProps') continue

      const literal = define.typeParameters?.params?.[0]
      if (literal?.type !== 'TSTypeLiteral') continue

      for (const member of literal.members) {
        if (member.type !== 'TSPropertySignature') continue
        const name = keyName(member.key)
        props.set(name, {
          name,
          type: source.slice(member.typeAnnotation.typeAnnotation.start, member.typeAnnotation.typeAnnotation.end).replace(/\s+/g, ' '),
          required: !member.optional,
          default: null,
          description: descriptionOf(member, source) || SHARED_PROP_DESCRIPTIONS[name] || '',
        })
      }

      const defaults = isWithDefaults ? unwrap(init.arguments[1]) : null
      if (defaults?.type === 'ObjectExpression') {
        for (const p of defaults.properties) {
          if (p.type !== 'ObjectProperty') continue
          const prop = props.get(keyName(p.key))
          if (!prop) continue
          const value = source.slice(p.value.start, p.value.end).replace(/\s+/g, ' ')
          // `undefined` means "no default"
          prop.default = value === 'undefined' ? null : value
        }
      }
    }
  }
  return [...props.values()]
}

/** Flattens `const config = {...}` into one row per leaf, keyed by dotted path. */
function extractUi(statements, source) {
  const rows = []

  // A comment on a group (`header: { ... }`) is the fallback description of its keys.
  const visit = (objectNode, path, inherited = '') => {
    for (const p of objectNode.properties) {
      if (p.type !== 'ObjectProperty') continue
      const key = [...path, keyName(p.key)]
      const value = unwrap(p.value)
      const description = descriptionOf(p, source)

      if (value.type === 'ObjectExpression') {
        if (value.properties.length) visit(value, key, description || inherited)
        continue
      }
      rows.push({
        path: key.join('.'),
        value: value.type === 'StringLiteral' ? value.value : source.slice(value.start, value.end).replace(/\s+/g, ' '),
        description: description || inherited,
      })
    }
  }

  for (const stmt of statements) {
    if (stmt.type !== 'VariableDeclaration') continue
    for (const decl of stmt.declarations) {
      if (decl.id.name === 'config' && unwrap(decl.init)?.type === 'ObjectExpression') visit(unwrap(decl.init), [])
    }
  }
  return rows
}

/** Documents local `type X = {...}` / `interface X {...}` declarations, for props that use them (e.g. `columns`). */
function extractTypes(statements, source) {
  const types = {}
  for (const stmt of statements) {
    const literal =
      stmt.type === 'TSTypeAliasDeclaration' && stmt.typeAnnotation.type === 'TSTypeLiteral' ? stmt.typeAnnotation.members
      : stmt.type === 'TSInterfaceDeclaration' ? stmt.body.body
      : null
    if (!literal) continue
    types[stmt.id.name] = literal
      .filter((m) => m.type === 'TSPropertySignature')
      .map((m) => ({
        name: keyName(m.key),
        type: source.slice(m.typeAnnotation.typeAnnotation.start, m.typeAnnotation.typeAnnotation.end).replace(/\s+/g, ' '),
        required: !m.optional,
        default: null,
        description: descriptionOf(m, source),
      }))
  }
  return types
}

function extractSlots(template) {
  if (!template) return []
  const slots = new Set()
  for (const m of template.matchAll(/<slot\b([^>]*)>/g)) {
    slots.add(m[1].match(/\bname=["']([^"']+)["']/)?.[1] ?? 'default')
  }
  return [...slots].map((name) => ({ name }))
}

const docs = {}

for (const file of readdirSync(componentsDir).filter((f) => /^sh-.*\.vue$/.test(f)).sort()) {
  const name = basename(file, '.vue')
  const { descriptor } = parseSfc(readFileSync(join(componentsDir, file), 'utf8'))
  const source = descriptor.scriptSetup?.content ?? ''
  const ast = parseJs(source, { sourceType: 'module', plugins: ['typescript'] })

  docs[name] = {
    name,
    constructorName: toPascal(name),
    props: extractProps(ast.program.body, source),
    slots: extractSlots(descriptor.template?.content),
    ui: extractUi(ast.program.body, source),
    types: extractTypes(ast.program.body, source),
  }
}

// OMA palette from the `@theme` block of main.css -> { red: { 50: '#f2d8d7', ... }, ... }
const colors = {}
for (const m of readFileSync(cssFile, 'utf8').matchAll(/--color-oma-([a-z]+)-(\d+):\s*(#[0-9a-fA-F]{6});/g)) {
  ;(colors[m[1]] ??= {})[m[2]] = m[3]
}
const colorsOutput = JSON.stringify(colors, null, 2) + '\n'

const output = JSON.stringify(docs, null, 2) + '\n'

if (process.argv.includes('--check')) {
  const read = (file) => (existsSync(file) ? readFileSync(file, 'utf8') : '')
  if (read(outFile) !== output || read(colorsFile) !== colorsOutput) {
    console.error('component-docs.json is out of date. Run: npm run docs:generate')
    process.exit(1)
  }
} else {
  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, output)
  writeFileSync(colorsFile, colorsOutput)
  console.log(`Generated docs for ${Object.keys(docs).length} components -> app/data/component-docs.json`)
}
