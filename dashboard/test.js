// import { array } from 'prop-types';

// function findNoOfOccurance(arr, searchElement) {
//   let count = 0;
//   arr.forEach((el) => {
//     if (el === searchElement) {
//       count++;
//     }
//   });

//   return count;
// }
//find smallest value
//find how many times a number occured
// const arr = [1, 1, 2, 2, 2, 3, 4];
// const elementToCount = 2;
// console.log(arr.sort());

// const count = findNoOfOccurance(arr, elementToCount);
// console.log(elementToCount, count);

// function countOccurrences(arr, searchElement) {
//   let count = 0;
//   arr.forEach((element) => {
//     if (element === searchElement) {
//       count++;
//     }
//   });
//   return count;
// }

// // Example usage:
// const array = [1, 2, 3, 4, 1, 2, 1];
// const elementToCount = 1;

// const occurrences = countOccurrences(array, elementToCount);
// console.log(`Number of occurrences of ${elementToCount}: ${occurrences}`);

// sum of n number of inputs

// function addNnumberOfInputs(arr) {
//   let sum = 0;
//   const index = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       // const element = arr[i];
//       if (arr[i] === arr[j]) {
//         index.push(j);
//       }
//     }

//     // Sn = n(n+1)/2

//     let number = arr[i];
//     sum += number;
//   }
//   return { index, sum };
// }

// const { index, sum } = addNnumberOfInputs([1, 1, 3, 4, 3, 2, 5]);
// console.log(
//   `the index of same values: ${index} and the sum of N number of inputs is ${sum}`
// );

// function addNnumberOfInputs(num, n) {
//   if (n <= 0) {
//     return 0;
//   }

//   return addNnumberOfInputs(num, n - 1) + num[n - 1];
// }
// const arr = [4, 5, 8, 4, 85, 42, 3, 0];
// const sumOfNnumbers = addNnumberOfInputs(arr, arr.length);
// console.log(`the sum of first Natural number is ${sumOfNnumbers}`);

// function addNnumbersOfinputs(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// addNnumbersOfinputs(arr);

// function addThousandsOfElements() {
//   let arr = [];
//   for (let i = 0; i < 1000; i++) {
//     arr.push(Math.round(Math.random() * 1000));
//   }
//   return arr;
// }

// console.log(addThousandsOfElements());

// CREATE RANDOM NUMBERS OF ARRAY USING RECURSION

// let newArr = [];
// function randomArrayUsingRecursion(n, underNumber) {
//   if (n <= 0) {
//     return newArr;
//   }

//   let randomArray = Math.round(Math.random() * 100);
//   newArr.push(randomArray);
//   console.log(randomArray);
//   return randomArrayUsingRecursion(n - 1, underNumber);
// }

// const n = 1000;
// const withInNumber = 100;
// const randomArray = randomArrayUsingRecursion(n, withInNumber);
// console.log(randomArray);

// let arr = [];
// let randomArray = arr.
// Math.round(Math.random() * 10);

// console.log(randomArray);

// find minimum number in array

function findMinElementOfArray(arr) {
  let minimumNumber = arr[0];
  // let indexOfMinimum;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minimumNumber) {
      minimumNumber = arr[i];
    }
  }
  return minimumNumber;
}

const minimumNumber = findMinElementOfArray([
  100, 2, 3, 53, 341, 1, 0, 0, 2, -0.1,
]);

console.log(minimumNumber);

// find min number using recursion
const arr = [23, 12, 5, 23, 8, 9034, 12, 4, 1, 0];
function findMinNumberUsingRecursion(arr, arrLength) {
  let minNumber = arr[0];
  if (arrLength <= 0) {
    return minNumber;
  }

  if (minNumber < arr[arrLength - 1])
    return findMinNumberUsingRecursion(arr, arrLength - 1);
}

const minNumber = findMinNumberUsingRecursion(arr, arr.length);

console.log(minNumber);
