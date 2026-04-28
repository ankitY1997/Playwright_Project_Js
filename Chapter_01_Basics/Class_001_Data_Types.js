/**
 *  Data Types In JS
 * 
 * 1. Primitive  -> int, String, Boolean, undefined, null, BigInt, Symbole
 * 
 * 2. Non -primitive -> Object type like arrays
 * 
 * 
 * 
 */


/**
 *  How to get the dat type of any variable 
 * 
 * typeof keyword
 * 
 * 
 * 
 */

let x = 'Ankit'; // string

console.log("Data Type Is :" + typeof (x));

let y = 20; //int
console.log("data type of y is :" + typeof (y));

let isFollow = true; //boolean

const price = BigInt("993988988");

console.log("Date Type of price :" + typeof (price));

let size;
console.log("Size variable  Data Type Is : " + typeof (size));

size = null;
console.log("Size variable  Data Type Is : " + typeof (size));

let sym = Symbol("ankit");
console.log("Symbol Data Type Is : " + typeof (sym));

const student = {
    name: " tanvi",
    age: 24,
    ismarried: false,
    IsWorkingProffessional: true,
    salary: 20000
};


// data type of student is object 

console.log("Data Type of Student Variable Is :" + typeof (student)); // object

// how to fetch the value from object 

// we have two ways to fetch the value from object 

//first is 
console.log("Student Name Is " + student.name);
// second is
console.log("age is :" + student["age"]);

// now if you want to change the varialbe value of student object which is present in student object

student.name = student.name + "yadav";

console.log("Update Student Name Is :" + student["name"]);

