import hasObjectType from './has-object-type';
import isArray from './is-array';
import isNull from './is-null';
import isPrimitiveObject from './is-primitive-object';

const isObject = <T extends {}>(val: unknown): val is T =>
  hasObjectType(val) && !isNull(val) && !isPrimitiveObject(val) && !isArray(val);

  export default isObject;