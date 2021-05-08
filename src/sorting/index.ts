import { selectionSort } from "./selectionSort";

const array = [1, 5, 2, 7, 3, -15, 0, 12, -35, 9, 8];
const sortedArray = [...array].sort();

for (let i = 0; i < 1000000; i++) {
  sortedArray.push(i);
}

export function sorting() {
  console.log(selectionSort(array));

  return sortedArray;
}
