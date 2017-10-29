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

const sortedArray = insertionSort(theArray);

console.log(sortedArray);
console.assert(sortedArray.length === initialLength);
