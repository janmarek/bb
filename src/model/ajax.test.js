import {objectToQueryString} from "./ajax";

it('can convert object to query string', () => {
    expect(objectToQueryString()).toBe('');
    expect(objectToQueryString(null)).toBe('');
    expect(objectToQueryString({a: 1, b: 'c'})).toBe('?a=1&b=c');
    expect(objectToQueryString({a: ' ', b: 'c'})).toBe('?a=%20&b=c');
});
