# Innocypher — marketing site

Static marketing and landing experience for **Innocypher**, built with [Create React App](https://github.com/facebook/create-react-app). Production output is a client-side SPA served as static files from the `build` directory.

## Stack

- React 19, `react-scripts` (CRA)
- Tailwind CSS
- [lucide-react](https://lucide.dev/) icons
- [Testing Library](https://testing-library.com/) for smoke tests

## Prerequisites

- Node.js LTS (see `engines` in [`package.json`](package.json))
- npm

## Local development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). The dev server reloads on file changes.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Dev server |
| `npm run build` | Production build → `build/` |
| `npm test` | Tests (interactive locally; CI uses `--watchAll=false`) |

## Production build and `PUBLIC_URL`

This repo is a **GitHub Pages project site** (live URL is `https://<owner>.github.io/<repo>/` until you attach a custom domain). Create React App must know that base path at **build time**, or asset URLs will be wrong.

- **CI and deploy workflows** set `PUBLIC_URL` automatically: if the repository variable `PUBLIC_URL` is set, it is used; otherwise the default GitHub Pages URL for this repo is used (`https://<owner>.github.io/<repo>/`).
- **Custom domain:** set a [GitHub Actions variable](https://docs.github.com/en/actions/learn-github-actions/variables#creating-configuration-variables-for-a-repository) named `PUBLIC_URL` to your canonical site URL, including a trailing slash, for example `https://www.example.com/`. Keep this in sync with the hostname in [`public/CNAME`](public/CNAME) and with **Settings → Pages → Custom domain** for this repository.

Local production checks:

```bash
set PUBLIC_URL=https://your-owner.github.io/your-repo/
npm run build
```

(On Unix, use `export PUBLIC_URL=...`.)

## Deployment (GitHub Actions + GitHub Pages)

1. In the GitHub repository, enable **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Pushes to `main` run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which builds the site and publishes it with the official Pages actions.
4. **Custom domain:** add the domain under Pages settings, complete DNS at your registrar (A / CNAME records as required), and enable HTTPS when GitHub allows it. See [Configuring a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

Pull requests and pushes also run [`.github/workflows/ci.yml`](.github/workflows/ci.yml) (tests + build).

## Project layout

- `src/InnoSite.jsx` — main page composition
- `src/config.js` — copy, navigation, and content configuration
- `public/` — static assets and `CNAME` for Pages custom hostname

## Learn more

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://react.dev/)
