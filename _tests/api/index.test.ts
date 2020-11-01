import { serial, SerialInterface } from "ava";

import * as EnergyProductsApi from './energy-products';
import * as ConsumptionApi from './consumption';
import { ITestData } from '../helpers/before';
import { before } from '../helpers/beforeAll';

const test = serial as SerialInterface<ITestData>;

test.before(async t => {
  t.context = await before(t); // eslint-disable-line no-param-reassign
});

EnergyProductsApi.tests(test);
ConsumptionApi.tests(test);
