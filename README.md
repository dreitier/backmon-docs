# backmon-docs

The documentation of [backmon](https://github.com/dreitier/backmon), published at
[backmon.dreitier.com](https://backmon.dreitier.com). It is built with [Docusaurus](https://docusaurus.io/).

## Local development

Node.js in the version of [`.nvmrc`](.nvmrc) is required (`nvm use`).

```bash
npm ci          # install the dependencies of package-lock.json
npm start       # development server with live reload
npm run build   # production build into build/; fails on broken internal links
npm run serve   # serve the production build locally
```

To run the checks of the CI lint job before each commit, install [pre-commit](https://pre-commit.com) and enable the
hooks once per clone:

```bash
pre-commit install
```

## Pipeline

| Workflow | Trigger | Purpose |
|---|---|---|
| [CI](.github/workflows/ci.yaml) | pull requests | Lints the repository (pre-commit hooks, actionlint) and builds the site. The build is attached to the run as artifact `website` |
| [PR title](.github/workflows/pr-title.yaml) | pull requests | The title has to be a [Conventional Commit](https://www.conventionalcommits.org/), e.g. `docs: describe purging` |
| [Deploy to GitHub Pages](.github/workflows/deploy.yaml) | push to `main` | Runs CI and publishes its build to the `gh-pages` branch |
| [External links](.github/workflows/links.yaml) | weekly | Checks the external links of the documentation ([`lychee.toml`](lychee.toml)) |

Dependabot ([`.github/dependabot.yml`](.github/dependabot.yml)) keeps the npm packages, the GitHub Actions and the
pre-commit hooks up to date.
