// If the string ends with .js, this function will return true otherwise it will retrun false. 

function isJavaScriptFile(str) {
    // if radian value is a number function return the value in degree.
    if (typeof (str) === "string") {
        const result = str.endsWith(".js");
        return result;
    }
    // if radian value is not a number function return an error message.
    else {
        return "Error! This function only allows string as an input";
    }
}
console.log(isJavaScriptFile(true));
