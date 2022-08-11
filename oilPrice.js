function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    // if all values are numbers function return the price.
    if (typeof (dieselQuantity) === "number" && typeof (petrolQuantity) === "number" && typeof (octaneQuantity) === "number") {
        //each liter Diesel is 114 tk
        const dieselPrice = 114 * dieselQuantity;
        //each liter Petrol is 130 tk
        const petrolPrice = 130 * petrolQuantity;
        //each liter Octane is 135 tk
        const octanePrice = 135 * octaneQuantity;

        const totalPrice = dieselPrice + petrolPrice + octanePrice;
        return totalPrice;
    }
    // if all value is not numbers function return an error message.
    return "Error! This function only allows numbers as input";
}

