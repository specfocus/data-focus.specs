import isString from './is-string';

const NUMERIC_EXP = /^[A-Za-z0-9]+$/;

const isAlphaNumeric = (val: unknown): val is string => {
  return isString(val) && !!val.match(NUMERIC_EXP);
};

export default isAlphaNumeric;