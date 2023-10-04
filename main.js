const findSum = function(array) {
 for (let i = 0; i < array.length; i++) {
  const element = array[i];
  return array[i] + array[i+1] + array[i+2];  
 }
};


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



const isPalindrome = function(str) { 
let leftToRight = str.toLowerCase().split("").join("");
let rightToLeft= str.toLowerCase().split("").reverse().join("");
 if (leftToRight == rightToLeft) {
    return true; 
 } else {
    return false;
 }
};



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


const removeParenth = function(str) {
let splitString = str.split('');
splitString.splice(3,5);
return splitString.join('');
};

Problem 6
const scoreScrabble = function(str) {
let inputWord = str.toUpperCase().split('');
  for (let i = 0; i < inputWord.length; i++) {
    var ogInputWord = inputWord[i];
  }
    
let points = {
        1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
        2: ['D', 'G'],
        3: ['B', 'C', 'M', 'P'],
        4: ['F', 'H', 'V', 'W', 'Y'],
        5: ['K'],
        8: ['J', 'X'],
        10: ['Q', 'Z'],
      };
          var scrabblePoints = points[Object.keys(points)[0]]
      for (let i = 0; i < scrabblePoints.length; i++) {
      for (prop in points) {
       if 
      }
    }
};



