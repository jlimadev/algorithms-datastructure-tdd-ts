type CharMap = { [anyStr: string]: number }; // Index Signature (Typescript Only)

// Using "for in" loop
const mostRepeatedChar = (str: string): string => {
  const charMap: CharMap = {};
  let maxCount = 0;
  let mostRepeated = '';

  str.split('').forEach(char => {
    charMap[char] = charMap[char] + 1 || 1;
  });

  for (const char in charMap) {
    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      mostRepeated = char;
    }
  }

  return mostRepeated;
};

// Using "Object.entries" to iteration instead of "for in"
const mostRepeatedCharV2 = (str: string): string => {
  const charMap: CharMap = {};

  Array.from(str).forEach(char => {
    charMap[char] = charMap[char] + 1 || 1;
  });

  // Object.entries(charMap).sort((a, b) => b[1] - a[1]);
  const sortedMap = Object.entries(charMap).sort(
    (current: [string, number], next: [string, number]) => {
      const currentValue = current[1];
      const nextValue = next[1];
      return nextValue - currentValue;
    },
  );

  // get the first element of sortedMap and get the key of this first element
  return sortedMap[0][0];
};

const mostRepeatedCharV2Optimized = (str: string): string => {
  const charMap: CharMap = {};
  Array.from(str).forEach(char => {
    charMap[char] = charMap[char] + 1 || 1;
  });

  return Object.entries(charMap)
    .sort((current, next) => next[1] - current[1])
    .map(sorted => sorted[0])
    .find(() => true)!;
};

export { mostRepeatedChar, mostRepeatedCharV2, mostRepeatedCharV2Optimized };
