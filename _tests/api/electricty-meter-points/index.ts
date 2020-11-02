
import { SerialInterface } from 'ava';
import { apiClient } from '../../client/api';
import { ITestData } from '../../helpers/before';

export function tests(test: SerialInterface<ITestData>): void {
  test('ElectricityMeterPointsApi.getElectricityMeterPoints | it should return the meter point information', async t => {
    if (t.context.mpan && t.context.elecSerialNumber) {
      const result = await apiClient.electricityMeterPointsApi.getElectricityMeterPoints(
        t.context.mpan,
      );

      t.true(result.status === 200);
      t.falsy(result.status !== 200);
    } else {
      t.log('No environment variables available')
      t.true(true);
    }
  });
}