# trycanvas.app

> **Note:** This repository contains the source code powering trycanvas.app. If you want to use Canvas, visit the [main repository](https://github.com/austintoddj/canvas).

## Introduction

This is a [Next.js](https://nextjs.org) App Router project that ports the original Vue/Vite marketing site to TypeScript React components.

## System Requirements

- Node 22.x, matching `engines` in `package.json`. CI and Vercel use the same.

## Developing

```bash
npm install
npm run dev
```

The development app runs at `http://localhost:3000` by default.

## Quality Checks

`npm run check` is the local verify. It runs the typecheck, the linter, and the unit test script.

```bash
npm run check
```

`npm run e2e` runs the Playwright Chromium project against `http://localhost:3000`. Build first. The test run starts the production server.

```bash
npm run build
npm run e2e
```

`npm run preflight` lints, formats, typechecks, and builds.

## License

This project is open-sourced software licensed under the [MIT license](license).
