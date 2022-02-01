/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

// 1. handle when number is negative, or zero
// 2. if n is negative, return -1
//    if n is 0, return 1
// 3. if n is greater than 0
// 4. call factorial with input n-1
// 5. multiply the result of the factorial call with n

var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21

// 1. a primitive value
// 2. create a sum variable outside recursive function to sum integers
// 3. using a for each will ensure every integer in array is accessed
// 4. recursive function will 5. add input value to outside sum value

var sum = function(array) {
  var result = 0;
  if (!Array.isArray(array)) {
    return array;
  }
  array.forEach(function(integer) {
    result = result + sum(integer);
  });
  return result;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var result = 0;
  if (!Array.isArray(array)) {
    return array;
  }
  array.forEach(function(integer) {
    result = result + arraySum(integer);
  });
  return result;
};

// 4. Check if a number is even.

// 1. if value is a 2 or 1 (need to take absolute value of input to handle negative case)
// 2. return true if  input is 2, return false if input is 1
// 3. if not 2 or 1 then subtract n by 2
// 4. isEven result of subtract by 2
// 5. return boolean
var isEven = function(n) {
  var isTrue;
  n = Math.abs(n);
  if (n === 2) {
    isTrue = true;
  } else if (n === 1) {
    isTrue = false;
  } else {
    return isEven(n - 2);
  }
  return isTrue;
};

// 5. Sum all integers below a given integer.
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  }
  var sign = n > 0 ? 1 : -1;
  var n = n - 1 * sign;
  if (n <= 1 && n >= -1) {
    return n;
  }
  n += sumBelow(n);
  return n;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

// 1. each value inbetween the range, stop when the number is less than number of last number
// 2. if x + 1 === y, return x
// 3. x + 1 to go to next number
// 4. call range with (x + 1, y)
// 5. push x to result array

var range = function(x, y) {
  if (Math.abs(y - x) <= 1) {
    return [];
  }
  if (x < y) {
    result = [x + 1];
    if (x + 2 === y) {
      return [x + 1];
    }
    result = result.concat(range(x + 1, y));
  } else {
    result = [x - 1];
    if (x - 2 === y) {
      return [x - 1];
    }
    result = result.concat(range(x - 1, y));
  }

  return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

// 1. when exp is 0
// 2. if exp === 0, return 1
// 3. if base is positive, subtract exp by 1
// 4. call exponent with same base and exp subtracted by 1
// 5. multiply base with itself

var exponent = function(base, exp) {
  result = base;
  if (exp === 0) {
    return 1;
  }
  if (exp > 0) {
    result *= exponent(base, exp - 1);
    return result;
  } else {
    result = 1;
    result *= exponent(1 / base, -exp)
    return result;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

// 1. base case when n becomes 1 or a fraction
// 2. if n = 1 return true, if n < 1, return false
// 3. if n is greater than 1, divide by 2
// 4. call powerOfTwo on n / 2 and assign to result

var powerOfTwo = function(n) {
  if (n > 1) {
    n = powerOfTwo(n / 2);
  }
  if (n === 1) {
    return true;
  }
  if (n < 1) {
    return false;
  }
  return n;
};

// 9. Write a function that reverses a string.

// 1. base case when there is only 1 character left
// 2. if string.length === 1, return string
// 3. take last character of string and add concat to empty string
// 4. call reverse on string with last character removed
// 5. concat the result of calling reverse
var reverse = function(string) {
  var reversedString = '';
  if (string.length === 1) {
    return string;
  }
  reversedString += string[string.length - 1];
  reversedString += reverse(string.slice(0,-1));
  return reversedString;
};

// 10. Write a function that determines if a string is a palindrome.

// 1. base case when there is only 1 character or no characters left (it is a palindrome)
// 2. if string.length === 1, or (string.length === 2 and string[0] === string[1]), then true
// 3. if first character and last character are equal, then substract those characters, otherwise return false
// 4. call palindrome on subtracted first and last character
// 5. return string (will become a boolean)
var palindrome = function(string) {
  string = string.toLowerCase();
  if (string.length === 1 || (string.length === 2 && string[0] === string[1])) {
    return true;
  }
  if (string[0] === string[string.length -1]) {
    string = palindrome(string.slice(1,string.length -1))
  } else {
    return false;
  }
  return string;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

// 1. if property value equals value, increase count by 1
// 2. for keys in obj, if obj[key] = value, increase count by 1
// 3. run a for keys in obj to loop each property
// 4. if key is another object, make recursive call on each value property in for keys loop
// 5. return counter

var countValuesInObj = function(obj, value) {
  var count = 0;
  for (keys in obj) {
    if (obj[keys] === value) {
      count++;
    }
    if (typeof obj[keys] === 'object') {
      count += countValuesInObj(obj[keys], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.

// 1. when property key found to be oldKey, rename key to newKey
// 2. for keys in obj, if keys === oldKey, then keys = newKey
// 3 & 4. if key is a object, make recursive call on the value
// any objects that need to be replaced will be replaced, return obj
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (keys in obj) {
    if (keys === oldKey) {
      obj[newKey] = obj[keys];
      delete obj[keys];
    }
    if (typeof obj[keys] === 'object') {
      keys = replaceKeysInObj(obj[keys], oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
