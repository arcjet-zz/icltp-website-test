# ICLTP 2027 website

Astro-based static website for the 1st International Conference on Low Temperature Plasmas.

The Chinese maintenance guide is available in [MAINTENANCE.md](./MAINTENANCE.md).

## Local development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

The static output is generated in `dist/`.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys this project automatically on pushes to `main`.
The Astro base path is derived from `GITHUB_REPOSITORY`, so the project can be hosted at:

```text
https://<owner>.github.io/icltp-website-test/
```

In the GitHub repository, open **Settings → Pages** and select **GitHub Actions** as the source. On standard
accounts the Pages site is public; if an Enterprise visibility selector is shown, choose **Public**.
