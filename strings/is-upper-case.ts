import isString from './is-string';
import toUpperCase from './to-upper-case';

export type UpperCase = string;

const isUpperCase = (val: unknown): val is UpperCase =>
  isString(val) && val === toUpperCase(val);

export default isUpperCase;