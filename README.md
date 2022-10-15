# data-focus


```typescript
type PropertyType = boolean | number | string;

type ShallowObjectType = Record<string, PropertyType>;

type ComplexObjectType = Record<string, PropertyType | ShallowType>;

interface BooleanPropertySchema {
  $type: 'boolean';
}

interface NumberPropertySchema {
  $type: 'number';
}

interface StringPropertySchema {
  $type: 'string';
}

type PropertySchema = BooleanPropertySchema | NumberPropertySchema | StringPropertySchema;

interface ShallowObjectSchema {
  [K: string]: PropertySchema;
}

interface ComplexObjectSchema {
  [K: string]: PropertySchema | ShallowObjectSchema;
}
```
