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

