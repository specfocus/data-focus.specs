export const CAMEL_CASE = 'camelCase';
export const CODE = 'code';
export const DATE = 'date';
export const EMAIL = 'email';
export const GUID = 'guid';
export const IDENTIFIER = 'identifier';
export const KEBAB_CASE = 'kebab-case';
export const LITERAL = '*';
export const LOWER_CASE = 'lowercase';
export const PASCAL_CASE = 'PascalCase';
export const REGEXP = 'regex';
export const SENTENCE_CASE = 'Sentence case';
export const SNAKE_CASE = 'snake_case';
export const TIME = 'time';
export const TITLE_CASE = 'Title Case';
export const UPPER_CASE = 'UPPERCASE';
export const STRING_PROPERTY_KINDS = [
  CAMEL_CASE,
  CODE,
  DATE,
  EMAIL,
  GUID,
  IDENTIFIER,
  KEBAB_CASE,
  LITERAL,
  LOWER_CASE,
  PASCAL_CASE,
  REGEXP,
  SENTENCE_CASE,
  SNAKE_CASE,
  TIME,
  TITLE_CASE,
  UPPER_CASE
] as const;

export type StringPropertyKind = typeof STRING_PROPERTY_KINDS[number];