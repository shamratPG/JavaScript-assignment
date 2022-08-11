function radianToDegree(radian) {
    if (typeof (radian) === "number") {
        // Angle in Degrees = Angle in Radians × 180°/π 
        const degree = radian * (180 / Math.PI);
        //return two numbers after decimal point.
        return degree.toFixed(2);
    }
    return "Error! This function only allows number as an input";
}