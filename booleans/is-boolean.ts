import { BOOLEAN } from './schema';

const isBoolean = (val: unknown): val is boolean =>
  val instanceof Object && val.constructor === Boolean ||
  val instanceof Boolean || typeof val === BOOLEAN;

export default isBoolean;