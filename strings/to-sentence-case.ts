import toUpperCaseFirstLetter from './to-upper-case-first-letter';
import toWords from './to-words';

const toSentenceCase = (str: string): string => toUpperCaseFirstLetter(toWords(str).join(' '));

export default toSentenceCase;