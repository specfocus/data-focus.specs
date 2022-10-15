export type PrimitivePropertyType = boolean | number | string;

export interface ShallowObject {
  [K: string]: PrimitivePropertyType;
}

export type PropertyType = PrimitivePropertyType | ShallowObject | null;

export interface ComplexObject {
  [K: string]: PropertyType;
}