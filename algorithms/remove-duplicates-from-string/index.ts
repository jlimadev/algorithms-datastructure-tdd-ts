const removeDuplicatesUsingSet = (input: string): string =>
  [...new Set(Array.from(input))].join('');

const removeDuplicatesUsingFilter = (input: string): string => {
  const arrayFromInput = Array.from(input);
  const noDuplicatesArray = arrayFromInput.filter(
    (it, index, self: string[]) => {
      return self.indexOf(it) === index;
    },
  );
  return noDuplicatesArray.join('');
};

export { removeDuplicatesUsingSet, removeDuplicatesUsingFilter };
