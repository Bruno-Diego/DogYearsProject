/*
//Create a variable and set it equal to your age as a number.
const myAge = 31;
//Create a variable to early years
let earlyYears = 2;
//Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
earlyYears *= 10.5;
//Since we already accounted for the first two years, subtract 2 from myAge and set the result equal to a variable called laterYears.
let laterYears = myAge - 2;
laterYears *= 4;
//console.log(earlyYears)
//console.log(laterYears)
const myAgeInDogYears = earlyYears + laterYears;
const myName = "bruno".toLowerCase();
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
*/

function getAge() {
  const myAge = document.getElementById("giveAge").value;
  let earlyYears = 2;
  earlyYears *= 10.5;
  let laterYears = myAge - 2;
  laterYears *= 4;
  const myAgeInDogYears = earlyYears + laterYears;
  var newText = document.createElement("h2");
  var result = document.createTextNode(
    "You are " + myAge + " years old in human years which is " + myAgeInDogYears + " years old in dog years."
  );
  newText.appendChild(result);
  var currentDiv = document.getElementById("div-result");
  currentDiv.appendChild(newText);
}
