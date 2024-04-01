# OMA KNOWLEDGE BASE Nuxt 3 project

This document try to collect all the relevant information needed for
development of this Nuxt 3 project.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)
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
