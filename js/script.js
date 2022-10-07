//data
const basePrice = 0.21;

//html extracted elements
const userDistance = document.getElementById("km");
console.log(userDistance);

const userAge = document.getElementById("age");
console.log(userAge);

const submit = document.getElementById("submit");
console.log(submit);

const title = document.querySelector("")
console.log(title);

const userName = document.getElementById("name");
console.log(userName);

const cancel = document.getElementById("cancel")
console.log(cancel)

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
    title.innerHTML = `Il prezzo finale è €${finalPrice}`
})

//cancel button
cancel.addEventListener("click", function (){ 
    userName.value = ""
    userDistance.value = ""
    userAge.value = ""
})