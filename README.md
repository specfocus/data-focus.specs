# data-focus


```typescript
const NUMBER_PROPERTY_KINDS = ['byte', 'float', 'double', 'int32', 'int64', 'timestamp', 'uint32', 'uint64'] as const;
const STRING_PROPERTY_KINDS = ['camelcase', 'code', 'date', 'identifier', 'literal', 'snakecase', 'time'] as const;

type NumberPropertyKind = typeof NUMBER_PROPERTY_KINDS[number];
type StringPropertyKind = typeof STRING_PROPERTY_KINDS[number];

type PropertyType = boolean | number | string;

type ShallowObjectType = Record<string, PropertyType>;

type ComplexObjectType = Record<string, PropertyType | ShallowType>;

interface BooleanPropertySchema {
  $nullable: boolean | undefined;
  $optional: boolean | undefined;
  $type: 'boolean';
}

interface NavigationPropertySchema {
  $collection: string;
  $kind: 'navigation';
  $nullable: boolean | undefined;
  $type: 'string';
}

interface NumberPropertySchema {
  $kind: NumberPropertyKind | undefined;
  $nullable: boolean | undefined;
  $optional: boolean | undefined;
  $type: 'number';
}

interface StringPropertySchema {
  $kind: StringPropertyKind | undefined;
  $nullable: boolean | undefined;
  $optional: boolean | undefined;
  $type: 'string';
}

type PropertySchema = BooleanPropertySchema | NavigationPropertySchema | NumberPropertySchema | StringPropertySchema;

interface ShallowObjectSchema {
  $nullable: boolean | undefined;
  $optional: boolean | undefined;
  $type: 'object';
  [K: string]: PropertySchema;
}

interface ComplexObjectSchema {
  $nullable: boolean | undefined;
  $optional: boolean | undefined;
  $type: 'object';
  [K: string]: PropertySchema | ShallowObjectSchema;
}
```
