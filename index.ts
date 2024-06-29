// // // Q1 write a function chechevenodd that accept a number and prints whether it is even or odd

// // // function checkEvOdd(number: number): void {
// // //   //    number coming from above % then modules sign, agar 2 divide horha toh even number hai agar 1 divide horha toh odd number hai  
// // //     if (number % 2 === 0) {
// // //         console.log(`${number} is even`);
// // //     } else {
// // //         console.log(`${number} is odd`);
// // //     }
// // // }


// // // checkEvOdd(4);  // Output: 4 is even
// // // checkEvOdd(7);  // Output: 7 is odd
// // // checkEvOdd(10);  // Output: 10 is even


// // // Q2 write a function arrayOperations that create an array of number, add a number to the end of the array, remove the firsst number, and prints the modified array 

// // function arrayOperations(initialArray: number[], numberToAdd: number): void {
// //     // Step 1: Create an array of numbers (initialArray is passed as a parameter)
// //     let array: number[] = [...initialArray];
    
// //     // Step 2: Add a number to the end of the array
// //     array.push(numberToAdd);
    
// //     // Step 3: Remove the first number from the array
// //     if (array.length > 0) {
// //         array.shift();
// //     }
    
// //     // Step 4: Print the modified array
// //     console.log("Modified array:", array);
// // }

// // // Example usage
// // const initialArray: number[] = [1, 2, 3, 4];
// // const numberToAdd: number = 5;
// // arrayOperations(initialArray, numberToAdd);


// // function arrayOper(){
// //     let arr:number []= [1,2,3,4];
// //     // push agye array mai number 5 add kare   
// //     arr.push(5);
// //     // shift agye array first number remove kare
// //     arr.shift();

// //     console.log(arr);
// // }
// // // 
// // arrayOper()



// function multiplyElementsByTwo(arr: number[]): number[] {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * 2;
//     }
//     return arr;
// }

// // Example usage
// const originalArray: number[] = [1, 2, 3, 4];
// const modifiedArray: number[] = multiplyElementsByTwo(originalArray);
// console.log("Modified array:", modifiedArray);


// find the largest Number in array 
function findLargestNumber(arr: number[]): number {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Example usage
const array: number[] = [1, 5, 3, 70000, 2];
const largestNumber: number = findLargestNumber(array);
console.log("Largest number:", largestNumber);

// wirte another function for find the second largest number
function findSecondLargestNumber(arr: number[]): number {
    let largest = arr[0];
    let secondLargest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] !== largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

// Example usage
const array2: number[] = [1, 5, 3, 2500000, 2];
const secondLargestNumber: number = findSecondLargestNumber(array2);
console.log("Second largest number:", secondLargestNumber);




let numbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function multiplyTiw(){
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] *= 2;
}

    console.log(numbers);
}

