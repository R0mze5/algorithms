// the complexity of the algorithm is O (n*n), where n is the number of iteration elements in the array
let count = 0;
export const bubbleSorting = <T>(convertedArray: Array<T>): Array<T> => {
  const array = convertedArray;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count += 1;
    }
  }

  console.log(`bubbleSorting ${count} iterations`);
  return array;
};
