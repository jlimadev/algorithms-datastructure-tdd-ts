const fizzbuzz = (entry: number): string => {
  const EMPTY = '';
  const fizz = entry % 3 === 0 ? 'fizz' : EMPTY;
  const buzz = entry % 5 === 0 ? 'buzz' : EMPTY;

  const response =
    `${fizz}${buzz}` !== EMPTY ? `${fizz}${buzz}` : 'invalid entry';

  return response;
};

export { fizzbuzz };
