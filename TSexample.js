"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let grade = 'A'; //setting this variable to string
let grade2 = 85;
let test_total = 100;
let calcPercentage = (studentGrade, test_Total) => {
    let percentage = studentGrade / test_Total;
    percentage.toFixed();
    return `this student got ${percentage} percent`;
};
console.log(calcPercentage(grade2, test_total));
