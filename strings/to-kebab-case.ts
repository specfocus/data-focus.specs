import toLowerCase from './to-lower-case';
import toWords from './to-words';

const toKebabCase = (str: string): string => toLowerCase(toWords(str).join('-'));

export default toKebabCase;