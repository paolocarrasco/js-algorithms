import BubbleSort from './bubble-sort';
import InsertionSort from './insertion-sort';
import SelectionSort from './selection-sort';
import MergeSort from './merge-sort';

const theArray = [72, 14, 34, 5, 24, 14, 53, 61, 38, 110, 39];

const sortingAlgorithms = [
  BubbleSort,
  InsertionSort,
  SelectionSort,
  MergeSort
];

sortingAlgorithms.forEach(algorithm => {
  console.log('-----------------------------------------');
  console.log(`original array: ${theArray}`);
  let sortedArray = new algorithm().sort(theArray);
  console.log(`sorted array: ${sortedArray}`);
  console.log('-----------------------------------------');
});
