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
    // let arr = Array(6);

    // for (let i = 0; i < 6; i++) {
    //     arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    // }

    var arr = [];
    var maxTotal;

    for (let arr_i = 0; arr_i < 6; arr_i++) {
        arr[arr_i] = readLine().split(' ');
        arr[arr_i] = arr[arr_i].map(Number);
    }

    for (let i = 0; i < (arr.length - 2); i++) {
        for (let y = 0; y < (arr.length - 2); y++) {

            var total = parseInt(arr[i][y]) + parseInt(arr[i][y + 1]) + parseInt(arr[i][y + 2]) + parseInt(arr[i + 1][y + 1]) + parseInt(arr[i + 2][y]) + parseInt(arr[i + 2][y + 1]) + parseInt(arr[i + 2][y + 2]);

            if (!maxTotal && maxTotal != 0) {
                maxTotal = total;
            }

            if (total > maxTotal) {
                maxTotal = total;
            }
        }
    }

    console.log(maxTotal);
}