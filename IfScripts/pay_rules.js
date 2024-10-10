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

// example from class//

// var number = 4;
// var condition = number > 5;

// if (condition) {
//   console.log("The number is greater than 5");
//   console.log("hi");
//   console.log("there");

// } else {
//   console.log("always happens");
// }
