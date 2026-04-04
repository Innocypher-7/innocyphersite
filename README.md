# Innocypher

**Build Smart. Scale Fast.** Grow with INNOCYPHER.

INNOCYPHER transforms ideas into powerful digital products. Transform your business with custom web apps, mobile solutions, cloud infrastructure, and AI-powered automation.

This repository is the Innocypher startup website: a client-side SPA built with [Create React App](https://github.com/facebook/create-react-app). Production output goes to the `build` folder. Copy and sections are driven by [`src/config.js`](src/config.js) (`SITE_TEXT` and related exports).

## Stack

- React 19, `react-scripts` (CRA)
- Tailwind CSS
- [lucide-react](https://lucide.dev/) icons
- [Testing Library](https://testing-library.com/) for smoke tests
- **Backend**: Node.js + Express + Nodemailer (email service)

## Backend Features

The backend provides email functionality for the contact form:

- SMTP-based email sending
- HTML email templates with attractive formatting
- Input validation and sanitization
- Environment-based configuration
- CORS support

See [backend/README.md](backend/README.md) for detailed setup instructions.

## Prerequisites

- Node.js LTS (see `engines` in [`package.json`](package.json))
- npm

## Local development

### Frontend

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). The dev server reloads on file changes.

### Backend (Email Service)

The contact form requires the backend to send emails.

```bash
# Install backend dependencies
npm run install:backend

# Create .env file from template
cp backend/.env.example backend/.env

# Edit backend/.env with your SMTP credentials (see backend/README.md)

# Run backend server
npm run dev:backend
```

Backend runs on `http://localhost:5000` by default.

**Note**: Update `REACT_APP_API_URL` in `src/.env` if backend runs on different port:

```env
REACT_APP_API_URL=http://localhost:5000/api/contact/send
```

## Scripts

| Command                   | Purpose                                                 |
| ------------------------- | ------------------------------------------------------- |
| `npm start`               | Dev server (frontend)                                   |
| `npm run build`           | Production build → `build/`                             |
| `npm test`                | Tests (interactive locally; CI uses `--watchAll=false`) |
| `npm run install:backend` | Install backend dependencies                            |
| `npm run dev:backend`     | Start backend with auto-reload (development)            |
| `npm run start:backend`   | Start backend server (production)                       |

## Production build and `PUBLIC_URL`

[`package.json`](package.json) sets **`"homepage": "."`**, so production builds use **relative** URLs for CSS, JS, and [`manifest.json`](public/manifest.json). The same build works at **`https://<owner>.github.io/<repo>/`** and at a **custom domain** (e.g. `https://innocypher.com`) without pointing assets at another origin (which triggers [mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content) or **CORS** on the manifest when the page is opened on the custom host).

- **CI and deploy** set `PUBLIC_URL` to **`.`** unless you define a repository variable **`PUBLIC_URL`**. If you set it, use **`https://...`** with a trailing slash (never `http://`); workflows rewrite accidental `http://` to `https://`.

Optional local build with an absolute public URL:

```bash
set PUBLIC_URL=https://innocypher.com/
npm run build
```

(On Unix, use `export PUBLIC_URL=...`.)

## Deployment (GitHub Actions + GitHub Pages)

1. In the GitHub repository, enable **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. **Workflows live on the branch you push.** Both [CI](.github/workflows/ci.yml) and [deploy](.github/workflows/deploy-pages.yml) are triggered by pushes to **`master`** (and deploy can also be started manually: **Actions → Deploy GitHub Pages → Run workflow**). If your work is on another branch (for example `localsite`), merge it into `master` and push `master` so GitHub sees `.github/workflows/` and runs them.
4. Pushes to `master` run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which builds the site and publishes it with the official Pages actions.
5. **Custom domain:** add the domain under Pages settings, complete DNS at your registrar (A / CNAME records as required), and enable HTTPS when GitHub allows it. See [Configuring a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

Pull requests targeting `master` and pushes to `master` also run [`.github/workflows/ci.yml`](.github/workflows/ci.yml) (tests + build).

## Project layout

- `src/InnoSite.jsx` — main page composition
- `src/config.js` — copy, navigation, and content configuration
- `public/` — static assets and `CNAME` for Pages custom hostname

## Learn more

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://react.dev/)
