/**
* Insertion sort is a basic algorithm for sorting items.
* It has a running time of O(n²) in the worst case,
* a running time of O(n) in the best case (when it is already sorted).
* It is faster than other known algorithms when sorting small arrays.
* This algorithm produces a stable sort.
*/

const theArray = [72, 14, 34, 5, 24, 14, 53, 61, 38, 110, 39]
const initialLength = theArray.length;

const insertionSort = arrayToSort => {
  let temp, current, j;

  for (let i = 0; i < initialLength; i++) {
    current = arrayToSort[i];

    console.log(`current: ${current}`);
    arrayToSort[i] = '*';
    console.log(`previous order: ${arrayToSort}`);

    for (j = i - 1; j >= 0 && arrayToSort[j] > current; j--) {
      arrayToSort[j + 1] = arrayToSort[j];
      console.log(`j: ${j}`);
    }

    arrayToSort[j + 1] = current;
    console.log(`new order: ${arrayToSort}`);
  }

  return arrayToSort;
};

console.log(`original array: ${theArray}`);
const sortedArray = insertionSort(theArray);
console.log(`sorted array: ${sortedArray}`);
