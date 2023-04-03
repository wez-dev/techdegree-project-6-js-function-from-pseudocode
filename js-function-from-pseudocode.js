// Task - convert the code comment ("pseudo code") into a working JS function

// function calculate_gpa
    // pass in student_grades
    // set grade_total to 0
    // for each grade in student_grades
        // if grade is not a 1, 2, 3, or 4
            // print "invalid grade" and grade
            // exit function with "can't complete calculation" message
        // else add grade to grade_total
        // endif
    // endfor
    // set gpa to grade_total / number of grades
    // return gpa
// endfunction

// set reggie_grades to 4, 4, 3, 4
// print the results of calling calculate_gpa with reggie_grades

// set dave_grades to 1, 2, 3, 2
// print the results of calling calculate_gpa with dave_grades
function calculate_gpa( grade_array ) {


  let total_grade = 0;
  
  for (let i = 0; i < grade_array.length; i++) { 
  
    if ((grade_array[i] != 4) && (grade_array[i] != 3) && (grade_array[i] != 2) && (grade_array[i] != 1)) {
     //console.log(`Grade at index ${i} is not 3 or 4`);
     // console.log(`Can't Complete Calculation`);
     //return;
      return "Cannot Complete Calculation";

    }else {
    
      total_grade+=grade_array[i];
    //console.log(grade_array[i]);
    //console.log(total_grade);
    } // if grade_array !=
  }//  for each 

const gpa = total_grade/grade_array.length;
return gpa;
}

const reggie_grades = [4, 4, 3, 4];
const dave_grades = [1, 2, 3, 2];

console.log(calculate_gpa( reggie_grades ));
console.log(calculate_gpa( dave_grades ));

