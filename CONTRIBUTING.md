# Contributing to Coduxium XI

Thanks for your interest in contributing.

## Getting Started

1. Fork the repository.
2. Create a branch from `main`.
3. Make your changes.
4. Test your changes locally.
5. Open a pull request.

## Local Development

Run locally with one of these options from the project root:

```powershell
python -m http.server 5500
```

or

```powershell
npx serve -l 5500
```

Open `http://localhost:5500` in your browser.

## Branch Naming

Use descriptive branch names:

- `feat/<short-description>`
- `fix/<short-description>`
- `docs/<short-description>`
- `chore/<short-description>`

Examples:

- `feat/add-rust-language-page`
- `fix/breadcrumb-mobile-spacing`

## Commit Messages

Prefer clear, conventional commit messages:

- `feat: add quickstart navigation links`
- `fix: correct markdown path in docs page`
- `docs: update README technology counts`

## Pull Request Checklist

Before opening a PR, confirm:

- Changes are focused and scoped to one concern.
- Existing behavior is preserved unless intentionally changed.
- Links and relative paths work.
- Pages are responsive on desktop and mobile.
- New docs are clear and grammatically correct.
- No secrets, private keys, or credentials are committed.

## Reporting Bugs

Use the Bug Report issue template and include:

- Steps to reproduce.
- Expected behavior.
- Actual behavior.
- Screenshots (if relevant).
- Browser and OS details.

## Suggesting Features

Use the Feature Request issue template and include:

- Problem statement.
- Proposed solution.
- Alternatives considered.
- Any example pages, references, or visuals.

## Style Guidance

- Keep HTML semantic and accessible.
- Keep CSS organized and avoid unrelated formatting changes.
- Keep JavaScript modular and readable.
- Prefer small, reviewable PRs over large mixed changes.

## Code of Conduct

By participating in this project, you agree to abide by our
[Code of Conduct](CODE_OF_CONDUCT.md).
