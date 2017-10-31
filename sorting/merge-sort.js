const mergeSort = arrayToSort => {
  const len = arrayToSort.length;

  if (len === 1) {
    return arrayToSort;
  }

  const splitPoint = Math.floor(len / 2);

  const leftArray = mergeSort(arrayToSort.slice(0, splitPoint));
  const rightArray = mergeSort(arrayToSort.slice(splitPoint));

  return merge(leftArray, rightArray);
};

const merge = (leftArray, rightArray) => {
  const resultingArray = [];
  const totalLength = leftArray.length + rightArray.length;

  let i = 0, j = 0, k = 0, item;

  while (k++ < totalLength) {
    const itemOnLeftExists = leftArray[i] && !rightArray[j];
    const isLeftLessThanRight = leftArray[i] < rightArray[j];

    if (itemOnLeftExists || isLeftLessThanRight) {
      item = leftArray[i++];
    }
    else {
      item = rightArray[j++];
    }

    resultingArray.push(item);
  }

  return resultingArray;
};

const theArray = [72, 14, 34, 5, 24, 14, 53, 61, 38, 110, 39]
const sortedArray = mergeSort(theArray);

console.log(`original array: ${theArray}`);
console.log(`sorted array: ${sortedArray}`);

