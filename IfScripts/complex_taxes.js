var payRate = 17.3;
var hoursWorked = 45;

let grossPay = 0;

if (hoursWorked < 40) {
    let overtimeTimeHours = hoursWorked;
    grossPay = payRate * hoursWorked;
  } else {
    grossPay = payRate * 40 + (hoursWorked - 40) * payRate * 1.5;
  }
  console.log(grossPay);

let annualGrossPay = grossPay * 52;

let taxRate=0
if (filingStatus == "Single"){
if (annualGrossPay < 12000){
    taxRate = .5
}else if ( annualGrossPay < 24999.99){
    taxRate = .10
}else if (annualGrossPay < 74999.99){
    taxRate = .15
}else if (annualGrossPay >= 75000){
    taxRate = .20
}
    }
else if (filingStatus == "joint") {
if (annualGrossPay < 12000){
    taxRate = 0
}else if ( annualGrossPay < 24999.99){
    taxRate = .06
}else if (annualGrossPay < 74999.99){
    taxRate = .11
}else if (annualGrossPay >= 75000){
    taxRate = .20
}
}

let weeklyTaxWithholding = weeklyGrossPay * taxRate;
let weeklyNetPay = weeklyGrossPay - weeklyTaxWithholding;

console.log("You worked" ${hoursWorked} "hours this period.");
console.log ("Because you earn" ${payRate.toFixed(2)} "per hour , your gross pay is " {grossPay.tofixed(2)})
console.log("Your filing status is" {filingStatus})
console.log("Your tax withholdings this period is" ${weeklyTaxWithholding.tofixed(2)})
console.log("Your net pay is "${weeklyNetPay.tofixed(2)})