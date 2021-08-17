import {
  reverseStringUsingArray,
  revereStringUsingForLoop,
  revereStringUsingReduce,
} from '.';

describe('reverse string tests', () => {
  it('Should reverse the string successfully using array', () => {
    expect(reverseStringUsingArray('hello')).toBe('olleh');
    expect(reverseStringUsingArray('jonathan')).toBe('nahtanoj');
    expect(reverseStringUsingArray('nalo')).toBe('olan');
  });

  it('Should reverse the string successfully using for loop', () => {
    expect(revereStringUsingForLoop('hello')).toBe('olleh');
    expect(revereStringUsingForLoop('jonathan')).toBe('nahtanoj');
    expect(revereStringUsingForLoop('nalo')).toBe('olan');
  });

  it('Should reverse the string successfully using reduce', () => {
    expect(revereStringUsingReduce('hello')).toBe('olleh');
    expect(revereStringUsingReduce('jonathan')).toBe('nahtanoj');
    expect(revereStringUsingReduce('nalo')).toBe('olan');
  });
});
