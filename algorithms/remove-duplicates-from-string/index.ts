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

const removeDuplicatesUsingMap = (input: string): string => {
  const data = Array.from(input);
  const cleanData: Array<string> = [];
  data.forEach((element: string) => {
    if (!cleanData.includes(element)) {
      cleanData.push(element);
    }
  });
  return cleanData.join('');
};

export {
  removeDuplicatesUsingSet,
  removeDuplicatesUsingFilter,
  removeDuplicatesUsingObject,
  removeDuplicatesUsingMap,
};
