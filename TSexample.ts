let grade:string = 'A'//setting this variable to string
let grade2:number = 85
let test_total:number = 100




let calcPercentage = (studentGrade:number, test_Total:number) : string => {
    let percentage = studentGrade / test_Total
    percentage.toFixed()
    return `this student got ${percentage} percent`
}

console.log(calcPercentage(grade2, test_total))

export{}