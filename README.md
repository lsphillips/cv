# The CV of Luke S. Phillips

[![Built and deployed using GitHub Action](https://github.com/lsphillips/cv/actions/workflows/build-and-deploy.yml/badge.svg?branch=master)](https://github.com/lsphillips/cv/actions)

The source code for the CV of Luke S. Phillips, which can be viewed here: www.lsphillips.com/cv

## Development

This project is split into two parts:

- **The CV source**\
  Contained in the `src` directory. This is where the design and functionality is defined.
- **The CV data**\
  Contained in the `data` directory. This is where the content is defined.

**Please Note:** Node.js is required because NPM scripts are used to facilitate the build process.

### Email Obfuscation

To help mitigate against email scraping, the contact email address is expected to be obfuscated. To obfuscate an email address for the data files, use this tool:

```
npm run obfuscate-email -- {email}
```

## Building

To build a deployable artifact:

```
npm run build
```

This will create a `site` directory containing the compiled HTML, CSS and JavaScript for the CV.

### Running locally

To setup a seamless development environment:

```
npm run start
```

This will perform a build in memory and serve it using a local web server on port `1992`. It will watch all source and data files for changes, where the site will be rebuilt when such changes occur.

## Deployment

The site is hosted through GitHub Pages. The deployment is faciliated by the [Build & Deploy](.github/workflows/build-and-deploy.yml) GitHub Action Workflow, where it will perform a build and deploy the resulting artifact GitHub Pages.
