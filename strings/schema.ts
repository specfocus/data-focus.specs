import { StringPropertyKind } from './kind';

export const STRING = 'string';

export type StringPropertyType = typeof STRING;

export interface StringPropertySchema {
  $kind: StringPropertyKind | undefined;
  $nullable: boolean | undefined;
  $optional: boolean | undefined;
  $type: StringPropertyType;
}