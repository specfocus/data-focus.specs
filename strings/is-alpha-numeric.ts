import isString from './is-string';

const ALPHA_NUMBERIC_EXP = /^[A-Za-z0-9]+$/;

const isAlphaNumeric = (val: unknown): val is string =>
  isString(val) && !!val.match(ALPHA_NUMBERIC_EXP);

export default isAlphaNumeric;