function radianToDegree(radian) {
    if (typeof (radian) === "number") {
        // Angle in Degrees = Angle in Radians × 180°/π 
        const degree = radian * (180 / Math.PI);
        //return two numbers after decimal point.
        return degree.toFixed(2);
    }
    return "Error! This function only allows number as an input";
}


function isJavaScriptFile(fileName) {
    if (typeof (fileName) === "string") {
        // If the string ends with .js, function will return true otherwise retrun false. 
        const isJavaScript = fileName.endsWith(".js");
        return isJavaScript;
    }
    return "Error! This function only allows string as an input";
}



function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
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
    return "Error! This function only allow numbers as input";
}



function publicBusFare(totalPassenger) {
    if (typeof (totalPassenger) === "number") {
        // Each Bus can take 50 persons.
        const passengerRemainsAfterBus = totalPassenger % 50;
        // Each Microbus can take 11 persons.
        const passengerRemainsAfterMicro = passengerRemainsAfterBus % 11;
        //Remaining each person will need 250 taka for Public Bus.
        const publicBusPrice = passengerRemainsAfterMicro * 250;
        return publicBusPrice;
    }
    return "Error! This function only allows number as an input";
}



function isBestFriend(obj1, obj2) {
    if (typeof (obj1) === "object" && typeof (obj2) === "object") {
        //To return true, First person's name should match with Second person's friend-name and vice versa.
        if (obj1.name === obj2.friend && obj2.name === obj1.friend) {
            return true;
        }
        return false;
    }
    return "Error! This function only allows two object as inputs";
}

