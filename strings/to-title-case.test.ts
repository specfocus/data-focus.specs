import toTitleCase from './to-title-case';

describe('titleCase', () => {
  [
    ['hi  there', 'Hi There'],
    ['hi-There', 'Hi There'],
    ['hi_there_1', 'Hi There 1'],
    ['  hi_there  ', 'Hi There'],
  ].forEach(([input, expected]) => {
    it(`should ${input} => ${expect}`, () => {
      expect(toTitleCase(input)).toBe(expected);
    });
  });
});