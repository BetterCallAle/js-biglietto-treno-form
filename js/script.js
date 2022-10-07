//data
const basePrice = 0.21;

//html extracted elements
const userName = document.getElementById("name");
console.log(userName);

const userDistance = document.getElementById("km");
console.log(userDistance);

const userAge = document.getElementById("age");
console.log(userAge);

const submit = document.getElementById("submit");
console.log(submit);

const cancel = document.getElementById("cancel")
console.log(cancel)

const nameOutput = document.getElementById("passenger-name")
console.log(nameOutput);

const carriage = document.getElementById("carriage")
console.log(carriage);

const code = document.getElementById("code")
console.log(code)

const priceElement = document.getElementById("price")
console.log(priceElement)

//function
submit.addEventListener("click", function () {
    const userDistanceValue = parseFloat(userDistance.value);
    console.log(userDistanceValue, typeof userDistanceValue);
    
    const userAgeValue = parseFloat (userAge.value);
    console.log(userAgeValue, typeof userAgeValue);

    const ticketPrice = userDistanceValue * basePrice;
    console.log(ticketPrice);

    const userNameValue = userName.value;
    console.log(userNameValue);

    //if
    let userDiscount = 0

    if (userAgeValue < 18){
        userDiscount = 20;
    } else if (userAgeValue > 65){
        userDiscount = 40;
    } else if (isNaN(userDistanceValue)) {
        alert("Hai inserito caratteri non ammessi come distanza in km")

    } else if (isNaN(userAgeValue)) {
        alert("Hai inserito caratteri non ammessi come età")
    }

    console.log(userDiscount);
    
    //cleaning the input
    userName.value = ""
    userDistance.value = ""
    userAge.value = ""

    //final price
    const finalPrice = (ticketPrice - (ticketPrice * userDiscount / 100)).toFixed(2)
    console.log(finalPrice);

    //output
    nameOutput.innerHTML = userNameValue
    carriage.innerHTML = Math.floor(Math.random() * 11);
    code.innerHTML = Math.floor(Math.random() * 9999) + 1000
    priceElement.innerHTML = `€${finalPrice}`
})

//cancel button
cancel.addEventListener("click", function (){ 
    userName.value = ""
    userDistance.value = ""
    userAge.value = ""
})