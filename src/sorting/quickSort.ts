// the complexity of the algorithm is O (log2n*n), where n is the number of iteration elements in the array
// Khoar sorting

let count = 0;
export const quickSort = <T>(convertedArray: Array<T>): Array<T> => {
  const array = convertedArray;

  if (array.length <= 1) return array;

  const pivotIndex = Math.floor(array.length / 2);

  const pivot = array[pivotIndex];

  const less = [];
  const greater = [];

  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex) {
      continue;
    }

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  console.log(`quickSort ${count} iterations`);

  return [...quickSort(less), pivot, ...quickSort(greater)];
};
