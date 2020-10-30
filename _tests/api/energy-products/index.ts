import { SerialInterface } from 'ava';

import { apiClient } from '../../client/api';

export function tests(test: SerialInterface): void {
  test('EnergyProductsApi.getProducts | it should return a list of energy products', async t => {
    const result = await apiClient.energyProductsApi.productsGet();

    t.true(result.data.results.length > 0);
    t.true(result.status === 200);
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

    t.true(count > result.data.count - 1);
    t.true(result.status === 200);
    t.falsy(result.status !== 200);
  });
}
