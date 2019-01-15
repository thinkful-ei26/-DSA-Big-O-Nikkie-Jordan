function countSheepLoop(num){
    for(let i=num; i>0; i--){
        console.log(`counting sheeps ${i}`);
    }
}
countSheepLoop(10);
//best case: O(n), if the first time it's run the number is 0
//worst case: O(n), bc the number of times it's run is directly proportionate to the number input

function double_all(arr) {
    var ret = Array(arr.length);
    for (var i = 0; i < arr.length; ++i) {
        ret[i] = arr[i] * 2;
    }
    return ret;
}
let arr = [10,4,5,2,1];
// console.log(double_all(arr));
//best case: O(n), if the array is empty
//worst case: O(n), bc the amount of recursion calls is dependent to array size

function reverse_tail(str) {
    var accumulator = "";
    while (str !== "") {
    	accumulator = str[0] + accumulator;
    	str = str.slice(1);
    }
    return accumulator;
}
//best case: O(n)
//worst case: O(n)

function triangle(n) {
    var tot = 0;
    for (var i = 1; i <= n; ++i) {
	    tot += n;
    }
    return tot;
}
//best case: O(n)
//worst case: O(n)

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
}
//best case: O(n)
//worst case: O(n)

let tick = 0
function convertToBinaryIter(num){
    var binary = '';
    while(num>0){
        tick++
        let rem = Math.floor(num%2);
        binary = rem + binary;
        num = Math.floor(num/2);
    }
    return binary;
}
console.log(convertToBinaryIter(1000000248)); //1111100
// convertToBinaryIter(126)
console.log('tick:', tick)
//best case: O(n)
//worst case: O(log(n))

function factorialIterative(number){
    let fact = 1;
    for (let i = 1; i <= number; i++){
        fact *= i;
    }
    return fact;
 }
 console.log(factorialIterative(5));
//best case: O(n)
//worst case: O(n)

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
//best case: O(n)
//worst case: O(n)