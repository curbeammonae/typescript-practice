let numGrades:number[] = []//I WANT MY ARRAY TO ONLY HAVE NUMBERS
let letterGrades:string[] = []//I WANT MY ARRAY TO ONLY HAVE STRINGS

numGrades = [1,2,3,4]
letterGrades = ["a","b"]

let student_grade:(string | number) = "fws" //can either be string or number

let myarray:(number | string )[]= ["yes", 3,3] //set an array with multilple types


//type alisa to help a custom array to contain objects of certain values
type Test = {
    name: string,
    total_score: number
}

let allTests: Test[] = []

allTests.push({
    name: "bio101",
    total_score:80,
})