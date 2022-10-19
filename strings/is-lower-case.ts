import isString from './is-string';
import toLowerCase from './to-lower-case';

export type LowerCase = string;

const isLowerCase = (val: unknown): val is LowerCase =>
  isString(val) && val === toLowerCase(val);

export default isLowerCase;