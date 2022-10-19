import isString from './is-string';
import toKebabCase from './to-kebab-case';

export type KebabCase = string;

const isKebabCase = (val: unknown): val is KebabCase => 
  isString(val) && val == toKebabCase(val);

export default isKebabCase;