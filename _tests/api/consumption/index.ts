
import { SerialInterface } from 'ava';
import { generateAuthHeader } from '../../../package/src';
import { apiClient } from '../../client/api';
import { ITestData } from '../../helpers/before';

export function tests(test: SerialInterface<ITestData>): void {
  test('ConsumptionApi.getElectricityConsumption | it should return the property consumption', async t => {
    if (t.context.octopusApiKey && t.context.mpan && t.context.elecSerialNumber) {
      const result = await apiClient.consumptionApi.electricityMeterPointsMpanMetersSerialNumberConsumptionGet(
        t.context.mpan,
        t.context.elecSerialNumber,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        generateAuthHeader(t.context.octopusApiKey)
      );

      t.true(result.status === 200);
      t.falsy(result.status !== 200);
    } else {
      t.log('No environment variables available')
      t.true(true);
    }
  });
}