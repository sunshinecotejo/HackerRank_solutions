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



function main() {
    var n = parseInt(readLine(), 10);
    var quotient = n;
    var binary = "";
    var maxConsecutive = 0;
    var consecutive = 0;
    var lastwasone = false;
    while (n > 0) {
        var remainder = (n % 2);

        if (remainder === 1) {

            consecutive++;

            if (consecutive > maxConsecutive) {
                maxConsecutive = consecutive;
            }

        } else {
            consecutive = 0;
        }

        binary = remainder + binary;
        n = Math.floor(n / 2);
    }

    console.log(maxConsecutive);
}