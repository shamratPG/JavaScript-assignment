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


