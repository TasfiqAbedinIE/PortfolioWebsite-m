# A K M Tasfiq Abedin Portfolio

A portfolio of industrial engineering, operational excellence, and digital transformation work.

## Run locally

```powershell
npm.cmd ci
npm.cmd start
```

Open http://localhost:3000.

## Publish

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site when `main` changes. In the repository's **Settings → Pages**, select **GitHub Actions** as the source. The public site will be at https://tasfiqabedinie.github.io/PortfolioWebsite-m/.

The workflow sets `PUBLIC_URL` to the repository path before building so scripts and styles load correctly on GitHub Pages.
