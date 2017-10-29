const theArray = [72, 14, 34, 5, 24, 14, 53, 61, 38, 110, 39]

const selectionSort = arrayToSort => {
  const length = arrayToSort.length;

  for (let i = 0; i < length; i++) {
    const current = arrayToSort[i];
    let minPosition = i;
    let minimum = current;

    console.log(`current: ${current}`);

    for (j = i; j < length; j++) {
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
};

console.log(`original array: ${theArray}`);
const sortedArray = selectionSort(theArray);
console.log(`sorted array: ${sortedArray}`);
