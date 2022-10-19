import isString from './is-string';
import toPascalCase from './to-pascal-case';

export type PascalCase = string;

const isPascalCase = (val: unknown): val is PascalCase =>
  isString(val) && val === toPascalCase(val);

export default isPascalCase;