import { reverseIntFirstSolution, reverseIntSecondSolution } from '.';

describe('reverse string tests', () => {
  describe('first solution', () => {
    it('Should reverse integer positive numbers', () => {
      expect(reverseIntFirstSolution(10)).toBe(1);
      expect(reverseIntFirstSolution(854)).toBe(458);
      expect(reverseIntFirstSolution(4500)).toBe(54);
    });

    it('Should reverse integer negative numbers', () => {
      expect(reverseIntFirstSolution(-25)).toBe(-52);
      expect(reverseIntFirstSolution(-40)).toBe(-4);
      expect(reverseIntFirstSolution(-8533)).toBe(-3358);
    });

    it('Should return 0 when the input is 0', () => {
      expect(reverseIntFirstSolution(0)).toBe(0);
    });
  });

  describe('second solution', () => {
    it('Should reverse integer positive numbers', () => {
      expect(reverseIntSecondSolution(10)).toBe(1);
      expect(reverseIntSecondSolution(854)).toBe(458);
      expect(reverseIntSecondSolution(4500)).toBe(54);
    });

    it('Should reverse integer negative numbers', () => {
      expect(reverseIntSecondSolution(-25)).toBe(-52);
      expect(reverseIntSecondSolution(-40)).toBe(-4);
      expect(reverseIntSecondSolution(-8533)).toBe(-3358);
    });

    it('Should return 0 when the input is 0', () => {
      expect(reverseIntSecondSolution(0)).toBe(0);
    });
  });
});
