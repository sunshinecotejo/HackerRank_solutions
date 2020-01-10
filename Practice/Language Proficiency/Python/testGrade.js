
var grades = [73, 67, 38, 33];
var finalGrades = [];
var num = 0;

for(var i=0; i<grades.length; i++){
    nextMultipleOfFive = grades[i] + (5 - grades[i] % 5);
    
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

console.log(finalGrades);