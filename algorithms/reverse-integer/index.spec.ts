import { reverseInt } from '.';

describe('reverse string tests', () => {
  it('Should reverse integer number', () => {
    expect(reverseInt(-25)).toBe(-52);
    expect(reverseInt(10)).toBe(1);
    expect(reverseInt(854)).toBe(458);
    expect(reverseInt(-40)).toBe(-4);
    expect(reverseInt(0)).toBe(0);
  });
});
