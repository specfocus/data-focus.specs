import toUpperCaseFirstLetter from './to-upper-case-first-letter';
import toWords from './to-words';

const toTitleCase = (str: string): string => toWords(str).map(toUpperCaseFirstLetter).join(' ');

export default toTitleCase;