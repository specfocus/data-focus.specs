import { NUMBER } from './schema';

const isNumber = (val: unknown): val is number =>
  val instanceof Object && val.constructor === Number ||
  val instanceof Number || (typeof val === NUMBER && val === val);

export default isNumber;