type Student = {
    student_id?:number,
    first_name:string,
    last_name:string,
    middle_name?:string, //question mark makes something optional in a type
    is_enrolled:boolean,
}


type StudentGPA = {
  GPA_value?: number,

  
}

//combine types together

type StudentWithGPA = Student & StudentGPA

let student_info = (info: StudentWithGPA, school:string = "west highscool") : string => {
  let enrolled = info.is_enrolled ? "" : "not";
  return `${info.first_name} ${info.last_name} is ${enrolled} enrolled at ${school}.her gpa is ${info.GPA_value}`;
};

console.log(student_info({
    
    first_name: 'mary',
    last_name: 'jos',
    GPA_value: 4.0,
    
    is_enrolled: true
}))