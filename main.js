const findSum = function(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result = result + array[i];
    }
    return result;
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
for (var i=0; i < array.length-1; i++) {
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
    let result = '';
    let parenthesisStarted = false;
    for (let i = 0; i < str.length;i++) {
        if(str[i] === "(") {
            parenthesisStarted = true;
        } else if (str[i] === ")") {
            parenthesisStarted = false;
        } else if (parenthesisStarted === false) {
            result += str[i];
        }
    }
    return result;
  };


const scoreScrabble = function(str) {
    let points = {
        1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
        2: ['D', 'G'],
        3: ['B', 'C', 'M', 'P'],
        4: ['F', 'H', 'V', 'W', 'Y'],
        5: ['K'],
        8: ['J', 'X'],
        10: ['Q', 'Z'],
      };

    let inputWord = str.toUpperCase().split('');
    let score = 0;
      for (let i = 0; i < inputWord.length; i++) {
        for (let key of Object.keys(points)) {
            const values = points[key];
            for (let j = 0; j < values.length;j++) {
                if(values[j] === inputWord[i]) {
                    score += Number(key);
                    break;
                }
            }
        }
      }
      return score;
    };


