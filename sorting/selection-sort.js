/**
* Another simple sorting algorithm.
* It has a running time of O(n²) in the worst case.
* This algorithm does not produce a stable sort.
*/

export default class SelectionSort {

  constructor() {
    console.log('Running selection sort');
  }

  sort(theArray) {
    const arrayToSort = Array.from(theArray);
    const length = arrayToSort.length;

    for (let i = 0; i < length; i++) {
      const current = arrayToSort[i];
      let minPosition = i;
      let minimum = current;

      console.log(`current: ${current}`);

      for (let j = i; j < length; j++) {
        if (arrayToSort[j] < minimum) {
          minPosition = j;
          minimum = arrayToSort[j];
          console.log(`minimum: ${minimum}`);
        }
      }

      arrayToSort[i] = minimum;
      arrayToSort[minPosition] = current;
      console.log(`Swapped ${minimum} <-> ${current}`);
      console.log(`new array: ${arrayToSort}`);
    }

    return arrayToSort;
  }
}
