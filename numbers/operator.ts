import { type XOR } from '../objects/xor';

export const $eq = '$eq';
export const $gt = '$gt';
export const $gte = '$gte';
export const $lt = '$lt';
export const $lte = '$lte';

export const NUMBER_OPERATORS = [$eq, $gt, $gte, $lt, $lte] as const;

export type NumberOperator = typeof NUMBER_OPERATORS[number];

type Op<K extends string> = { [P in K]: number | string };

type Equal = Op<typeof $eq>;
type LessThan = XOR<Op<typeof $lt>, Op<typeof $lte>>;
type GreaterThan = XOR<Op<typeof $gt>, Op<typeof $gte>>;
type Range = LessThan & GreaterThan;

export type NumberComparison = XOR<Equal, XOR<Range, XOR<LessThan, GreaterThan>>>;

export const isNumberOperator = (key: any): key is NumberOperator => NUMBER_OPERATORS.includes(key);