---
name: build-and-test
description: "Use when configuring or validating npm build scripts, Jest tests, and dependency lock files for this JavaScript project."
---

# Build and Test

## Purpose

Configure reproducible local validation for the Node.js Hello World project.
Use Jest for unit tests while keeping the existing application behavior and
the `npm run build` syntax check.

## When to Use

- Jest testing has not yet been configured.
- The `test` npm script or Jest devDependency is missing.
- A test needs to verify the `Hello, World!` behavior.
- `package.json` and `package-lock.json` need consistency checks.

## Procedure

1. Read `package.json`, `src/index.js`, `docs/architecture.md`, and existing
   files under `tests/`.
2. Preserve the direct behavior of `src/index.js`. If necessary, expose a
   small CommonJS function such as `getGreeting` so it can be tested without
   producing output during module import.
3. Add only Jest as a development dependency and add the `test` script with
   the value `jest`.
4. Create a focused test under `tests/` that verifies the exact
   `Hello, World!` result.
5. Run `npm install` when the dependency manifest changed so that
   `package-lock.json` stays synchronized. Prefer `npm ci` for a clean,
   lock-file-based installation.
6. Run `npm test` and `npm run build`. Use `--runInBand` only when a
   single-process local run is needed for diagnosis.
7. Report test counts, failures, dependency-install errors, and unavailable
   Node.js or npm tools factually.

## Validation

- Confirm the `test` script and Jest devDependency are present.
- Confirm `package-lock.json` reflects `package.json`; use `npm ci --dry-run`
  or `npm ci` when appropriate.
- Require all Jest tests to pass.
- Require `npm run build` to finish successfully.
- Confirm the application still prints `Hello, World!` when run directly.

## Security and Scope

- Do not add dependencies unrelated to testing.
- Do not place secrets or environment values in tests, manifests, or logs.
- Do not weaken assertions merely to make a test pass.
- Do not modify Git remotes or run `git commit`, `git push`, `git reset`, or
  destructive cleanup commands.
- Do not change application behavior beyond the minimal testability seam.
