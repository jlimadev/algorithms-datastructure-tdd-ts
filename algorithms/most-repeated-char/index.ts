type CharMap = { [anyStr: string]: number }; // Index Signature (Typescript Only)

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

// Pretty much the same logic, but using "Object.entries" to iteration instead of "for in"
const mostRepeatedCharV2 = (str: string): string => {
  const charMap: CharMap = {};
  let maxCount = 0;
  let mostRepeated = '';

  str.split('').forEach(char => {
    charMap[char] = charMap[char] + 1 || 1;
  });

  Object.entries(charMap).forEach(entry => {
    const key = entry[0];
    const value = entry[1];

    if (value > maxCount) {
      maxCount = value;
      mostRepeated = key;
    }
  });

  return mostRepeated;
};

export { mostRepeatedChar, mostRepeatedCharV2 };
