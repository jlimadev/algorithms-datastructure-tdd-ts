import { removeDuplicatesUsingSet, removeDuplicatesUsingFilter } from '.';

const makeSut = () => {
  const input = 'abcabc';
  const expectedResult = 'abc';

  return { input, expectedResult };
};

describe('remove-duplicates-from-string', () => {
  describe('removeDuplicatesUsingSet', () => {
    it('Should remove duplicates from string', () => {
      // Arrange
      const { input, expectedResult } = makeSut();

      // Act
      const result = removeDuplicatesUsingSet(input);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });

  describe('removeDuplicatesUsingFilter', () => {
    it('Should remove duplicates from string', () => {
      // Arrange
      const { input, expectedResult } = makeSut();

      // Act
      const result = removeDuplicatesUsingFilter(input);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
