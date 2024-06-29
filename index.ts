// Q1 write a function chechevenodd that accept a number and prints whether it is even or odd

function checkEvOdd(number: number): void {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}


checkEvOdd(4);  // Output: 4 is even
checkEvOdd(7);  // Output: 7 is odd
checkEvOdd(10);  // Output: 10 is even


