import hasObjectType from './has-object-type';

const isNull = (val: unknown): val is null => hasObjectType(val) && val == null;

export default isNull;