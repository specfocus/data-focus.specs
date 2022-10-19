import isObject from './is-object';
import isPrimitive, { type Primitive } from './is-primitive';

export interface ShallowObject {
  [K: string]: Primitive;
}

const isShallowObject = (val: unknown): val is ShallowObject =>
  isObject(val) && !Object.values(val).some(value => !isPrimitive(value));

export default isShallowObject;