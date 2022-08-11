function isBestFriend(obj1, obj2) {
    // if arguments are objects, function will return true or false.
    if (typeof (obj1) === "object" && typeof (obj2) === "object") {
        //To return true, First person's name should match with Second person's friend-name and vice versa.
        if (obj1.name === obj2.friend && obj2.name === obj1.friend) {
            return true;
        }
        return false;
    }
    // if any of the argument is not an object, function will return an error message.
    return "Error! This function only allows two object as inputs";
}
