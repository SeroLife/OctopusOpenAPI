# OctopusOpenAPI

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

An OpenAPI project for the Octopus Energy REST API

## Build

```
npm i

# This generates the api from openapi doc and build the npm package
npm start

# To run local tests
npm run test-api-client
```

## Testing

You will need a few parameters to run some of the tests.
Create a `.env` in the root of the `_tests` folder.

```ELEC_SERIAL_NUMBER=
GAS_SERIAL_NUMBER=
MPAN=
MPRN=
OCTOPUS_API_KEY=
```

**DO NOT COMMIT THIS FILE!!!**

## Releasing

When you want to release a new version to the npm registry. Simply Tag the `main` branch of the repository on GitHub. This will trigger a Actions workflow.
Semantic versions please: `vMajor.minor.patch` e.g `v1.0.0`.

## Conventions

Please use Commitizen to keep commit messages consistent.
