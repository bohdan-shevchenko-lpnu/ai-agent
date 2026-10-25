# Використання

## Вимоги

- Node.js 18 або новіший
- npm

## Запуск

У корені репозиторію виконайте:

```powershell
npm start
```

Програма виведе:

```text
Hello, World!
```

## Перевірка синтаксису

Для перевірки JavaScript-коду виконайте:

```powershell
npm run build
```

## Запуск тестів

Для запуску модульних тестів Jest виконайте:

```powershell
npm test
```

## Continuous integration

The GitHub Actions workflow in `.github/workflows/ci.yml` checks the project
on Ubuntu, Windows, and macOS. It runs automatically for every push and pull
request, installs dependencies with `npm ci`, runs the tests, and checks the
build.

The workflow result must be verified in the GitHub repository after the
changes are pushed. A local test or build does not prove that GitHub Actions
has completed successfully.
