var payRate = 17.30;
var hoursWorked = 45;

let grossPay = 0

if (hoursWorked < 40) 
//    let overtimeTimeHours = hoursWorked
{grossPay = payRate*hoursWorked}
else {
    grossPay = payRate * 40 + (hoursWorked - 40) * payRate * 1.5
}
console.log(grossPay)


