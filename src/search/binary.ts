// only works with sorted array
// the complexity of the algorithm is O (n), where n is the number of iteration elements in the array

// with cycle search
export function binarySearch(array: Array<number>, item: number): number {
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

let binaryCount = 0;

export function binaryRecursiveSearch(
  array: Array<number>,
  item: number,
  startPosition?: number,
  endPosition?: number
): number {
  const start = startPosition ?? 0;
  const end = endPosition || array.length;

  const middle = Math.floor((start + end) / 2);
  binaryCount += 1;

  if (typeof startPosition === "undefined") {
    console.log(binaryCount);
  }

  if (array[middle] === item) {
    return middle;
  }

  if (item < array[middle]) {
    return binaryRecursiveSearch(array, item, start, middle - 1);
  }
  if (item > array[middle]) {
    return binaryRecursiveSearch(array, item, middle + 1, end);
  }

  return -1;
}
