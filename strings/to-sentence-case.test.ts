import toSentenceCase from './to-sentence-case';

describe('sentenceCase', () => {
  ;[
    ['hi  there', 'Hi there'],
    ['hi-There', 'Hi there'],
    ['hi_there_1', 'Hi there 1'],
    ['  hi_there  ', 'Hi there'],
  ].forEach(([input, expected]) => {
    it(`should ${input} => ${expect}`, () => {
      expect(toSentenceCase(input)).toBe(expected);
    });
  });
});