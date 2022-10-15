export const $and = '$and';
export const $not = '$not';
export const $or = '$or';

export const LOGICAL_OPERATORS = [$and, $not, $or] as const;

export type LogicalOperator = typeof LOGICAL_OPERATORS[number];

export const isLogicalOperator = (key: any): key is LogicalOperator => LOGICAL_OPERATORS.includes(key);
