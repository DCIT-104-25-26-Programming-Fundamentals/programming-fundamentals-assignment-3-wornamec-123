// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `)
            .split(" ")
            .map(Number);
        matrix.push(row);
    }

    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join("\t"));
    }
}

function transposeMatrix(matrix) {
    let result = [];

    for (let j = 0; j < matrix[0].length; j++) {
        result[j] = [];
        for (let i = 0; i < matrix.length; i++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
}

function addMatrices(matrix1, matrix2) {
    let result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[0].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < matrixB.length; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

console.log("PART A - Transpose Matrix");

let rows = Number(readlineSync.question("Enter number of rows: "));
let cols = Number(readlineSync.question("Enter number of columns: "));

let matrix = readMatrix(rows, cols);

console.log("Original Matrix:");
displayMatrix(matrix);

console.log("Transposed Matrix:");
displayMatrix(transposeMatrix(matrix));

console.log("\nPART B - Add Two Matrices");

rows = Number(readlineSync.question("Enter number of rows: "));
cols = Number(readlineSync.question("Enter number of columns: "));

console.log("Enter Matrix 1");
let matrix1 = readMatrix(rows, cols);

console.log("Enter Matrix 2");
let matrix2 = readMatrix(rows, cols);

console.log("Sum of Matrices:");
displayMatrix(addMatrices(matrix1, matrix2));

console.log("\nPART C - Multiply Two Matrices");

let rowsA = Number(readlineSync.question("Enter number of rows for Matrix A: "));
let colsA = Number(readlineSync.question("Enter number of columns for Matrix A: "));

console.log("Enter Matrix A");
let matrixA = readMatrix(rowsA, colsA);

let rowsB = Number(readlineSync.question("Enter number of rows for Matrix B: "));
let colsB = Number(readlineSync.question("Enter number of columns for Matrix B: "));

while (colsA !== rowsB) {
    console.log("Number of columns in Matrix A must equal number of rows in Matrix B.");
    rowsB = Number(readlineSync.question("Enter number of rows for Matrix B: "));
    colsB = Number(readlineSync.question("Enter number of columns for Matrix B: "));
}

console.log("Enter Matrix B");
let matrixB = readMatrix(rowsB, colsB);

console.log("Product of Matrices:");
displayMatrix(multiplyMatrices(matrixA, matrixB));
