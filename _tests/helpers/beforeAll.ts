import { ExecutionContext } from 'ava';
import { ITestData } from './before';
import { config } from 'dotenv';

export async function before(t: ExecutionContext<any>): Promise<ITestData> {
  try {
    config({ path: '.env' })
    const output: ITestData = {
      elecSerialNumber: process.env.ELEC_SERIAL_NUMBER,
      gasSerialNumber: process.env.GAS_SERIAL_NUMBER,
      mpan: process.env.MPAN,
      mprn: process.env.MPRN,
      octopusApiKey: process.env.OCTOPUS_API_KEY,
    };

    return output;
  } catch (err) {
    t.log(err);
    throw new Error(`Error retrieving user data`);
  }
}
