export const BOOLEAN = 'boolean';

export type BooleanPropertyType = typeof BOOLEAN;

export interface BooleanPropertySchema {
    $nullable: boolean | undefined;
    $optional: boolean | undefined;
    $type: BooleanPropertyType;
}