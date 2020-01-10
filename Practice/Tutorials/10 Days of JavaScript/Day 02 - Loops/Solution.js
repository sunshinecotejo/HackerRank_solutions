'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowelStr = 'aeiouAEIOU';
    var vowels  = [];
    var consonants = [];
    var finalStr = []

    var len = s.length;
    for(var i=0; i<len; i++){
        if (vowelStr.indexOf(s[i]) != -1){
            vowels.push(s[i]);
        }else{
            consonants.push(s[i]);
        }
    }
    finalStr = vowels.concat(consonants);
    //console.log(finalStr);
    for(var j=0; j<finalStr.length; j++){
        console.log(finalStr[j]);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}