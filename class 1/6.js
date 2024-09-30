//6. Write a program that prints all the male people’s first name given a complex object

const people = [
    { firstName: "John", lastName: "Doe", gender: "male" },
    { firstName: "Jane", lastName: "Doe", gender: "female" },
    { firstName: "Mike", lastName: "Smith", gender: "male" },
    { firstName: "Emily", lastName: "Jones", gender: "female" }
];

function printMaleFirstNames(people) {
    people.forEach(person => {
        if (person.gender.toLowerCase() === "male") {
            console.log(person.firstName);
        }
    });
}

// Example usage:
printMaleFirstNames(people);
