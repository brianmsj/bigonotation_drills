function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

// This only does one operation, checks to see if a input is divisible by 2.
// The notation is O(1). No matter the size of the input the operation is the same.


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

//the complexity increases with the size of the array.
// The notation is 0(n^2).

function doubleArrayValues(array) {
   for (let i=0; i<array.length; i++) {
       array[i] *= 2;
   }
   return array;
   console.log(array);
}

arrayone = [1,3,4,5,6,7,9]
//the complexity increases linearly with the amount of inputs in the array.
//The notation is O(n) to describe this.


function naiveSearch(array, item) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//this is the same as doubleArrayValues because we are calculating the worst case scenario. In both
//we are assuming that we have to loop through the entire array and call an operation.

//The notation is O(n) to describe complexity


function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
//we are doing two operations then concatenating arrays. We need to go through each array index
// The notation is O(n^2)

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
    else if (i == 2) {
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

console.log(generateFib(10));

// This is linear based upon the number we put in because the loop has to access each index
// of the array.
// The big O notation is O(n)

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2); //==> sets index to middle
        currentElement = array[currentIndex]; // ==> what the number is once we set to the middle

        if (currentElement < item) {
            minIndex = currentIndex + 1; // == search bottom half pending on element
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1; // == search top half pending on element
        }
        else {
            return currentIndex;  // === if we are immediately at the right position
        }
    }
    return -1; //== negative one means the element is not in the array
}
// this is O(log(n)) because we give parameters on where to do the search
// READ THIS TONIGHT!!! YOU TOO LAURA

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// this is O(1) because its just choosing a random number in the array, datasize does not matter

function isPrime(n) {
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    // otherwise, check if `n` is divisible by any integer
    // between 2 and n.
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}
//Complexity O(n) because it has a runtime that is proportional to size of N.
//because we calculate worst case scenario we have to take into account the 2nd if statement
//where we need to iterate... ask why this could be two.
