const reverseStringUsingArray = (str: string): string => {
  return Array.from(str).reverse().join('');
};

const revereStringUsingForLoop = (str: string): string => {
  const data = [];
  for (let i = str.length - 1; i >= 0; i--) {
    data.push(str[i]);
  }
  return data.join('');
};

const revereStringUsingReduce = (str: string): string => {
  return Array.from(str).reduce((reversed, current) => {
    return current + reversed;
  }, '');
};

export {
  reverseStringUsingArray,
  revereStringUsingForLoop,
  revereStringUsingReduce,
};
