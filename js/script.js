//i dati
const basePrice = 0.21;

//html extracted elements
const userDistance = document.getElementById("km");
console.log(userDistance);

const userAge = document.getElementById("age");
console.log(userAge);

const submit = document.getElementById("submit");
console.log(submit);

//function
submit.addEventListener("click", function () {
    const userDistanceValue = parseFloat(userDistance.value);
    console.log(userDistanceValue, typeof userDistanceValue);
    
    const userAgeValue = parseFloat (userAge.value);
    console.log(userAgeValue, typeof userAgeValue);

    const ticketPrice = userDistanceValue * basePrice;
    console.log(ticketPrice);

    //if
    let userDiscount = 0

    if (userAgeValue < 18){
        userDiscount = 20;
    } else if (userAgeValue > 65){
        userDiscount = 40;
    }

    console.log(userDiscount);
})