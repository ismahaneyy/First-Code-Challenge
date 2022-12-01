function netIncome(){
const prompt = require('prompt-sync')();
//input prompt basic salary and benefit one gets 
let basicSalary = prompt("Input basic salary earned");
let benefits = prompt("Input benefits given");

//to calculate the gross salary by adding basic salary and benefits
let grossSalary =parseInt(basicSalary)+ parseInt(benefits);
console.log("grossSalary:" + grossSalary);  

//to calculate the NSSF Deductions whereby NSSF Deduction is 6% of the pension.
let pension = 6000;
let nssfDeductions = pension * 0.06;
console.log("NSSF:" + nssfDeductions);

//To calculate the gross tax which is the tax charged per each slab acoording to gross salary one earns
if (grossSalary >0 && grossSalary <= 24000) {
    grossTax = 24000 * 0.1;
} else if(grossSalary > 24000 && grossSalary <= 32333) {
    grossTax = (32333 - 24000)*0.25;
} else if (grossSalary >32333){
    grossTax = (grossSalary - 32333)* 0.3;
}
 console.log("grossTax:" + grossTax)
    
//to calculate  the PAYE which is gross tax less personal relief whereby the personal relief is 2400.
if(relief = 2400) {
    PAYE = grossTax - relief
}
console.log ("PAYE:" + PAYE);


//To calculate NHIF Deductions
if(grossSalary>0 && grossSalary<= 5999){
    NHIFDeductions = 150;
}else if(grossSalary >59999 && grossSalary<=7999){
    NHIFDeductions = 300;
}else if(grossSalary >7999 && grossSalary<=11999){
    NHIFDeductions = 400;
}else if(grossSalary >11999 && grossSalary<=14999){
    NHIFDeductions = 500;
}else if(grossSalary >14999 && grossSalary<=19999){
    NHIFDeductions = 600;
}else if(grossSalary >19999 && grossSalary<=24999){
    NHIFDeductions = 750;
}else if(grossSalary >24999 && grossSalary<=29999){
    NHIFDeductions = 850;
}else if(grossSalary >29999 && grossSalary<=34999){
    NHIFDeductions = 900;
}else if(grossSalary >34999 && grossSalary<=39999){
    NHIFDeductions = 950;
}else if(grossSalary >39999 && grossSalary<=44999){
    NHIFDeductions = 1000;
}else if(grossSalary >44999 && grossSalary<=49999){
    NHIFDeductions = 1100;
} else if(grossSalary >49999 && grossSalary<=59999){
    NHIFDeductions = 1200;
}else if(grossSalary >59999 && grossSalary<=69999){
    NHIFDeductions = 1300;
}else if(grossSalary >69999 && grossSalary<=79999){
    NHIFDeductions = 1400;
}else if(grossSalary >79999 && grossSalary<=89999){
    NHIFDeductions = 1500;
}else if(grossSalary >89999 && grossSalary<=99999){
    NHIFDeductions = 1600;
}else if(grossSalary >99999){
    NHIFDeductions = 1700;
}
console.log("NHIF:" + NHIFDeductions);



//to calculate the net salary which is gross salary less all deductions
let netSalary = grossSalary - (PAYE + NHIFDeductions + nssfDeductions);
console.log("NetSalary:" + netSalary);
}
netIncome();