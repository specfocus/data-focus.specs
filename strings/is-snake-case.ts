import isString from './is-string';
import toSnakeCase from './to-snake-case';

export type SnakeCase = string;

const isSnakeCase = (val: unknown): val is SnakeCase =>
  isString(val) && val === toSnakeCase(val);

export default isSnakeCase;