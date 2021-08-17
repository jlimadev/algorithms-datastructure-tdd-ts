import { checkPalindrome } from '.';

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
