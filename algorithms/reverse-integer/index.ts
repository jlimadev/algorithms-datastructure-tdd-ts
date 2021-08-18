// Given an Integer number, you need to return this number reversed and with correct signal

// Solution 1
const reverseInt = (n: number): number => {
  const absoluteNumber = Math.abs(n);
  const reversed = Array.from(absoluteNumber.toString(10)).reverse().join('');
  const reversedNumber = Number(reversed);
  return n < 0 ? reversedNumber * -1 : reversedNumber;
};

export { reverseInt };
