import { type XOR } from '../objects/xor';
import { type NumberComparison } from './operator';

export const $eq = '$eq';
export const $gt = '$gt';
export const $gte = '$gte';
export const $lt = '$lt';
export const $lte = '$lte';

type And = { $and:  NumberRule[] };
type Or = { $or: NumberRule[] };
type Not = { $not: NumberRule; }

export type NumberRule = XOR<NumberComparison, XOR<Not, XOR<And, Or>>>;

const r: NumberRule = {
  $not: {
    $or: [
      { $eq: 9 },
      {
        $and: [
          { $gt: 50 },
          { $lt: 100 }
        ]
      }
    ]
  }
}