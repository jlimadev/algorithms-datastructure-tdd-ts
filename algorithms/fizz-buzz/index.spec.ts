import { fizzbuzz } from '.';

describe('FizzBuzz', () => {
  it('It should return fizz when number is divisible by three', () => {
    // Arrange
    const entry = 3;
    const expectedResult = 'fizz';

    // Act
    const result = fizzbuzz(entry);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('It should return buzz when number is divisible by five', () => {
    // Arrange
    const entry = 5;
    const expectedResult = 'buzz';

    // Act
    const result = fizzbuzz(entry);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('It should return fizzbuzz when number is divisible by three and five', () => {
    // Arrange
    const entry = 15;
    const expectedResult = 'fizzbuzz';

    // Act
    const result = fizzbuzz(entry);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
