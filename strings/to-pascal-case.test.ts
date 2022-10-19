import toPascalCase from './to-pascal-case';

describe('toPascalCase', () => {
  [
    ['hi  there', 'HiThere'],
    ['hi-there', 'HiThere'],
    ['hi_there_1', 'HiThere1'],
    ['  hi_there  ', 'HiThere'],
    ['1ApplePlease', '1ApplePlease'],
  ].forEach(([input, expected]) => {
    it(`should ${input} => ${expect}`, () => {
      expect(toPascalCase(input)).toBe(expected);
    });
  });
});