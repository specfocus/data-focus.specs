import toCamelCase from './to-camel-case';

describe('toCamelCase', () => {
  [
    ['hi  there', 'hiThere'],
    ['hi-there', 'hiThere'],
    ['hi_there_1', 'hiThere1'],
    ['  hi_there  ', 'hiThere'],
    ['1ApplePlease', '1ApplePlease'],
  ].forEach(([input, expected]) => {
    it(`should ${input} => ${expect}`, () => {
      expect(toCamelCase(input)).toBe(expected);
    });
  });
});