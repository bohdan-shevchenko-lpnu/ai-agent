---
name: project-scaffold
description: "Use when creating or checking the JavaScript Hello World project structure, source entry point, package.json, and usage documentation."
---

# Project Scaffold

## Purpose

Create and validate the initial cross-platform JavaScript Hello World project
for this repository. The project uses Node.js and npm, keeps application code
in `src/`, tests in `tests/`, and documentation in `docs/`.

## When to Use

- The project has not yet been scaffolded.
- `package.json` or `src/index.js` is missing.
- The project structure needs to be checked against `docs/architecture.md`.
- Usage instructions need to be added or synchronized with the actual scripts.

## Procedure

1. Read `README.md`, `docs/architecture.md`, and
   `.github/agents/build-engineer.agent.md`.
2. Inspect `package.json`, `src/`, `tests/`, `docs/`, and `.github/` before
   making changes. Reuse valid files and do not overwrite unrelated content.
3. Create a root `package.json` with the project metadata and these scripts:
   `start` runs `node src/index.js`, and `build` runs
   `node --check src/index.js`.
4. Create `src/index.js` so running it directly prints exactly
   `Hello, World!`.
5. Add or update `docs/usage.md` with the required Node.js version and the
   commands needed to run and build the project.
6. Do not create Jest tests or GitHub Actions as part of this skill; those are
   handled by `build-and-test` and `github-actions`.

## Validation

- Confirm that the expected directories and files exist.
- Parse `package.json` as JSON.
- If Node.js is available, run `node src/index.js` and verify the exact output.
- If npm is available, run `npm run build`.
- Report unavailable tools or failed commands instead of claiming success.

## Security and Scope

- Work only inside the current repository.
- Do not add secrets, tokens, passwords, or private keys.
- Do not add unnecessary dependencies.
- Do not change Git remotes or run `git commit`, `git push`, `git reset`, or
  other destructive Git commands.
- Preserve existing user files and explain any necessary deviation.
