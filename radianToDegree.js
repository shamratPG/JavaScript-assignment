// Angle in Degrees = Angle in Radians × 180°/π 
function radianToDegree(radian) {
    // if radian value is a number function return the value in degree.
    if (typeof (radian) === "number") {
        const degree = radian * (180 / Math.PI);
        return degree.toFixed(2);
    }
    // if radian value is not a number function return an error message.
    return "Error! This function only allows number as an input";
}

