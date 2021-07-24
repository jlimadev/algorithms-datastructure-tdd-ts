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

const removeDuplicatesUsingObject = (input: string): string => {
  const arrayFromInput = Array.from(input);
  const myObject: { [key: string]: number } = {};
  arrayFromInput.forEach((it: string) => {
    // this validation can be 1) | [single pipe], 2) || [double pipe] or 3) ?? [Nullish coalescing]
    myObject[it] = myObject[it] + 1 ?? 1;
  });

  return Object.keys(myObject).join('');
};

export {
  removeDuplicatesUsingSet,
  removeDuplicatesUsingFilter,
  removeDuplicatesUsingObject,
};
