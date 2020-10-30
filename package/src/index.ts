
import { EnergyProductsApi } from './octopus';

export class OctopusApiClient {
  constructor(apiKey: string) {
    console.log(apiKey);
  }

  energyProductsApi = new EnergyProductsApi();
}