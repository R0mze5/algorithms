let count = 0;

export function linearSearch(array :Array<number>, item: number) : number | null {
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === item) {
      console.log({ count });
      return i;
    }
  }

  console.log({ count });
  return null;
}

// the complexity of the algorithm is O (n), where n is the number of iteration elements in the array
