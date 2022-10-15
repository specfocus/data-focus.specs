export const BYTE = 'byte';
export const DOUBLE = 'double';
export const FLOAT = 'float';
export const INT32 = 'int32';
export const INT64 = 'int64';
export const TIMESTAMP = 'timestamp';
export const UINT32 = 'uint32';
export const UINT64 = 'uint64';
export const NUMBER_PROPERTY_KINDS = [
  BYTE,
  DOUBLE,
  FLOAT,
  INT32,
  INT64,
  TIMESTAMP,
  UINT32,
  UINT64
] as const;

export type NumberPropertyKind = typeof NUMBER_PROPERTY_KINDS[number];