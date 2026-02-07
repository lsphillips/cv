# The CV of Luke S. Phillips

[![Built and deployed using GitHub Action](https://github.com/lsphillips/cv/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/lsphillips/cv/actions)

The source code for the CV of Luke S. Phillips, which can be viewed here: www.lsphillips.com/cv

## CV Data

The CV is generated from the `cv.yaml` file found in the [data](data) directory.

If the CV requires an image, then the image file should be put in the [data/images](data/images) directory. The image paths in the CV data file should be relative to that directory, for example if the image is at `data/images/avatar.png` then the path should be just `avatar.png`.

### Email Obfuscation

To help mitigate against email scraping, the contact email address is expected to be obfuscated. To obfuscate an email address for the data files, run this command:

``` bash
npm run obfuscate-email -- {email}
```

## Development

> [!NOTE]
> You will need [Node.js](https://nodejs.org/) v24 (or higher) installed.

### Building

To build a deployable bundle in the `website` directory, run this command:

``` bash
npm run build
```

### Running locally

To run the website on a local development server running on port `1992`, run this command:

``` bash
npm run start
```

> [!TIP]
> Changes in [client JavaScript](src/scripts), [stylesheets](src/styles), [templates](src/templates) and the [CV data](data) will trigger the website to be rebuilt automatically.

### Code Quality

To perform code quality checks, powered by ESLint, run this command:

``` bash
npm run start
```

Please refer to the [eslint.config.js](eslint.config.js) file to familiar yourself with the rules.
