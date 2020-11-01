import { SerialInterface } from 'ava';
import { AGILE_PRODUCT_CODE, generateTariffCode } from '../../../package/src';
import { apiClient } from '../../client/api';
import { ITestData } from '../../helpers/before';

export function tests(test: SerialInterface<ITestData>): void {
  test('EnergyProductsApi.getProducts | it should return a list of energy products', async t => {
    const result = await apiClient.energyProductsApi.productsGet();

    t.true(result.status === 200);
    t.true(result.data.results.length > 0);
    t.falsy(result.status !== 200);
  });

  test('EnergyProductsApi.getProducts | it should return a list of energy products that are green', async t => {
    const result = await apiClient.energyProductsApi.productsGet(undefined, true);

    const count = result.data.results.reduce((acc, cur) => {
      if (cur.is_green) {
        acc++;
      }
      return acc;
    }, 0)

    t.true(result.status === 200);
    t.true(count > result.data.count - 1);
    t.falsy(result.status !== 200);
  });

  test('EnergyProductsApi.getAgileTariff | it should return the agile tariff', async t => {
    const result = await apiClient.energyProductsApi.productsProductCodeElectricityTariffsTariffCodeStandardUnitRatesGet(AGILE_PRODUCT_CODE, generateTariffCode(AGILE_PRODUCT_CODE));

    t.true(result.status === 200);
    t.falsy(result.status !== 200);
  });
}
