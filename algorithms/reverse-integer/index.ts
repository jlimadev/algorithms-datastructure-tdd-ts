// Given an Integer number, you need to return this number reversed and with correct signal

// Solution 1
const reverseIntFirstSolution = (n: number): number => {
  const absoluteNumber = Math.abs(n);
  const reversed = Array.from(absoluteNumber.toString(10)).reverse().join('');
  const reversedNumber = Number(reversed);
  return n < 0 ? reversedNumber * -1 : reversedNumber;
};

// Solution 2 (cleaner solution)
// no use of absolute, instead use of parseInt and Math.sign
const reverseIntSecondSolution = (n: number): number => {
  const reversed = Array.from(n.toString(10)).reverse().join('');
  const reversedNumber = parseInt(reversed, 10);
  return reversedNumber * Math.sign(n);
};

export { reverseIntFirstSolution, reverseIntSecondSolution };
