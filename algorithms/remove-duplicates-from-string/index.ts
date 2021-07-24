const removeDuplicatesUsingSet = (input: string): string =>
  [...new Set(Array.from(input))].join('');

export { removeDuplicatesUsingSet };
