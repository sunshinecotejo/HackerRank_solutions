'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function isEven(n) {
    return n % 2 == 0;
}

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}

function main() {
    const N = parseInt(readLine(), 10);
    if (isOdd(N)) {
        console.log("Weird");
    } else if (isEven(N) && (N >= 2) && (N<=5)) {
        console.log("Not Weird");
    } else if (isEven(N) && (N >= 6) && (N <= 20)) {
        console.log("Weird");
    } else if (isEven(N) && (N > 20)) {
        console.log("Not Weird");
    }
}
