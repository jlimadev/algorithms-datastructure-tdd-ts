const fizzbuzz = (entry: number): string => {
  const fizz = entry % 3 === 0 ? 'fizz' : '';
  const buzz = entry % 5 === 0 ? 'buzz' : '';
  const response = `${fizz}${buzz}` !== '' ? `${fizz}${buzz}` : 'invalid entry';

  return response;
};

export { fizzbuzz };
