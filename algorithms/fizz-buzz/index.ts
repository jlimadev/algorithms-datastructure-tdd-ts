const fizzbuzz = (entry: number): string => {
  const empty = '';
  const fizz = entry % 3 === 0 ? 'fizz' : empty;
  const buzz = entry % 5 === 0 ? 'buzz' : empty;

  return `${fizz}${buzz}` !== empty ? `${fizz}${buzz}` : 'invalid entry';
};

// Ugly solution
const fizzbuzzUglySolution = (entry: number): string => {
  if (entry % 3 === 0 && entry % 5 === 0) {
    return 'fizzbuzz';
  }

  if (entry % 3 === 0) {
    return 'fizz';
  }

  if (entry % 5 === 0) {
    return 'buzz';
  }

  return 'invalid entry';
};

export { fizzbuzz, fizzbuzzUglySolution };
