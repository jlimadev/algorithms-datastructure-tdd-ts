// Given an array and a chunk size, divide the array into many sub-arrays where each arrays is of length of chunk size
// chunk([1, 2, 3, 4], 2) => [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 3) => [[1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) => [[1, 2, 3, 4, 5]]

const chunkArray = (
  array: Array<number>,
  size: number,
): Array<Array<number>> => {
  const response: Array<Array<number>> = [];
  let index = 0;

  while (index < array.length) {
    response.push(array.slice(index, index + size));
    index += size;
  }
  return response;
};

// Most ugly way, but honest work
const chunkArrayV2 = (
  array: Array<number>,
  size: number,
): Array<Array<number>> => {
  const response: Array<Array<number>> = [];
  const tempArr: Array<number> = [];
  let missingElementsCount = array.length;
  const missingData: Array<number> = [];
  array.forEach((element, index) => {
    tempArr.push(element);
    if (tempArr.length === size) {
      response.push([...tempArr]);
      tempArr.splice(0, size);
      missingElementsCount -= 1;
      return;
    }

    if (array.length % size !== 0) {
      if (missingElementsCount < size) {
        missingData.push(element);
      }

      if (index + 1 === array.length) {
        response.push(...[missingData]);
      }
      missingElementsCount -= 1;
    }
  });
  return response;
};

const tryAgain = (array: Array<number>, size: number): Array<Array<number>> => {
  const response: Array<Array<number>> = [];
  let index = 0;

  while (index < array.length) {
    response.push(array.slice(index, index + size));
    index += size;
  }
  return response;
};

export { chunkArray, chunkArrayV2, tryAgain };
