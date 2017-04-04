/*=================================================================================
Exercise 1 - Counting Sheep
*/
function countSheep(num){
    //stopping condition of base case
    if(num === 0){
        console.log(`All sheep jumped over the fence`);
    }
    //this is the recursive case
    //this will be executed until it reaches base case
    else{
        console.log(`${num}: Another sheep jumps over the fence`);
        countSheep(num-1);
    }
}
countSheep(10);

// O(n) the complexity is proportional to the size of the input (in this case "num")

/*=================================================================================
Exercise 2 - Array double
*/
function double_all(arr) {
    if (!arr.length) {
        return [];
    }
    return [arr[0] * 2, ...double_all(arr.slice(1))];
}
var arr = [10,5,3,4];
console.log(double_all(arr));

// O(n) the complexity is proportional to the size of the input (in this case "arr")

/*=================================================================================
Exercise 3 - Reverse String
*/
function reverse(str) {
    if (str.length < 2) {
        return str;
    }
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse("tauhida"));

// O(n) the complexity is proportional to the size of the input (in this case "str")

/*=================================================================================
Exercise 4 - Triangular Number
*/
//Should always return n*(n+1)/2
function triangle(n) {
    if (n < 2)
        return n;
    return n + triangle(n - 1);
}

// O(n) the complexity is proportional to the size of the input (in this case "n")

/*=================================================================================
Exercise 5 - String Splitter
*/

function split(str, sep) {
    var idx = str.indexOf(sep);
    if (idx == -1)
        return [str];
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
}
console.log(split('1/12/2017', '/'));

// O(n) the complexity is proportional to the size of the input (in this case "sep")


/*=================================================================================
Exercise 6 - Binary Representation
*/

function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num%2);
        return (convertToBinary(Math.floor(num/2))+ binary);
    }else{
        return '';
    }


}
console.log(convertToBinary(25));

// O(n) the complexity is proportional to the size of the input (in this case "num")

/*=================================================================================
Exercise 7 - Anagrams
*/

function printAnagram(word){
    console.log(`The word for which we will find an anagram is ${word}`);
    anagrams(' ', word);

}
function anagrams(prefix, str){
    if(str.length <= 1){
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1);
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }

}
printAnagram("east");

//O(2^n) the complexity exponetially changes as we increase the number of letters in the word.

/*=================================================================================
Exercise 8 - Factorial
*/
function factorial(n) {
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

console.log(factorial(5)); //120

// O(n) the complexity is proportional to the size of the input (in this case "n")


/*=================================================================================
Exercise 9 - Fibonacci
*/

function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));

// O(2^n) the complexity exponetially increases with the increase if n
