import isString from './is-string';

export type Guid = string;

const GUID_EX = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/;

const isGuid = (val: unknown): val is Guid =>
  isString(val) && GUID_EX.test(val);

export default isGuid;