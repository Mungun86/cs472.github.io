/* 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. */
function max(x, y) {
    if (x > y) {
      return x;
    } else {
      return y;
    }
  }
  
  document.getElementById("result1").innerText = max(3, 6);
  
  /* 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. */
  function maxOfThree(x, y, z) {
    if (x > y && x > z) {
      return x;
    } else if (y > x && y > z) {
      return y;
    } else {
      return z;
    }
  }
  
  document.getElementById("result2").innerText = maxOfThree(3, 6, 9);
  
  /* 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */
  function isVowel(c) {
    var vowels = "aeiou";
  
    if (vowels.includes(c)) {
      return true;
    }
  
    return false;
  }
  
  document.getElementById("result3").innerText = isVowel("u");
  
  /* 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop). */
  function sum(arr) {
    let total = 0;
  
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
  
    return total;
  }
  
  function multiply(arr) {
    let total = 1;
  
    for (let i = 0; i < arr.length; i++) {
      total *= arr[i];
    }
  
    return total;
  }
  
  document.getElementById("result4").innerText =
    sum([1, 2, 3, 4]) + ", " + multiply([1, 2, 3, 4]);
  
  /* 5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj". */
  function reverse(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
      rev += str[i];
    }
    return rev;
  }
  
  document.getElementById("result5").innerText = reverse("jag testar");
  
  /* 6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one. */
  function findLongestWord(arr) {
    let longest = 0;
    let n = arr.length - 1;
    while (n >= 0) {
      if (longest < arr[n].length) longest = arr[n].length;
      n--;
    }
  
    return longest;
  }
  
  document.getElementById("result6").innerText = findLongestWord([
    "javascript",
    "html",
    "css",
    "ecmascript",
    "web application",
  ]);
  
  /* 7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters. */
  function filterLongWords(arr, i) {
    return arr.filter((word) => word.length > i);
  }
  
  document.getElementById("result7").innerText = filterLongWords(
    ["javascript", "html", "css", "ecmascript", "web application"],
    6
  );
  
  /* 8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be computed as 1^2 + 2^2 + 3^2 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. */
  function computeSumOfSquares(arr) {
    return arr.map((val) => val * val).reduce((val1, val2) => val1 + val2);
  }
  
  document.getElementById("result8").innerText = computeSumOfSquares([1, 2, 3]);
  
  /* 9. Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and prints only the numbers which are odd. */
  function printOddNumbersOnly(arr) {
    return arr.filter((number) => number % 2 !== 0);
  }
  
  document.getElementById("result9").innerText = printOddNumbersOnly([4, 5, 6]);
  
  /* 10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers and calculates and returns the sum of the squares of only the even numbers in the input array. E.g computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 2^2 + 4^2 = 20. */
  function computeSumOfSquaresOfEvensOnly(arr) {
    return arr
      .map((val) => val * val)
      .filter((number) => number % 2 === 0)
      .reduce((val1, val2) => val1 + val2);
  }
  
  document.getElementById("result10").innerText = computeSumOfSquaresOfEvensOnly([
    1, 2, 3, 4, 5,
  ]);
  
  /* 11. Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4 above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. */
  function sum1(arr) {
    return arr.reduce((val1, val2) => val1 + val2);
  }
  
  function multiply1(arr) {
    return arr.reduce((val1, val2) => val1 * val2);
  }
  
  document.getElementById("result11").innerText =
    sum1([1, 2, 3, 4]) + ", " + multiply1([1, 2, 3, 4]);
  
  /* 12. Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!) */
  function findSecondBiggest(arr) {
    var second = -Infinity,
      max = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        second = max;
        max = arr[i];
      } else {
        if (arr[i] > second) second = arr[i];
      }
    }
  
    return second;
  }
  
  document.getElementById("result12").innerText =
    findSecondBiggest([1, 2, 3, 4, 5]) +
    ", " +
    findSecondBiggest([19, 9, 11, 0, 12]);
  
 