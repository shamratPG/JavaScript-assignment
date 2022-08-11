function isJavaScriptFile(fileName) {
    if (typeof (fileName) === "string") {
        // If the string ends with .js, function will return true otherwise retrun false. 
        const isJavaScript = fileName.endsWith(".js");
        return isJavaScript;
    }
    return "Error! This function only allows string as an input";
}