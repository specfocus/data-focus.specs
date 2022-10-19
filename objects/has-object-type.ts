const hasObjectType = (val: unknown): val is object => typeof val === 'object';

export default hasObjectType;