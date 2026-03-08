function calculateAge(){

let birthyear = document.getElementById("birthyear").value;

let age = 2026 - birthyear;

document.getElementById("result").innerHTML =
"Your age is " + age;

}