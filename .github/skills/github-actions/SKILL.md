---
name: github-actions
description: "Use when creating or validating GitHub Actions CI for this Node.js project across Ubuntu, Windows, and macOS."
---

# GitHub Actions

## Purpose

Create a minimal GitHub Actions workflow that installs the locked npm
dependencies and verifies tests and build behavior on all required operating
systems.

## When to Use

- `.github/workflows/ci.yml` is missing or incomplete.
- CI must run for pushes and pull requests.
- The workflow needs cross-platform validation for Node.js, Jest, and npm.
- Existing CI commands need to be checked against `package.json`.

## Procedure

1. Read `package.json`, `package-lock.json`, `src/index.js`,
   `tests/index.test.js`, and `docs/architecture.md`.
2. Inspect existing workflows before editing them.
3. Create or update `.github/workflows/ci.yml` with `push` and
   `pull_request` triggers.
4. Define a job matrix for `ubuntu-latest`, `windows-latest`, and
   `macos-latest`.
5. In each matrix job, use the official `actions/checkout@v4` and
   `actions/setup-node@v4` actions, selecting Node.js 20 LTS or another
   supported LTS version at least 18.
6. Run these steps in order: `npm ci`, `npm test`, and `npm run build`.
   Enable npm caching through `setup-node` only when the lock file is present.
7. Check the YAML structure and confirm every command matches the current
   npm scripts.
8. Run `npm test` and `npm run build` locally when Node.js and npm are
   available. State clearly that this does not verify a remote GitHub run.

## Validation

- Confirm both workflow triggers are present.
- Confirm all three operating systems are in the matrix.
- Confirm official checkout and setup-node actions are used.
- Confirm the Node.js version, `npm ci`, `npm test`, and `npm run build`
  steps are present.
- Inspect workflow syntax and report any limitation of local YAML tooling.
- Do not claim CI success until the workflow has actually run on GitHub.

## Security and Scope

- Never add tokens, credentials, or secrets to workflow files.
- Use least-privilege defaults and avoid unnecessary permissions.
- Do not execute untrusted pull-request code with write credentials.
- Do not change application logic, tests, npm dependencies, or Git remotes as
  part of this skill.
- Do not run `git commit`, `git push`, `git reset`, or other destructive
  commands.
