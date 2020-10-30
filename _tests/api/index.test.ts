import { serial, SerialInterface } from "ava";

import * as EnergyProductsApi from './energy-products';

const test = serial as SerialInterface;

EnergyProductsApi.tests(test);