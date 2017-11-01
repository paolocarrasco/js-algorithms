/**
* Bubble sort is a basic algorithm for sorting items.
* It has a running time of O(n²) in the worst case.
* It is used mostly when learning algorithms.
*/
const theArray = [72, 14, 34, 5, 24, 14, 53, 61, 38, 110, 39];

const checkIfSwap = (array, i, j) => {
  x = array[i];
  y = array[j];

  if (x > y) {
    temp = x;
    x = y;
    array[i] = x;
    array[j] = temp;
    console.log(`Swapped! ${x} -> ${temp}`);
  }
}
const bubbleSort = arrayToSort => {
  const length = arrayToSort.length;
  let temp, x, y;

  for (var i = 0; i < length - 1; i++) {
    console.log(`previous order: ${arrayToSort}`);

    for (var j = i + 1; j < length; j++) {
      console.log(`comparing ${arrayToSort[i]} against ${arrayToSort[j]} at position ${j}`);
      checkIfSwap(arrayToSort, i, j);
    }

    console.log(`new order: ${arrayToSort}`);
  }

  return arrayToSort;
};

console.log(`original array: ${theArray}`);
const sortedArray = bubbleSort(theArray);
console.log(`sorted array: ${sortedArray}`);
