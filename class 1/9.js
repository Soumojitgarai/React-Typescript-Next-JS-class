//9. Write another function that displays this result in a pretty format

function prettyPrintSum(a, b) {
    const result = sum(a, b);
    console.log(`The sum of ${a} and ${b} is ${result}.`);
}

function sum(a, b) {
    return a + b;
}
    // Example usage:
prettyPrintSum(5.34543, 10.8976); // Output: The sum of 5 and 10 is 15.
