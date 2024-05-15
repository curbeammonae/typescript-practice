"use strict";
let student_info = (info, school = "west highscool") => {
    let enrolled = info.is_enrolled ? "" : "not";
    return `${info.first_name} ${info.last_name} is ${enrolled} enrolled at ${school}.her gpa is ${info.GPA_value}`;
};
console.log(student_info({
    first_name: 'mary',
    last_name: 'jos',
    GPA_value: 4.0,
    is_enrolled: true
}));
