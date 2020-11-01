# Octopus Api Client

A Typescript Api Client for Octopus Energy.

Built using OpenAPIGenerator.

## Installing

`npm i @sero-digital/octopus-energy-api``

## Usage

```typescript
const apiClient = new OctopusApiClient();
const result = await apiClient.energyProductsApi.productsGet();
console.log(result.data.result);
```

### Authentication

Some routes are authenticated such as consumption.
To Authenticate, you will need to get an API_KEY from Optopus's developer dashboard.

Use the `generateAuthHeader` method supplied as part of the package.

```typescript
const apiClient = new OctopusApiClient();
await apiClient.consumptionApi.electricityMeterPointsMpanMetersSerialNumberConsumptionGet(
  process.env.OCTOPUS_MPAN || '',
  process.env.OCTOPUS_SERIAL_NUMBER || '',
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  generateAuthHeader(process.env.OCTOPUS_API_KEY || '')
);
```
