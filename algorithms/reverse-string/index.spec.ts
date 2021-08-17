import { reverseStringUsingArray } from '.';

describe('reverse string tests', () => {
  it.only('Should reverse the string successfully using array', () => {
    expect(reverseStringUsingArray('hello')).toBe('olleh');
    expect(reverseStringUsingArray('jonathan')).toBe('nahtanoj');
    expect(reverseStringUsingArray('nalo')).toBe('olan');
  });
});
