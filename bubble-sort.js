const theArray = [72, 14, 34, 5, 24, 14, 53, 61, 38, 110, 39];

const swap = (array, i, j) => {
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
  let temp, x, y;

  for (var i = 0; i < arrayToSort.length - 1; i++) {
    console.log(`previous order: ${arrayToSort}`);

    for (var j = i + 1; j < arrayToSort.length; j++) {
      console.log(`comparing ${arrayToSort[i]} against ${arrayToSort[j]} at position ${j}`);
      swap(arrayToSort, i, j);
    }

    console.log(`new order: ${arrayToSort}`);
  }

  return arrayToSort;
};

const sortedArray = bubbleSort(theArray);

console.log(sortedArray);
