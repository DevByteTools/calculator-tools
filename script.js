function calculateAge() {

let birthYear = document.getElementById("birthyear").value;
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

document.getElementById("ageresult").innerText = "Your age is " + age;

}

function calculatePercentage() {

let percent = document.getElementById("percent").value;
let number = document.getElementById("number").value;

let result = (percent / 100) * number;

document.getElementById("percentresult").innerText = "Result: " + result;

}

function calculateBMI() {

let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;

let bmi = weight / (height * height);

document.getElementById("bmiresult").innerText = "Your BMI is " + bmi.toFixed(2);

}

function calculateTimeDifference(){

let c1 = document.getElementById("country1").value;
let c2 = document.getElementById("country2").value;

let diff = Math.abs(c1 - c2);

document.getElementById("timeresult").innerText =
"Time difference: " + diff + " hours";

}

function calculateInterest(){

let p = document.getElementById("principal").value;
let r = document.getElementById("rate").value;
let t = document.getElementById("time").value;

let interest = (p * r * t) / 100;

document.getElementById("interestresult").innerText =
"Simple Interest: " + interest;

}

function calculateGST(){

let amount = document.getElementById("amount").value;
let gst = document.getElementById("gstrate").value;

let gstAmount = (amount * gst) / 100;
let total = Number(amount) + gstAmount;

document.getElementById("gstresult").innerText =
"GST: " + gstAmount + " | Total: " + total;

}

function calculateDiscount(){

let price = document.getElementById("price").value;
let discount = document.getElementById("discount").value;

let discountAmount = (price * discount) / 100;
let finalPrice = price - discountAmount;

document.getElementById("discountresult").innerText =
"Final Price: " + finalPrice;

}

function calculateAverage(){

let nums = document.getElementById("numbers").value.split(",");

let sum = 0;

for(let i=0;i<nums.length;i++){
sum += Number(nums[i]);
}

let avg = sum / nums.length;

document.getElementById("averageresult").innerText =
"Average: " + avg;

}

function calculateDays(){

let start = new Date(document.getElementById("startdate").value);
let end = new Date(document.getElementById("enddate").value);

let diff = end - start;

let days = diff / (1000 * 60 * 60 * 24);

document.getElementById("daysresult").innerText =
"Days between: " + days;

}

function calculateEMI(){

let P = document.getElementById("loanamount").value;
let annualRate = document.getElementById("interestrate").value;
let n = document.getElementById("loanmonths").value;

let r = (annualRate / 12) / 100;

let emi = (P * r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);

document.getElementById("emiresult").innerText =
"Monthly EMI: " + emi.toFixed(2);

}
