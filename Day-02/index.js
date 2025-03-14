console.log("Day - 02");


// ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
// ✅ Task 2: Print the values to the console.
// ✅ Task 3: Try reassigning values to let and const variables and observe errors.
// ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

//! Task-01
let name = "Nayan";
const age = 32;
const isStudent = false;
const favProgrammingLanguage = "Javascript";

//! Task - 02 
console.log(name, age, isStudent, favProgrammingLanguage);

//! Task - 03
// let name = "Kuddus";
console.log(name); // SyntaxError : identifier 'name' already been declared. . . 

//! Task - 04
const myArr = ["C++", "Python", "Javascript"];
const myObj = {
    name:"nayan",
    age:32,
    isStudent:false
}


myArr.push("Django");
myObj["isStudent"] = true;
console.log(myObj);



