//5. Write a program to print the biggest number in an array

function findLargestNumber(arr) {
    const largest = Math.max(...arr);
    console.log("The largest number in the array is:", largest);
}

// Example usage:
findLargestNumber([10, 20, 30, 40, 50]);
