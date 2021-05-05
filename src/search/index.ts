import { linearSearch } from './linear';
import { binarySearch } from './binary';

const array = [1, 5, 2, 7, 3, 9, 8];

// const sortedArray = array.sort();
const sortedArray:Array<number> = [];

for (let i = 0; i < 1000000; i++) {
  sortedArray.push(i);
}

export function search() {
  // console.log(linearSearch(array, 7));
  console.log(binarySearch(sortedArray, 7));
}
