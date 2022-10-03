// First Task In JS First Assignment
/*
var userNumber = window.prompt("Enter The Number");
document.getElementById("first").innerHTML = userNumber;
*/

// Second Task In JS First Assignment
/*
var userNumber = window.prompt("Enter The Number");
if(userNumber % 3 == 0 &&userNumber % 4 == 0 ) {
  document.getElementById("second").innerHTML = "Yes";
}
else {
  document.getElementById("second").innerHTML = "No";
}
*/

// 3th Task In JS First Assignment
/*
var firstNumber = Number(window.prompt("Enter The First Number"));
var secondNumber = Number(window.prompt("Enter The Second Number"));
if(firstNumber > secondNumber) {
  document.getElementById("3th").innerHTML = firstNumber;
}
else {
  document.getElementById("3th").innerHTML = secondNumber;
}
*/

// 4th Task In JS First Assignment
/*
var userNumber = Number(window.prompt("Enter Number"));
if(userNumber > 0 ) {
  document.getElementById("4th").innerHTML = "positive";
}
else {
  document.getElementById("4th").innerHTML = "negative";
}
*/

// 5th Task In JS First Assignment
/*
var firstNumber = Number(window.prompt("Enter The First Number"));
var secondNumber = Number(window.prompt("Enter The Second Number"));
var thirdNumber = Number(window.prompt("Enter The Third Number"));

if(firstNumber > secondNumber &&
  firstNumber > thirdNumber &&
  secondNumber > thirdNumber) 
  {
  document.getElementById("5th").innerHTML=
  "Max = " + firstNumber + " | " + "Min = " + thirdNumber
}
else if(firstNumber > secondNumber &&
  firstNumber > thirdNumber &&
  thirdNumber > secondNumber) 
  {
  document.getElementById("5th").innerHTML=
  "Max = " + firstNumber + " | " + "Min = " + secondNumber
}
else if(secondNumber > firstNumber &&
  secondNumber > thirdNumber &&
  firstNumber > thirdNumber) 
  {
  document.getElementById("5th").innerHTML=
  "Max = " + secondNumber + " | " + "Min = " + thirdNumber
}
else if(secondNumber > firstNumber &&
  secondNumber > thirdNumber &&
  thirdNumber > firstNumber) 
  {
  document.getElementById("5th").innerHTML=
  "Max = " + secondNumber + " | " + "Min = " + firstNumber
}
else if(thirdNumber > firstNumber &&
  thirdNumber > secondNumber &&
  firstNumber > secondNumber) 
  {
  document.getElementById("5th").innerHTML=
  "Max = " + thirdNumber + " | " + "Min = " + secondNumber
}
else {
  document.getElementById("5th").innerHTML=
  "Max = " + thirdNumber + " | " + "Min = " + firstNumber
}
*/

// 6th Task In JS First Assignment
/*
var userNumber = Number(window.prompt("Enter Number To Check"));
if(userNumber % 2 == 0) {
  document.getElementById("6th").innerHTML = "Even Number";
}
else {
  document.getElementById('6th').innerHTML = "Odd Number";
}
*/

// 7th Task In JS First Assignment
/*
var userChar = window.prompt("Enter A Character")
if (userChar === "a"||userChar === "e"||userChar === "l"||userChar === "o"||userChar === "u") {
  document.getElementById("7th").innerHTML = "Vowel Character";
}
else {
  document.getElementById("7th").innerHTML = "Constant Character";
}
*/

// 8th Task In JS First Assignment
// var userNumber = Number(window.prompt("Enter Your Number"));
// for(var i =1;i<=userNumber;i++){
//   console.log(i);
// }

// 9th Task In JS First Assignment
/*
var userNumber = Number(window.prompt("Enter Your Number"));
for(var i = 1;i<=12;i++) {
  console.log(i*userNumber)
}
*/

// 10th Task In JS First Assignment
/*
var userNumber = Number(window.prompt("Enter A Number"));
for(var i =0; i <userNumber; i+=2) {
  console.log(i)
}
*/

// 11th Task In JS First Assignment
/*
var firstNumber = Number(window.prompt("Enter A First Number"));
var secondNumber = Number(window.prompt("Enter A Power Number"));
console.log(Math.pow(firstNumber, secondNumber))
*/

// 12th Task In JS First Assignment
/*
var firstDegree = Number(window.prompt("Enter A First Degree"));
var secondDegree = Number(window.prompt("Enter A 2nd Degree"));
var thirdDegree = Number(window.prompt("Enter A 3th Degree"));
var fourthDegree = Number(window.prompt("Enter A 4th Degree"));
var fifthDegree = Number(window.prompt("Enter A 5th Degree"));
var sum = firstDegree+secondDegree+thirdDegree+fourthDegree+fifthDegree;
console.log("Total Marks : " + sum );
console.log("Avarge Marks : " + sum/5 );
console.log("Percentage : " + sum/5 + " %" )
*/

// 13th Task In JS First Assignment
/*
var numberOfMonth = window.prompt("Enter Month Number");
if(numberOfMonth == 1||numberOfMonth == 3||numberOfMonth == 5||numberOfMonth == 7||numberOfMonth == 8||numberOfMonth == 10||numberOfMonth == 12) {
  console.log("Days In Month : 31 Days")
}
else if(numberOfMonth == 2) {
  console.log("Days In Month : 28 Days")
}
else {
  console.log("Days In Month : 30 Days")
}
*/