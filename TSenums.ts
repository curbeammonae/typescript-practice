//what are enums
// short for enumerations
// set of predefined values

enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}

//only valid parameters are parameters that are within the enum Month
function isItSummer(month: Month){
    let isSummer: boolean
    //since the months are assigned to numbers in an array
    //monthName is = month if it is a string, if it is a number, go to the Month enum and
    //access the value at that index using bracket notation

    let monthName: string = typeof month === "string" ? month : Month[month]
    switch (month){
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true
            break;
        default:
            isSummer = false
        break
    }
    return `${monthName} is ${isSummer}`

    // let isSummer: boolean = false
    // //add monthname
    // if (month === Month.Jun || month === Month.Jul || month === Month.Aug) {
    //     isSummer = true;
    // }
    // return isSummer

    

}
console.log(isItSummer(Month.Apr))