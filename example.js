let grade
let grade2
let test_total

grade = '85'
grade2 = 85
test_total = 100

let calcPercentage = (studentGrade, test_total) => {
    let percentage = studentGrade / test_total
    return `this student got ${percentage} percent`
}

console.log(calcPercentage(grade, test_total))