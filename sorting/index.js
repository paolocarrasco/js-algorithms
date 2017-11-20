import BubbleSort from './bubble-sort';
const theArray = [72, 14, 34, 5, 24, 14, 53, 61, 38, 110, 39];

console.log(`original array: ${theArray}`);
const sortedArray = new BubbleSort().sort(theArray);
console.log(`sorted array: ${sortedArray}`);
