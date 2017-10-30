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

const a = [2, 4, 7, 9, 13, 16];
const b = [3, 5, 6, 8, 10, 12, 18];

console.log(merge(a, b));
