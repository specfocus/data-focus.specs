export const isObjectType = (value: unknown) => typeof value === 'object';

const isPrimitiveObject = (val: object): boolean => 
  val instanceof Boolean ||
  val instanceof Date ||
  val instanceof Number ||
  val instanceof String;

const isFrameworkObject = (val: object): boolean => 
  val instanceof Map ||
  val instanceof Set ||
  val instanceof WeakMap ||
  val instanceof WeakSet;

const isObject = <T extends {}>(val: unknown): val is T =>
  val !== null &&
  typeof val === 'object' &&
  !Array.isArray(val) &&
  !isPrimitiveObject(val) &&
  !isFrameworkObject(val);

  export default isObject;