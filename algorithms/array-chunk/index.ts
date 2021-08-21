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

export { chunkArray };
