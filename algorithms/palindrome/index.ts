const checkPalindrome = (str: string): boolean => {
  const reversed = Array.from(str).reverse().join('');
  return str === reversed;
};

export { checkPalindrome };
