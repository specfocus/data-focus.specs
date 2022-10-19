import toSnakeCase from './to-snake-case';

describe('snakeCase', () => {
  [
    ['hi  there', 'hi_there'],
    ['hi-there', 'hi_there'],
    ['hi_there_1', 'hi_there_1'],
    ['  hi_there  ', 'hi_there'],
    ['1ApplePlease', '1_apple_please'],
  ].forEach(([input, expected]) => {
    it(`should ${input} => ${expect}`, () => {
      expect(toSnakeCase(input)).toBe(expected);
    });
  });
});