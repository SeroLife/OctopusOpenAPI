
import { SerialInterface } from 'ava';
import { apiClient } from '../../client/api';
import { ITestData } from '../../helpers/before';

export function tests(test: SerialInterface<ITestData>): void {
  test('IndustryApi.getGridSupplyPoints | it should return the industry points of the postcode', async t => {
    const result = await apiClient.industryApi.getGridSupplyPoints('CF10 1BR');

    t.true(result.status === 200);
    t.falsy(result.status !== 200);
  });
}