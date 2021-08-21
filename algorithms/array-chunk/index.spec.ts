import { chunkArray } from '.';

describe('reverse string tests', () => {
  it('Should return right chunk array - first case', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const chunkSize = 2;
    const expectedResponse = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    const response = chunkArray(array, chunkSize);
    expect(response).toEqual(expectedResponse);
  });

  it('Should return right chunk array - second case', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const chunkSize = 2;
    const expectedResponse = [[1, 2], [3, 4], [5, 6], [7]];

    const response = chunkArray(array, chunkSize);
    expect(response).toEqual(expectedResponse);
  });

  it('Should return right chunk array - third case', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const chunkSize = 10;
    const expectedResponse = [[1, 2, 3, 4, 5, 6, 7]];

    const response = chunkArray(array, chunkSize);
    expect(response).toEqual(expectedResponse);
  });

  it('Should return right chunk array - fourth case', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const chunkSize = 3;
    const expectedResponse = [[1, 2, 3], [4, 5, 6], [7]];

    const response = chunkArray(array, chunkSize);
    expect(response).toEqual(expectedResponse);
  });

  it('Should return right chunk array - fifth case', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const chunkSize = 4;
    const expectedResponse = [
      [1, 2, 3, 4],
      [5, 6, 7],
    ];

    const response = chunkArray(array, chunkSize);
    expect(response).toEqual(expectedResponse);
  });
});
