const checkPalindrome = (str: string): boolean => {
  const reversed = Array.from(str).reverse().join('');
  return str === reversed;
};

// this is not the best solution, but it is another way to solve
const checkPalindromeUsingEvery = (str: string): boolean => {
  return Array.from(str).every((char: string, index: number) => {
    // first iteration - compare current char with the last
    // second iteration - compare current char with the second last
    // n interaction - compare current char with the n last (or itself)
    return char === str[str.length - index - 1];
  });
};

export { checkPalindrome, checkPalindromeUsingEvery };
