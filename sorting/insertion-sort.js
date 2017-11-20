/**
* Insertion sort is a basic algorithm for sorting items.
* It has a running time of O(n²) in the worst case,
* a running time of O(n) in the best case (when it is already sorted).
* It is faster than other known algorithms when sorting small arrays.
* This algorithm produces a stable sort.
*/
export default class InsertionSort {
  constructor() {
    console.log('Running insertion sort');
  }

  sort(theArray) {
    const arrayToSort = Array.from(theArray);
    const initialLength = theArray.length;
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
}
