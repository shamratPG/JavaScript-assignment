function publicBusFare(passengerNumber) {
    // if passengerNumber is a number function return the result.
    if (typeof (passengerNumber) === "number") {
        // Each Bus can take 50 people.
        const RemainsAfterBus = passengerNumber % 50;
        // Each Microbus can take 11 people.
        const RemainsAfterMicro = RemainsAfterBus % 11;
        //Remaining each people will need 250 taka for Public Bus.
        const publicBusPrice = RemainsAfterMicro * 250;
        return publicBusPrice;
    }
    // if passengerNumber is not a number function return an error message.
    return "Error! This function only allows number as an input";
}
