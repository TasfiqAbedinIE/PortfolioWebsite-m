# A K M Tasfiq Abedin Portfolio

A portfolio of industrial engineering, operational excellence, and digital transformation work.

## Run locally

```powershell
npm.cmd ci
npm.cmd start
```

Open http://localhost:3000.

## Publish

The primary site is https://abedinportfolio.web.app/. It uses Firebase Hosting in the `abedinportfolio` project. After signing in with an account that has access to that Firebase project, run:

```powershell
$env:PUBLIC_URL = ''
npm.cmd run build
npm.cmd exec --yes --package=firebase-tools -- firebase deploy --only hosting --project abedinportfolio
```

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` also publishes a mirror at https://tasfiqabedinie.github.io/PortfolioWebsite-m/. It sets `PUBLIC_URL` to the repository path for that build.
