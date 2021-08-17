import { checkPalindrome, checkPalindromeUsingEvery } from '.';

describe('palindrome tests', () => {
  it('Should return true if word is palindrome', () => {
    expect(checkPalindrome('abba')).toBe(true);
    expect(checkPalindrome('madam')).toBe(true);
    expect(checkPalindrome('tenet')).toBe(true);
  });

  it('Should return false if word is not palindrome', () => {
    expect(checkPalindrome('pato')).toBe(false);
    expect(checkPalindrome('bear')).toBe(false);
    expect(checkPalindrome('jonathan')).toBe(false);
  });
});

describe('palindrome tests using every', () => {
  it('Should return true if word is palindrome', () => {
    expect(checkPalindromeUsingEvery('abba')).toBe(true);
    expect(checkPalindromeUsingEvery('madam')).toBe(true);
    expect(checkPalindromeUsingEvery('tenet')).toBe(true);
  });

  it('Should return false if word is not palindrome', () => {
    expect(checkPalindromeUsingEvery('pato')).toBe(false);
    expect(checkPalindromeUsingEvery('bear')).toBe(false);
    expect(checkPalindromeUsingEvery('jonathan')).toBe(false);
  });
});
