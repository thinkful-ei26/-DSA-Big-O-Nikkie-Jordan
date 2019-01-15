function countSheep(num){
    //stopping condition of base case
    if(num === 0){
        console.log(`All sheep jumped over the fence`);
    } 
    //this is the recursive case
    //this will be executed until it reaches base case
    else{
        console.log(`${num}: Another sheep jump over the fence`);
        countSheep(num-1);
    }
}
//best case: O(1), if the first time it's run the number is 0
//worst case: O(n), bc the number of times it's run is directly proportionate to the number input

function double_all(arr) {
    if (!arr.length) {
        return [];
    }
    return [arr[0] * 2, ...double_all(arr.slice(1))];
}
//best case: O(1), if the array is empty
//worst case: O(n), bc the amount of recursion calls is dependent to array size

function reverseString(str) {
    if (str.length < 2) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}
//best case: 0(1), if the string is one letter (less than 2)
//worst case: O(n), bc the amount of recursion calls is dependent to string size

function triangle(n) {
    if (n < 2) 
        return n;
    return n + triangle(n - 1);
}
//best case: O(1), if n is less than 2
//worst case: O(n), bc the amount of recursion calls is dependent on value of n

function split(str, sep) {
    var idx = str.indexOf(sep);
    if (idx == -1) 
        return [str];
		//you don't have to return an array, you can return a string as an array of 
		//character 
		//return str;
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
	//all these are valid syntax
	//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
	//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}
//best case: O(1), if idx is === -1 
//worst case: O(n), bc the amount of recursion calls is dependent on the arguments

function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num%2); //save the reminder in binary
		//divide the number by 2 and send that to the function again
		//carry the remainder to the next recursion call
        return (convertToBinary(Math.floor(num/2))+ binary);
    }else{
        return ''; //base case - at some point the divisions will lead to 0
    }
}
//best case: O(1), if num is greater than 0
//worst case: O(log(n)), each recursive call splits num in half 

function factorial(n) {  
    // Base Case - when n is equal to 0, we stop the recursion
    if (n === 0) {
      return 1;
    }
    // This is our Recursive Case
    // It will run for all other conditions except when n is equal to 0
    return n * factorial(n - 1);
}
//best case: O(1), if num === 0
//worst case: O(n), bc the amount of recursion calls is dependent on n

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
//best case: O(1), if num <= 0
//worst case: O(2^n), each recursive fib call returns *2 calls

let tick = 0;

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

function printAnagram(word){
    //console.log(`The word for which we will find an anagram is ${word}`);
    anagrams(' ', word);

}

printAnagram('helloo');
//best case: O(1), if str.length <= 1
//worst case: O(n!), each time the loop runs the function is recursively calling itself (factorial)

//in a recursive call: value and the recursive call 


const animalHierarchy = [
    {id: 'Animals', parent: null},
    {id: 'Mammals', parent: 'Animals'},
    {id: 'Dogs', parent:'Mammals' },
    {id: 'Cats', parent:'Mammals' },
    {id: 'Golden Retriever', parent: 'Dogs'},
    {id: 'Husky', parent:'Dogs' },
    {id: 'Bengal', parent:'Cats' }
]

// ==============================

function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;  
}

traverse(animalHierarchy, null)
//best case: O(n)
//worst case: O(n), filter captures one instance making this of linear time complexity 

let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

function traverseA(data, depth = 0) {
    tick++
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}
//best case: O(n)
//worst case: O(n), the time complexity is dependent on data 


function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}
traverseB(organization)
console.log('tick:', tick);
//best case: O(n)
//worst case: O(n), the time complexity is dependent on node 

