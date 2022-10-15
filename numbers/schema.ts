import { type NumberPropertyKind } from './kind';
import { type NumberRule } from './rule';

export const NUMBER = 'number';

export type NumberPropertyType = typeof NUMBER;

export interface NumberPropertySchema {
  $kind: NumberPropertyKind | undefined;
  $match: NumberRule;
  $nullable: boolean | undefined;
  $optional: boolean | undefined;
  $type: NumberPropertyType;
}