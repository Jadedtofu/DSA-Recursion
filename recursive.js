// 1. Counting Sheep:
// const countSheep = (num) => {
//     // Base case
//     if (num === 0 ) {
//         console.log(`${num}: All sheep jumped over the fence`);
//         return;  // need this return here to end the code;
//     }

//     // General case
//         console.log(`${num}: Another sheep jumped over the fence`);
//         countSheep(num - 1);
//     }
// countSheep(5);
// /****************************************************************/

// // 2. Power Calculator:
// const powerCalculator = (num, pow) => {
//     if(pow <= 0) {
//         return `Exponent should be >= 0`;
//     }

//     if(pow === 1) {  // without this, I will get NaN in output
//         return num;
//     }
//     return num * powerCalculator(num, (pow -1)); 
// }
// console.log('Recursive Calculator ' + powerCalculator(5, 4));

// // 3. Reverse String
// const reverseString = (string) => {
//     if(string.length === 1) {
//         return string;
//     }

//     return string.slice(-1) + reverseString(string.substring(0, string.length-1));
// }
// console.log(`Reversing 'The quick brown fox': ` + reverseString('The quick brown fox'));
// /****************************************************************/

// //4. nth Triangular Number  *note, sequence goes up by +1*
// const nthTriangle = (num) => {
//     if(num === 1) {
//         return num;
//     }

//     return num + nthTriangle(num - 1);  // sum of the sequence# for triangle
// }
// console.log(`Recursive nth Triangular number: ` + nthTriangle(4));
// /****************************************************************/

// // 5. String Splitter
// const stringSplitter = (string, delimiter) => {

//     if (string.length === 1) {
//         if (string === delimiter) {
//             return ""
//         } else {
//             return string;
//         }
//     }

//     let part1 = string.slice(0, 1); // 1st character from string
//     let part2 = string.slice(1); // rest of characters

//     if(part1 === delimiter) {
//         part1 = ""; 
//     }

//     return part1 + stringSplitter(part2, delimiter);

// } 
// console.log(`Split string '20.20.2020': ` + stringSplitter('20.20.20', '.'));
// /****************************************************************/

// // 6. Fibonacci, sequence is 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// series of numbers in which each number is a sum of the 2 preceeding numbers
// const fibonacci = (num) => {
//     if (num <= 1) {
//         return 1;
//     }

//     return fibonacci(num - 1) + fibonacci(num - 2); 
// }

// console.log(`Fibonacci sequence of 7: ` + fibonacci(11));
// /****************************************************************/

// 7. Factorial
// const factorial = (num) => {
//     if (num === 1) {
//         return 1
//     }
//     return num * factorial(num - 1)
// }
// console.log(`Factorial of 5 is :` + factorial(5));
// 5 * 4 * 3 * 2 * 1 = 120;
// /****************************************************************/

// // 8. Find a way out of the maze
const mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// what ? 