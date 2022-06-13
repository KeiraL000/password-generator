function showDiv() {
  document.querySelector(".options").style.display = "block";
}


var resultOf = document.getElementById('password');
var lengthOf = document.getElementById('length');
var uppercaseOf = document.getElementById('uppercase');
var lowercaseOf = document.getElementById('lowercase');
var numbersOf = document.getElementById('numbers');
var specialOf = document.getElementById('special');
var generatePass = document.getElementById('generate');

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) +48);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

function getRandomSpecial() {
  var special = '!@#$%^&*(){}[]=<>/,.'
  return special[Math.floor(Math.random() * special.length)];
}

var randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
	number: getRandomNumber,
	special: getRandomSpecial,
}

generate.addEventListener('click', () => {
	var length = +lengthOf.value;
	var hasLower = lowercaseOf.checked;
	var hasUpper = uppercaseOf.checked;
	var hasNumber = numbersOf.checked;
	var hasSpecial = specialOf.checked;

  resultOf.innerText = generatedPassword(
  hasLower, 
  hasUpper, 
  hasNumber, 
  hasSpecial, 
  length
  );
});

function generatedPassword(lower, upper, number, special, length) {
  let generatedPassword = '';
  var typesCount = lower + upper + number + special;
  var typesArr = [{lower}, {upper}, {number}, {special}].filter(item => Object.values(item)[0]);

if(typesCount ===0) {
  return '';
}

for(let i=0; i<length; i+=typesCount) {
  typesArr.forEach(type => {
    var functionName = Object.keys(type)[0];
    generatedPassword += randomFunction[functionName]();

  });
}

var finalPassword = generatedPassword.slice(0, length);

return finalPassword;
}
