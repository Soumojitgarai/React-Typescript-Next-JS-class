//10. Write another function that takes this sum and prints it in passive tense

function printSumInPassiveTense(a, b) {
    const result = sum(a, b);
    console.log(`The sum of ${a} and ${b} has been calculated as ${result}.`);
}

function sum(a, b) {
    return a + b;
}
// Example usage:
printSumInPassiveTense(5785, 108765); // Output: The sum of 5 and 10 has been calculated as 15.