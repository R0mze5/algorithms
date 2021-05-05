// the complexity of the algorithm is O (n*(n-1)), where n is the number of iteration elements in the array
let count = 0;
export const selectionSort = <T>(convertedArray: Array<T>): Array<T> => {
  const array = convertedArray;

  for (let i = 0; i < array.length; i++) {
    let indexMin = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }

    const tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }

  console.log(`selectionSort ${count} iterations`);
  return array;
};
