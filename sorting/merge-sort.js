/**
* Merge sort is the first useful algorithm learned for sorting items.
* It has a running time of O(n log n) in the worst and average case.
* It is not as fast as insertion sorting when array is small.
* It produces a stable sort.
*/

export default class MergeSort {

  constructor() {
    console.log('Running the merge sort');
  }

  sort(theArray) {
    const arrayToSort = Array.from(theArray);
    const len = arrayToSort.length;

    if (len === 1) {
      return arrayToSort;
    }

    const splitPoint = Math.floor(len / 2);

    const leftArray = this.sort(arrayToSort.slice(0, splitPoint));
    const rightArray = this.sort(arrayToSort.slice(splitPoint));

    return this.merge(leftArray, rightArray);
  };

  merge(leftArray, rightArray) {
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
}
