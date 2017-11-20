import BubbleSort from './bubble-sort';
import InsertionSort from './insertion-sort';
import SelectionSort from './selection-sort';
import MergeSort from './merge-sort';

const theArray = [72, 14, 34, 5, 24, 14, 53, 61, 38, 110, 39];
let sortedArray;

console.log(`original array: ${theArray}`);
sortedArray = new BubbleSort().sort(theArray);
console.log(`sorted array: ${sortedArray}`);

console.log(`original array: ${theArray}`);
sortedArray = new InsertionSort().sort(theArray);
console.log(`sorted array: ${sortedArray}`);

console.log(`original array: ${theArray}`);
sortedArray = new SelectionSort().sort(theArray);
console.log(`sorted array: ${sortedArray}`);
