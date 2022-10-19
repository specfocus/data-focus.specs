import hasObjectType from './has-object-type';

export type PrimitiveObject = Boolean | Date | Number | String;

const isPrimitiveObject = (val: unknown): val is PrimitiveObject =>
  hasObjectType(val) && (
    val instanceof Boolean ||
    val instanceof Date ||
    val instanceof Number ||
    val instanceof String
  );

export default isPrimitiveObject;