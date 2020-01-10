'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    var finalGrades = [];
    var num = 0;

    for(var i=0; i<grades.length; i++){
        var nextMultipleOfFive = grades[i] + (5 - grades[i] % 5);
    
        if(grades[i]>=38){
            num = nextMultipleOfFive - grades[i];
            if(num < 3){
                finalGrades.push(nextMultipleOfFive);
        
            }else{
                finalGrades.push(grades[i]);
            }
        }else{
            finalGrades.push(grades[i]);
        }
        
    }
    return finalGrades;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
