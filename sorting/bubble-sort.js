/**
* Bubble sort is a basic algorithm for sorting items.
* It has a running time of O(n²) in the worst case.
* It is used mostly when learning algorithms.
*/
export default class BubbleSort {

  constructor() {
    console.log('Running bubble sort');
  }

  checkIfSwap(array, i, j) {
    let x = array[i];
    let y = array[j];

    if (x > y) {
      let temp = x;
      x = y;
      array[i] = x;
      array[j] = temp;
      console.log(`Swapped! ${x} -> ${temp}`);
    }
  }

  sort(arrayToSort) {
    const length = arrayToSort.length;
    let temp, x, y;

    for (var i = 0; i < length - 1; i++) {
      console.log(`previous order: ${arrayToSort}`);

      for (var j = i + 1; j < length; j++) {
        console.log(`comparing ${arrayToSort[i]} against ${arrayToSort[j]} at position ${j}`);
        this.checkIfSwap(arrayToSort, i, j);
      }

      console.log(`new order: ${arrayToSort}`);
    }

    return arrayToSort;
  }
}

