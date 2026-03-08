function calculateAge(){

let birthyear = document.getElementById("birthyear").value;
let currentYear = new Date().getFullYear();

let age = currentYear - birthyear;

document.getElementById("ageresult").innerHTML =
"Your age is " + age + " years";

}

function calculatePercentage(){

let percent = document.getElementById("percent").value;
let number = document.getElementById("number").value;

let result = (percent/100) * number;

document.getElementById("percentresult").innerHTML =
"Result: " + result;

}

function calculateBMI(){

let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;

let bmi = weight / (height * height);

document.getElementById("bmiresult").innerHTML =
"Your BMI is " + bmi.toFixed(2);

}
