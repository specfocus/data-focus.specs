import { type BooleanPropertySchema } from '../booleans/schema';
import { type NumberPropertySchema } from '../numbers/schema';
import { type StringPropertyType, type StringPropertySchema } from '../strings/schema';

export const OBJECT = 'object';

export type ObjectPropertyType = typeof OBJECT;

export type PrimitivePropertySchema = BooleanPropertySchema | NumberPropertySchema | StringPropertySchema;

export interface ObjectPropertySchema {
  $nullable: boolean | undefined;
  $optional: boolean | undefined;
  $props: Record<string, PrimitivePropertySchema>;
  $type: ObjectPropertyType;
}

export const IDENTITY = 'identity';

export type IdentityPropertyKind = typeof IDENTITY;

export interface IdentityPropertySchema {
  $kind: IdentityPropertyKind;
  $type: StringPropertyType;
}

export const NAVIGATION = 'navigation';

export type NavigationPropertyKind = typeof NAVIGATION;

export interface NavigationPropertySchema {
  $kind: NavigationPropertyKind;
  $nullable: boolean | undefined;
  $source: string; // collection name
  $type: StringPropertyType;
}

export type PropertySchema =
  IdentityPropertySchema |
  NavigationPropertySchema |
  ObjectPropertySchema |
  PrimitivePropertySchema;

export interface EntitySchema {
  $props: Record<string, PropertySchema>;
}