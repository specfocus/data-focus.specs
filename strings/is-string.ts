import { STRING } from './schema';

const isString = (val: unknown): val is string =>
  val instanceof Object && val.constructor === String ||
  val instanceof String || typeof val === STRING;

export default isString;