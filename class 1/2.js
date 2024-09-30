//2. Write a program that greets a person based on their gender. (If else)

function greetBasedOnGender(name, gender) {
    if (gender.toLowerCase() === "male") {
        console.log(`Hello, Mr. ${name}!`);
    } else if (gender.toLowerCase() === "female") {
        console.log(`Hello, Ms. ${name}!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}

// Example usage:
greetBasedOnGender("Alex", "male");
greetBasedOnGender("Taylor", "female");
greetBasedOnGender("Jordan", "non-binary");
