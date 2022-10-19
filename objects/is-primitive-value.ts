export type PrimitiveValue = boolean | number | string;

const isPrimitiveValue = (val: unknown): val is PrimitiveValue =>
  ['boolean', 'number', 'string'].includes(typeof val);

export default isPrimitiveValue;