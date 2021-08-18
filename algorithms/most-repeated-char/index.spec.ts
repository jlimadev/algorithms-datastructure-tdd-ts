import { mostRepeatedChar } from '.';

describe('reverse string tests', () => {
  describe('first solution', () => {
    it('Should return the most repeated char in a string', () => {
      expect(mostRepeatedChar('apple')).toBe('p');
      expect(mostRepeatedChar('banana')).toBe('a');
      expect(mostRepeatedChar('hey ho lets go')).toBe(' ');
      expect(mostRepeatedChar('banana 111142')).toBe('1');
    });
  });
});
