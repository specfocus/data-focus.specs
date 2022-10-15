export const CAMEL_CASE = 'camelCase';
export const CODE = 'code';
export const DATE = 'date';
export const IDENTIFIER = 'identifier';
export const KEBAB_CASE = 'kebab-case';
export const LITERAL = '*';
export const PASCAL_CASE = 'PascalCase';
export const REGEXP = 'regex';
export const SNAKE_CASE = 'snake_case';
export const TIME = 'time';
export const STRING_PROPERTY_KINDS = [
  CAMEL_CASE,
  CODE,
  DATE,
  IDENTIFIER,
  KEBAB_CASE,
  LITERAL,
  PASCAL_CASE,
  REGEXP,
  SNAKE_CASE,
  TIME
] as const;

export type StringPropertyKind = typeof STRING_PROPERTY_KINDS[number];