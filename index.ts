// Q1 write a function chechevenodd that accept a number and prints whether it is even or odd

// function checkEvOdd(number: number): void {
//   //    number coming from above % then modules sign, agar 2 divide horha toh even number hai agar 1 divide horha toh odd number hai  
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }


// checkEvOdd(4);  // Output: 4 is even
// checkEvOdd(7);  // Output: 7 is odd
// checkEvOdd(10);  // Output: 10 is even


// Q2 write a function arrayOperations that create an array of number, add a number to the end of the array, remove the firsst number, and prints the modified array 

function arrayOperations(initialArray: number[], numberToAdd: number): void {
    // Step 1: Create an array of numbers (initialArray is passed as a parameter)
    let array: number[] = [...initialArray];
    
    // Step 2: Add a number to the end of the array
    array.push(numberToAdd);
    
    // Step 3: Remove the first number from the array
    if (array.length > 0) {
        array.shift();
    }
    
    // Step 4: Print the modified array
    console.log("Modified array:", array);
}

// Example usage
const initialArray: number[] = [1, 2, 3, 4];
const numberToAdd: number = 5;
arrayOperations(initialArray, numberToAdd);


