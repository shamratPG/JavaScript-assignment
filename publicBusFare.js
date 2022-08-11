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