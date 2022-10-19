import isString from './is-string';
import toCamelCase from './to-camel-case';

export type CamelCase = string;

const isCamelCase = (val: unknown): val is CamelCase =>
  isString(val) && val === toCamelCase(val);

export default isCamelCase;