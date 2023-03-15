let person = prompt("Please enter your name");
let gender=prompt("please enter your gender","male or female")

let genderCapital = gender.toUpperCase();

if (genderCapital == "MALE") {
    alert("Welcome to MyCoffe Mr"+" "+person);
}
else if(genderCapital == "FEMALE"){
    alert("Welcome to MyCoffe MS"+" "+person);
}
else{
    alert("Welcome to MyCoffe Dear Customer" );
}

let drink=prompt('Do you like a hot or cold coffe? ')
let drinkName=prompt('nice,what is the drink you want? ')

alert('Please wait,your drink is being prepared')

console.log(person+ " ordered a " + drinkName)