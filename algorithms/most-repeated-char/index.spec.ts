import {
  mostRepeatedChar,
  mostRepeatedCharV2,
  mostRepeatedCharV2Optimized,
} from '.';

describe('most repeated char in string', () => {
  describe('first solution', () => {
    it('Should return the most repeated char in a string', () => {
      expect(mostRepeatedChar('apple')).toBe('p');
      expect(mostRepeatedChar('banana')).toBe('a');
      expect(mostRepeatedChar('hey ho lets go')).toBe(' ');
      expect(mostRepeatedChar('banana 111142')).toBe('1');
    });
  });

  describe('second solution', () => {
    it('Should return the most repeated char in a string', () => {
      expect(mostRepeatedCharV2('apple')).toBe('p');
      expect(mostRepeatedCharV2('banana')).toBe('a');
      expect(mostRepeatedCharV2('hey ho lets go')).toBe(' ');
      expect(mostRepeatedCharV2('banana 111142')).toBe('1');
    });
  });

  describe('third solution', () => {
    it('Should return the most repeated char in a string', () => {
      expect(mostRepeatedCharV2Optimized('apple')).toBe('p');
      expect(mostRepeatedCharV2Optimized('banana')).toBe('a');
      expect(mostRepeatedCharV2Optimized('hey ho lets go')).toBe(' ');
      expect(mostRepeatedCharV2Optimized('banana 111142')).toBe('1');
    });
  });
});
