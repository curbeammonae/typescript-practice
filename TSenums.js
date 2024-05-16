"use strict";
//what are enums
// short for enumerations
// set of predefined values
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
//only valid parameters are parameters that are within the enum Month
function isItSummer(month) {
    let isSummer;
    //since the months are assigned to numbers in an array
    //monthName is = month if it is a string, if it is a number, go to the Month enum and
    //access the value at that index using bracket notation
    let monthName = typeof month === "string" ? month : Month[month];
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return `${monthName} is ${isSummer}`;
    // let isSummer: boolean = false
    // //add monthname
    // if (month === Month.Jun || month === Month.Jul || month === Month.Aug) {
    //     isSummer = true;
    // }
    // return isSummer
}
console.log(isItSummer(Month.Apr));
