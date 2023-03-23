// let person = prompt("Please enter your name");
// let age = prompt("please enter your age");
// let gender = prompt("please enter your gender", "male or female")


// function genderf(gender) {
//     while (gender != "male" && gender != "female") {
//         gender = prompt("enter your gender ")


//         let genderCapital = gender.toUpperCase();

//         if (genderCapital == "MALE") {
//             alert("Welcome to MyCoffee Mr" + " " + person);
//         }
//         else if (genderCapital == "FEMALE") {
//             alert("Welcome to MyCoffee MS" + " " + person);
//         }


//     }
// }
// genderf(gender)
// let drink = prompt('Do you like a hot or cold coffe? ')
// let drinkName = prompt('nice,what is the drink you want? ')

// alert('Please wait,your drink is being prepared')


// let order = document.getElementById("order");
// let paarq = document.createElement("p");
// let mainul = document.createElement("ul");
// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");

// paarq.textContent = person;
// li1.textContent = gender;
// li2.textContent = age;
// li3.textContent = `${drink} ${drinkName}`;

// mainul.appendChild(li1);
// mainul.appendChild(li2);
// mainul.appendChild(li3);
// order.appendChild(paarq);
// order.appendChild(mainul);



// let customerArray = [person, age, gender, drink, drinkName]





// for (let index = 0; index < customerArray.length; index++) {

//     console.log(customerArray[index])


// }


const form = document.getElementById(orderFormm);
const formcontainer = document.getElementById(order);

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let fName = event.target.fname.value;
    let Age = event.target.age.value;
    let hotDrink = event.target.Hdrink.checked;
    let coldDrink = event.target.Cdrink.checked;
    let Dname = event.target.drinkname.value;
    console.log(fName, Age, coldDrink, hotDrink, Dname)
    let drinkType = ""
    if (hotDrink) {
        drinkType = drinkType + " hot "
    }
    if (coldDrink) {
        drinkType = drinkType + " cold "
    }
    render(fName, Age, drinkType, Dname)

})


function render(fName, Age, drinkType, Dname) {
    let pname = document.createElement("p")
    let page = document.createElement("p")
    let ptype = document.createElement("p")
    let pdname = document.createElement("p")

    pname.textContent = fName;
    page.textContent = Age;
    ptype.textContent = drinkType;
    pdname.textContent = Dname;

    formcontainer.appendChild(pname)
    formcontainer.appendChild(page)
    formcontainer.appendChild(ptype)
    formcontainer.appendChild(pdname)
}






