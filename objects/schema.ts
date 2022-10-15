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

export const NAVIGATION = 'navigation';

export type NavigationPropertyKind = typeof NAVIGATION;

export interface NavigationPropertySchema {
  $collection: string;
  $kind: NavigationPropertyKind;
  $nullable: boolean | undefined;
  $type: StringPropertyType;
}

export interface Schema {
  $props: Record<string, NavigationPropertySchema | ObjectPropertySchema | PrimitivePropertySchema>;
}