import toLowerCase from './to-lower-case';
import toWords from './to-words';

const toSnakeCase = (str: string): string => toLowerCase(toWords(str).join('_'));

export default toSnakeCase;