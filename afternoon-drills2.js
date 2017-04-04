//Iterative versions of https://gist.github.com/tparveen/edddf988ec68ef6bb74cff9d1284d09d

//Exercise 1 - Counting Sheep
function countSheepLoop(num){
    for(let i=num; i>0; i--){
        console.log(`counting sheeps ${i}`);
    }
}
countSheepLoop(10);

// O(n) the complexity is proportional to the size of the input (in this case "num")

//Exercise 2:
function double_all(arr) {
    var ret = Array(arr.length);
    for (var i = 0; i < arr.length; ++i) {
        ret[i] = arr[i] * 2;
    }
    return ret;
}
let arr = [10,4,5,2,1];
console.log(double_all(arr));

// O(n) the complexity is proportional to the size of the input (in this case "arr")

//Exercise 3:
function reverse_tail(str) {
    var accumulator = "";
    while (str !== "") {
    	accumulator = str[0] + accumulator;
    	str = str.slice(1);
    }
    return accumulator;
}

// O(n) the complexity is proportional to the size of the input (in this case "str")

//Exercise 4:
function triangle(n) {
    var tot = 0;
    for (var i = 1; i <= n; ++i) {
	    tot += n;
    }
    return tot;
}

// O(n) the complexity is proportional to the size of the input (in this case "n")

//Exercise 5:
function split(str, sep) {
    var ret = [];
    while (true) {
        var idx = str.indexOf(sep);
        if (idx == -1) break;
	ret.push(str.slice(0, idx))
	str = str.slice(idx + sep.length);
    }
    ret.push(str);
    return ret;

// O(n) the complexity is proportional to the size of the input (in this case "sep")
//this version runs one time more than rhe recursive version but it is still O(n)


//Exercise 6


function convertToBinaryIter(num){
    var binary = '';
    while(num>0){
        let rem = Math.floor(num%2);
        binary = rem + binary;
        num = Math.floor(num/2);
    }
    return binary;
}

// O(n) the complexity is proportional to the size of the input (in this case "num")

//Exercise 8 - Factorial

function factorialIterative(number)
{
   let fact = 1;
   for (let i = 1; i <= number; i++){
       fact *= i;
   }
   return fact;
}
console.log(factorialIterative(5));

// O(n) the complexity is proportional to the size of the input (in this case "n")


//Exercise 9 - Fibonacci

function fibonacciIterative(number){
    let num1 = 1;
    let num2 = 0;
    let fib = null;
    while(number > 0){
        fib = num1;
        num1 = num1+num2;
        num2 = fib;
        number--;
    }
    return num2;

}

//******** ES6 makes it a bit easier*****
function fibonacciIterative2(number){
    let [num1, num2] = [1,0];
    while(number-- > 0){
        [num1, num2] = [num2+num1, num1]
    }
    return num2;

}
console.log(fibonacciIterative2(3));
