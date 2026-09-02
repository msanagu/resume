# Resume

A React + TypeScript + Vite app, styled with [vanilla-extract](https://vanilla-extract.style/) and built on [@msanagu/pearl](https://www.npmjs.com/package/@msanagu/pearl).

## Prerequisites

- Node.js
- [pnpm](https://pnpm.io/installation)

## Getting started

Install dependencies:

```sh
pnpm install
```

Run the dev server with hot module reloading:

```sh
pnpm dev
```

This starts Vite at [http://localhost:5173](http://localhost:5173).

## Other commands

```sh
pnpm build    # type-check and build for production (outputs to dist/)
pnpm preview  # locally preview the production build
pnpm lint     # run oxlint
```

## Notes

- `pnpm build` rewrites font asset paths for deployment under a `/resume/` base path (see the `build` script in [package.json](package.json)).
