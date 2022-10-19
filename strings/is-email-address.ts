import isString from './is-string';

export type EmailAddress = string;

const EMAIL_ADDRESS_EXP = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isEmailAddress = (val: unknown): val is EmailAddress =>
  isString(val) && EMAIL_ADDRESS_EXP.test(val);

export default isEmailAddress;