const prompt = require('prompt-sync')();
//enter prompts to input student marks
let marks = prompt("Input Student Marks");
//using if else statement to grade students according to ones marks. 
if (marks > 79 && marks <= 100) {
    console.log("Grade:A");
  } else if (marks >= 60 && marks <= 79) {
    console.log("Grade:B");
   } else if (marks >=59  && marks <=69){
    console.log("Grade:C");
  } else if (marks >= 40 && marks <= 49) {
    console.log("Grade:D");
  } else if (marks>=0 && marks <40) {
    console.log("Grade:E");
  }else {
    console.log("enter valid marks");
  }

