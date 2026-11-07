# Daniel Sá — portfolio

A bilingual portfolio built with Next.js, React, TypeScript and Sass. It presents selected projects, engineering experience and contact details.

## Getting started

Use Node.js 20.9 or newer and install dependencies with `npm ci`. Run `npm run dev` and open the local URL printed by Next.js.

Development uses `.next-dev` while production builds use `.next`, so builds and tests can run while the development server is running.

The English site is at `/` and the Portuguese site is at `/pt`.

## Checks

- `npm run lint` checks the source with ESLint.
- `npm run build` builds the production site.
- `npm test` builds the site, starts an isolated local server and runs browser smoke and axe accessibility checks at a narrow viewport. Chrome, Edge or Chromium must be installed; set `CHROME_PATH` if it is not in a standard location.
- `npm audit` checks npm dependencies for known advisories.
- `trivy fs --scanners vuln,secret,misconfig --include-dev-deps .` scans dependencies, secrets and supported configuration files when Trivy is installed.

The minimatch override addresses a known advisory in the TypeScript ESLint dependency tree. Revisit it when upstream supports a patched version.
