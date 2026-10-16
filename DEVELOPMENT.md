# OMA KNOWLEDGE BASE Nuxt 4 project

This document try to collect all the relevant information needed for
development of this Nuxt 4 project.

Look at the [Nuxt 4 documentation](https://nuxt.com/docs/getting-started/introduction)
to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment)
for more information.

## Docker support

[Docker](https://www.docker.com/) is an open platform for developing, shipping,
and running applications.

This project provides a [Docker](https://www.docker.com/get-started/)
container that can be used for development and deployment to the production.

First build the Docker image.

```bash
docker build -t oma-knowledge-base .
```

Afterwards, run the container based on the created image.

```bash
docker run -it --rm -p 3000:3000 oma-knowledge-base:latest
```

## Component guidelines

The guideline page of every `sh-*` component (`content/8.guidelines/2.components/`)
follows the same structure: `## Usage` (hand-written examples), `## Props`,
`## Slots` and `## UI config`. The last three are generated from the component's
source, so they never need to be edited by hand:

```md
::doc-api{section="props"}
::
```

`scripts/generate-component-docs.mjs` reads each `app/components/content/sh-*.vue`
and writes `app/data/component-docs.json`. It runs automatically before
`dev`, `build` and `generate`; run `npm run docs:generate` after changing a
component while the dev server is running, and `npm run docs:check` in CI to
fail when the file is stale.

Descriptions come from comments next to the code, so write one when adding a prop
or a `ui` key:

```ts
defineProps<{
  /** Destination URL of the button. */
  urlButton: string;
}>()

const config = {
  /** Container of the badge. */
  wrapper: '...',
}
```

A comment on a group of keys (e.g. `header: { ... }`) is used for every key in the
group that has no comment of its own.
