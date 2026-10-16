---
title: Badge
description: Display a short text to represent a status or a category.
constructorName: ShBadge
layout: doc
---
# {{$doc.title}}

## Usage

`ShBadge` shows a short, highly visible text such as a version number, a document status or a category label. The text is written as the content of the component.

### Basic

A badge with its default style.

::doc-example
---
code: |
  ::ShBadge
  1.2+
  ::
---
::

### Custom style

A badge with the default classes of `wrapper` extended through `ui`. Classes passed in `ui` are merged with the defaults, so a conflicting class (for example another background color) replaces the default one.

::doc-example
---
code: |
  ::ShBadge
  ---
  ui:
    wrapper: hover:scale-125 duration-300 mx-10 bg-oma-red-50 dark:bg-oma-red-700 text-primary
  ---
  1.2+
  ::
---
::

## Props

::doc-api{section="props"}
::

## Slots

::doc-api{section="slots"}
::

## UI config

Default classes of every styled element. Override any key through the `ui` prop, as in the custom style example above.

::doc-api{section="ui"}
::
