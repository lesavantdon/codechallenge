


//problem1
const findSum = function(array) {
 for (let i = 0; i < array.length; i++) {
  const element = array[i];
  return array[i] + array[i+1] + array[i+2];  
 }
};

//problem 2
let count = {}; 
const findFrequency = function(array) {
    array.forEach(function(item) {
      if (count.hasOwnProperty(item)) {
        count[item] += 1;
      } else {
        count[item] = 1;
      } 
    });
  console.log(count);
  for (prop in count) {
  let obj = count;
 let least = Math.min (...Object.values(obj));
 let most = Math.max(...Object.values(obj));
  
 return { most, least }
  }
};


//problem 3
  const isPalindrome = function(str) { 
    var response = [];
let leftToRight = str.toLowerCase().split(" ").join();
let rightToLeft= str.toLowerCase().split(" ").reverse().join();
 if (leftToRight == rightToLeft) {
      response.push('true'); 
 } else {
    response.push ('false');
 }
 return response;
};
//problem 4
const largestPair = function(array) {
  let products = [];
for (var i=0; i < array.length; i++) {
var currentNum= array[i];
var nextNum=array[i+1];
var product = currentNum * nextNum;
if (product) {
  products.push(product);
}
var largestProduct = Math.max(...products);
}
return largestProduct;
};

//problem 5
const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

//Problem 6
const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
