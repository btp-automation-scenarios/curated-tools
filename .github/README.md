# GitHub Pages Deployment

This repository automatically deploys the Docusaurus website to GitHub Pages using GitHub Actions.

## How it works

1. **Trigger**: The deployment is triggered automatically when you push to the `main` branch
2. **Build**: The workflow builds the Docusaurus site from the `website/` directory
3. **Deploy**: The built site is deployed to GitHub Pages

## Setup Requirements

Make sure GitHub Pages is enabled in your repository settings:

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Set the source to "GitHub Actions"
4. The site will be available at: https://btp-automation-scenarios.github.io/curated-tools/

## Workflow Details

- **Node.js Version**: 18 (LTS)
- **Build Directory**: `website/`
- **Output Directory**: `website/build/`
- **Deployment URL**: https://btp-automation-scenarios.github.io/curated-tools/

## Manual Deployment

You can also deploy manually using:

```bash
cd website
npm run build
npm run deploy
```

Note: Manual deployment requires proper git configuration and GitHub credentials.
