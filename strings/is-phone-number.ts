import isString from './is-string';

const PHONE_EX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export type PhoneNumber = string;

const isPhoneNumber = (val: unknown): val is PhoneNumber =>
  isString(val) && PHONE_EX.test(val);

export default isPhoneNumber;