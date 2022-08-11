function radianToDegree(radian) {
    // if radian is a number, function will return degree value.
    if (typeof (radian) === "number") {
        // Angle in Degrees = Angle in Radians × 180°/π 
        const degree = radian * (180 / Math.PI);
        //return two numbers after decimal point.
        return degree.toFixed(2);
    }
    // if radian is not a number, function will return an error message.
    return "Error! This function only allows number as an input";
}


function isJavaScriptFile(str) {
    // if str is a string, function return the result.
    if (typeof (str) === "string") {
        // If the string ends with .js, this function will return true otherwise it will retrun false. 
        const result = str.endsWith(".js");
        return result;
    }
    // if str is not a string, function return an error message.
    return "Error! This function only allows string as an input";
}


function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    // if arguments are numbers, function return the total price.
    if (typeof (dieselQuantity) === "number" && typeof (petrolQuantity) === "number" && typeof (octaneQuantity) === "number") {
        //per liter Diesel is 114 tk
        const dieselPrice = 114 * dieselQuantity;
        //per liter Petrol is 130 tk
        const petrolPrice = 130 * petrolQuantity;
        //per liter Octane is 135 tk
        const octanePrice = 135 * octaneQuantity;

        const totalPrice = dieselPrice + petrolPrice + octanePrice;
        return totalPrice;
    }
    // if arguments are not numbers, function return an error message.
    return "Error! This function only allows numbers as input";
}


function publicBusFare(passengerNumber) {
    // if passengerNumber is a number, function return the Public Bus Price.
    if (typeof (passengerNumber) === "number") {
        // Each Bus can take 50 persons.
        const RemainsAfterBus = passengerNumber % 50;
        // Each Microbus can take 11 persons.
        const RemainsAfterMicro = RemainsAfterBus % 11;
        //Remaining each person will need 250 taka for Public Bus.
        const publicBusPrice = RemainsAfterMicro * 250;
        return publicBusPrice;
    }
    // if passengerNumber is not a number, function return an error message.
    return "Error! This function only allows number as an input";
}



function isBestFriend(obj1, obj2) {
    // if arguments are objects, function will return true or false.
    if (typeof (obj1) === "object" && typeof (obj2) === "object") {
        //To return true, First person's name should match with Second person's friend-name and vice versa.
        if (obj1.name === obj2.friend && obj2.name === obj1.friend) {
            return true;
        }
        return false;
    }
    // if any of the argument is not an object, function will return an error message.
    return "Error! This function only allows two object as inputs";
}
