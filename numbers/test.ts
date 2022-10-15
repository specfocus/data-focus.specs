import { type NumberOperator, NUMBER_OPERATORS, $eq, $gt, $gte, $lt, $lte, NumberComparison, isNumberOperator } from './operator';
import { type NumberRule } from './rule';

type NumberTestResult = [string, number];

export const NUMBER_TESTS = {
  [$eq]: (value: number, control: number) => value === control,
  [$gt]: (value: number, control: number) => value > control,
  [$gte]: (value: number, control: number) => value >= control,
  [$lt]: (value: number, control: number) => value < control,
  [$lte]: (value: number, control: number) => value <= control
};
  
export function* testNumber(value: number, rule: NumberRule): Generator<NumberTestResult> {
  for (const [key, control] of Object.entries(rule)) {
    if (isNumberOperator(key)) {
      const ok = NUMBER_TESTS[key](value, control);
      if (!ok) {
        yield [key, control];
      }
    } else {
      for (const result of []) {
        yield result;
      }
    }
  }
}
    

function* validate(value: number, rule: NumberRule): Generator<NumberTestResult> {

    yield ['dfd', '$gt', 4];
};

export default validate;