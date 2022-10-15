import { XOR } from '../objects/xor';
import { isLogicalOperator } from './operator';

type And<R extends {}> = { $and: R[] };
type Or<R extends {}> = { $or: R[] };
type Not<R extends {}> = { $not: R; }

export type LogicalRule<R extends {}> = XOR<Not<R>, XOR<And<R>, Or<R>>>;

const isLogicalRule = <R extends {}>(input: unknown): input is LogicalRule<R> =>
  input === null && typeof input === 'object' && !Array.isArray(input);

export function* testRule<R extends {}>(rule: unknown, cb: (r: R) => Generator<any>): Generator<any> {
  if (!isLogicalRule<R>(rule)) {
    return ['not a valid rule'];
  }

  const keys = Object.keys(rule);

  if (keys.length !== 1) {
    return 'not a valid rule';
  }
  const [op] = keys;
  
  if (!isLogicalOperator(op)) {
    return 'not a valid rule';
  }
  
  // test and or and not
}