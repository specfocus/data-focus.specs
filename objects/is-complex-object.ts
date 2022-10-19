import isObject from './is-object';
import isPrimitive, { type Primitive } from './is-primitive';
import isShallowObject, { type ShallowObject } from './is-shallow-object';

export type PropertyType = Primitive | ShallowObject | null;

export interface ComplexObject {
  [K: string]: PropertyType;
}

const isComplexObject = (val: unknown): val is ComplexObject =>
  isObject(val) && !Object.values(val).some(value => !isPrimitive(val) && !isShallowObject(value));

export default isComplexObject;