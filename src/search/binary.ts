// с помощью циклов
export function binarySearch(array :Array<number>, item: number) : number {
  let count = 0;

  let start = 0;
  let end = array.length;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    count += 1;
    const middle = Math.floor((start + end) / 2);

    if (array[middle] === item) {
      found = true;
      position = middle;

      console.log({ count });
      return position;
    }

    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  console.log({ count });
  return position;
}

// работает только с отсортированным массивом
// сложность алгоритма O(n), где n  - количество элементов итераций в массиве
