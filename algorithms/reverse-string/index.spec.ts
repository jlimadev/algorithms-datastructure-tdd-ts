import {
  reverseStringUsingArray,
  revereStringUsingForLoop,
  revereStringUsingReduce,
} from '.';

const data = {
  firstString: 'hello',
  firstStringExpectedResult: 'olleh',
  secondString: 'jonathan',
  secondStringExpectedResult: 'nahtanoj',
  thirdString: 'nalo',
  thirdStringExpectedResult: 'olan',
};

describe('reverse string tests', () => {
  it('Should reverse the string successfully using array', () => {
    expect(reverseStringUsingArray(data.firstString)).toBe(
      data.firstStringExpectedResult,
    );
    expect(reverseStringUsingArray(data.secondString)).toBe(
      data.secondStringExpectedResult,
    );
    expect(reverseStringUsingArray(data.thirdString)).toBe(
      data.thirdStringExpectedResult,
    );
  });

  it('Should reverse the string successfully using for loop', () => {
    expect(revereStringUsingForLoop(data.firstString)).toBe(
      data.firstStringExpectedResult,
    );
    expect(revereStringUsingForLoop(data.secondString)).toBe(
      data.secondStringExpectedResult,
    );
    expect(revereStringUsingForLoop(data.thirdString)).toBe(
      data.thirdStringExpectedResult,
    );
  });

  it('Should reverse the string successfully using reduce', () => {
    expect(revereStringUsingReduce(data.firstString)).toBe(
      data.firstStringExpectedResult,
    );
    expect(revereStringUsingReduce(data.secondString)).toBe(
      data.secondStringExpectedResult,
    );
    expect(revereStringUsingReduce(data.thirdString)).toBe(
      data.thirdStringExpectedResult,
    );
  });
});
