/* 
   Filename: ComplexCode.js 
   Description: A sophisticated, elaborate and complex JavaScript code showcasing various advanced concepts.
*/

// Util function to find factorial
const factorial = (num) => {
  if (num <= 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Example instances of the Person class
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);
person1.sayHello();
person2.sayHello();

// Custom implementation of the Array.prototype.map method
Array.prototype.customMap = function(callback) {
  const resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this));
  }
  return resultArray;
};

// Example usage of customMap
const numbers = [1, 2, 3];
const squaredNumbers = numbers.customMap((num) => num * num);
console.log(squaredNumbers);

// Higher-order function that returns a closure
const generateMultiplier = (factor) => {
  return (num) => num * factor;
};

// Example usage of generateMultiplier
const double = generateMultiplier(2);
console.log(double(5)); // Output: 10

// Async function using Promises
const wait = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

const asyncFunction = async () => {
  console.log("Start");
  await wait(2000); // Wait for 2000ms
  console.log("End");
};

asyncFunction();

// Example of destructuring assignment
const person = { name: "Alice", age: 28, city: "New York" };
const { name, age, city } = person;
console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

// Recursive function to find the Fibonacci series
const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(fibonacci(10)); // Output: 55

// Complex regular expression matching
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("example@example.com")); // Output: true

// Custom generator function
function* fibonacciGenerator() {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const fib = fibonacciGenerator();
console.log(fib.next().value); // Output: 0
console.log(fib.next().value); // Output: 1
console.log(fib.next().value); // Output: 1
console.log(fib.next().value); // Output: 2

// Complex logic with arrays using reduce and filter
const numbersArray = [1, 2, 3, 4, 5];
const sumOfEvenNumbers = numbersArray
  .filter((num) => num % 2 === 0)
  .reduce((sum, num) => sum + num, 0);

console.log(sumOfEvenNumbers); // Output: 6

// Sophisticated error handling with try-catch-finally
const performOperation = () => {
  try {
    console.log("Performing operation...");
    throw new Error("Something went wrong");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    console.log("Operation complete");
  }
};

performOperation();