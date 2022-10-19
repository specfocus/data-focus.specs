import isPrimitiveObject, { type PrimitiveObject } from './is-primitive-object';
import isPrimitiveValue, { type PrimitiveValue } from './is-primitive-value';

export type Primitive = PrimitiveValue | PrimitiveObject;

const isPrimitive = (val: unknown): val is Primitive =>
  isPrimitiveValue(val) || isPrimitiveObject(val);

export default isPrimitive;
