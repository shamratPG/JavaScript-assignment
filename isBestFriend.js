function isBestFriend(obj1, obj2) {
    // if radian value is a number function return the value in degree.
    if (typeof (obj1) === "object" && typeof (obj2) === "object") {
        if (obj1.name === obj2.friend && obj2.name === obj1.friend) {
            return true;
        }
        return false;
    }
    // if radian value is not a number function return an error message.
    return "Error! This function only allows two object as inputs";
}

let abul = { name: 'abul', friend: 'babul' };
let kabul = { name: 'kabul', friend: 'abul' };
let alex = { name: 'alex', friend: 'adnan' };
let adnan = { name: 'adnan', friend: 'alex' };
console.log(isBestFriend(abul, kabul));