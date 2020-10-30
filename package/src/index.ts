
import { EnergyProductsApi } from './octopus';

export class OctopusApiClient {
  constructor(apiKey: string) {
    console.log(`This will be removed ${apiKey}`);
  }

  energyProductsApi = new EnergyProductsApi();
}