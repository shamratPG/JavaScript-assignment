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