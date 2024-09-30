//4. Write a program prints all the even numbers in an array

function EvenNumbers(arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    console.log("Even numbers in the array:", evenNumbers);
}

// Example usage:
EvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


