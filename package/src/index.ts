import { ConsumptionApi, ElectricityMeterPointsApi, EnergyProductsApi, IndustryApi } from './octopus';

export const AGILE_PRODUCT_CODE = "AGILE-18-02-21";
export const generateTariffCode = (productCode = AGILE_PRODUCT_CODE) => { return `E-1R-${productCode}-C` };
export const generateAuthHeader = (apiKey: string) => {
  const encodedKey = Buffer.from(`${apiKey}:`).toString('base64');
  return {
    headers: {
      authorization: `Basic ${encodedKey}`
    }
  }
};
export class OctopusApiClient {
  constructor() { }

  consumptionApi = new ConsumptionApi();
  electricityMeterPointsApi = new ElectricityMeterPointsApi();
  energyProductsApi = new EnergyProductsApi();
  industryApi = new IndustryApi();
}