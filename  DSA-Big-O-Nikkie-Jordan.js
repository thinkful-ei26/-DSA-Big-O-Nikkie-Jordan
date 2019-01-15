'use strict';
//Write the best case, worst case, and average case Big O for each algorithm 

function isEven(value){
  if (value % 2 === 0){
    return true;
  }
  else
    return false;
}
//Best case: O(1), Worst case: O(1), Average: O(1)
//Function is checking is value is even or odd -- regardless of input size, only one value is being checked so it remains constant hence of O(1)

function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
//Worst case: O(n^2) because there's a nested for loop, each of which run n times. Best case: Not sure, maybe O(1)?
//Function: checking if an elements in arr1 = any element in arr2 -- returns true if anything matches, returns false if nothing matches

function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
//Function takes each value in the array, multiplies by two, and returns an array with the doubled values
//Best and worst case is O(n) because as the input size grows/the more values there are in the array, the more operations have to be done on the array linearly 

function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
//Worst case: O(n) Best case: O(1)
//Function loops through the array and sees if the item passed in equals the element -- if the input size grows, and the element happens to be at the very end, there's a linear runtime.

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      console.log(arr[i] + ', ' +  arr[j] );
    }
  }
}
//Best and worst case: O(n^2) -- the function has a nested for loop, and each loop runs however long the array is. So n x n.

//Avg case????

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i === 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}
//Best & Worst case: O(n). As the number value increases, so does the number of operations/arithmetic in the fib function 

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}
//Function: binary search -- this function searches the array by having a min and max and current index, and then setting the currentindex equal to the middle index of the array. It then checks if the item in question is greater than or less than the element at the current index, and changes the min/max index accordingly. Bc each iteration of this loop cuts the problem in half, this will have a runtime of O(log(n)) in worst case. In best case, if the item happens to automatically be in the middle, then the runtime is O(1). The avg case is O(log(n))

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//Best and Worst case: O(1) because it does a single operation (returning an element at a random index) regardless of how large the array is

function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}
//Best case: O(1), worst case: O(n) because as n increases, so does the number of operations happening in the for loop to check if it's prime

//Best case is not the norm, its an instance. And avg case is usually very close to the worst case (except quick sort)