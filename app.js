let person = prompt("Please enter your name");
let gender=prompt("please enter your gender","male or female")


function genderf(gender){
while  (gender != "male" && gender!="female"){
gender= prompt("enter your gender ")


let genderCapital = gender.toUpperCase();

if (genderCapital == "MALE") {
    alert("Welcome to MyCoffee Mr"+" "+person);
}
else if(genderCapital == "FEMALE"){
    alert("Welcome to MyCoffee MS"+" "+person);
}


}
}
genderf(gender)
let drink=prompt('Do you like a hot or cold coffe? ')
let drinkName=prompt('nice,what is the drink you want? ')

alert('Please wait,your drink is being prepared')

let customerArray=[person,gender,drink,drinkName]

for (let index = 0; index < customerArray.length; index++) {

    console.log(customerArray[index])

}