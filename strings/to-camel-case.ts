import toWords from './to-words';
import toUpperCaseFirstLetter from './to-upper-case-first-letter';

const toCamelCase = (str: string): string =>
  toWords(str).reduce(
    (acc, next) => `${acc}${!acc ? next : toUpperCaseFirstLetter(next)}`,
    '',
  );

export default toCamelCase;