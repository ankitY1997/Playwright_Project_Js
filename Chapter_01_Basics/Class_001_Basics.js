
/**
 *  Variable type :  we have three types of variable 
 * 
 * 1. var  -> the scope is gloabal socpe and you can re declare the variable and update the variable
 * 
 * 
 * 2. let -> Block Scope and you can not redeclare the variable but you can update the variable
 * 
 * 
 * 
 * 3.const -> Block scope and you can not redeclare the variable and you must need to intialize and you can not re-asign and update the variable
 * 
 * 
 * 
 */



//*****************lets understand about the variable  declaration type******** */

// var is avaialble since the java script introduce 
// 1. Understand about the first point :  You can re desclared the variable

var age = 45; // 1 first time declaration

var ager = 65;// 2 nd time you can declare the variable you will not get the error

console.log(age);

//2. Global Scope variable / blocked scope

{

    var age = 29;
    let name = "ankit"
    if (true) {
        var age = 50;
        let name = "rahul"
    }
    console.log(" Var : Global Scoped Variable", age); // now you will get 50 value here because it's global scope if it's block scope then i will get "29" instead of "50" because console.log statement present otuside of the if block
    console.log("Let Block Scope Variable ", name);// here you can see the name as "ankit" because it's scope is block and second block "name" variable value is present with in if block only

}

console.log(age); // globale scope var type variable see here also i am getting 50 but if it will be let then i will get 65 here

//3. No need to intialize the var type of variable by default value will be undefined

var name;// you can declare the variable with out intializing

console.log("Var by default value Is :" + name);


//********let variable type******** */
{
    // 1. let type variable you can not declared it twice you will get the error 
    let name = "ankit";

    //let name="ankit"; // you will get the erroe here [Identifier 'name' has already been declared]


    // 2. but you can reassign the value
    name = "rahul";
    console.log("After reassigning the value of let type variable : " + name);

    // 3. let type variable is block scoped

    // in this block name  variable is already present right but i can re declare the variable by creating one more block

    {
        let name = " ankit";
        console.log(" this is the inner block value :" + name);


    }


    ///**********const variable type************** */

    //1. once you used const variable type iyou can not change the value and you can not re declare the varialbe

    const rating = 5;

    // try to re- decalre the value

    // const rating = 5;// getting error you this variable name is already declared

    //re asisign the value

    // rating = 10;// getting error you this variable name is already declared

    // 3. const type variable is block scoped

    {

        const rating = 30;

        console.log(" Inner Block const type variable value :" + rating);
    }


    const student = {
        name: " tanvi",
        age: 24,
        ismarried: false,
        IsWorkingProffessional: true,
        salary: 20000
    };

}


