import isString from './is-string';

export type Url = string;

const URL_EX = /^[a-z][a-z0-9+.-]*:/;

const isUrl = (val: unknown): val is Url =>
  isString(val) && URL_EX.test(val);

export default isUrl;