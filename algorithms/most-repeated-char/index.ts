const mostRepeatedChar = (str: string): string => {
  type CharMap = { [anyStr: string]: number }; // Index Signature (Typescript Only)
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

export { mostRepeatedChar };
