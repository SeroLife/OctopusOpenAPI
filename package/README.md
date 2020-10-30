# Octopus Api Client

A Typescript Api Client for Octopus Energy.

Built using OpenAPIGenerator.

## Installing

`npm i @sero-digital/octopus-energy-api``

## Usage

```typescript
const apiClient = new OctopusApiClient(process.env.OCTOPUS_API_KEY);
const result = await apiClient.energyProductsApi.productsGet();
console.log(result.data.result);
```
