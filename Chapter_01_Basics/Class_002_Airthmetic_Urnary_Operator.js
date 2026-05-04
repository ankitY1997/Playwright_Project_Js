/**
 *  // MDN Docs. for reading a material
 * 
 *  Aithemetic Operator 
 * 
 *  +,-,*,/,%,**. 
 * /


/**
 * power operator **
 */
let x = 2;
let y = 2;

console.log("Power Operator", x ** y);// 2*2=4

// Modulus Operator

let age = 40;
let result = 40 % 10;
console.log("Modlus Result:", result)// 0


// Quotient Operator
let a = 20;
console.log("Divide By return quotient", a / 10);//2



/* Urnary Opeator
 *   1. Pre Incerement = ++a;
 *   2. Post Incerement =a++; 
 * 
 *   3. Pre Decrement = --a;
 *   4. Post Decrement =a--;
 */


{

    // post increment operator
    let x = 20;

    let y = x++; // so in post increment first it will assign the value then it will increase the value

    console.log(y);//20

    console.log(x) //21

    //post decrement operator

    let age = 20;

    let new_age = age--;// so first it will asign the orignal value later it will decrease the value

    console.log("new age", new_age)// thats why here i am getting the value of 20 because it has assigned 20;

    console.log("age :", age)// 19 (now it got decreased)


    // Pre Increment Operator (First it will increase then later it will assign)

    let price = 30;
    let new_price = ++price; // first it has increased the value by adding one then value is assigned to the variable

    console.log(" New Price :", new_price);//31

    // Pre Decrement Operator // first it will decrease operator later it will assign to the operator

    let marks = 40;
    let upd_marks = --marks + --marks;
    console.log("Updated Marks :", upd_marks)// 39





}

{
    /**
     *   Assignment Operator
     * 
     *   =,+=,-=,/=,%= ,*=,**= 
     */


    let a = 5;
    a += 2 //. a = a + 2;
    console.log("a :", a);//7

    a -= 2 //a=a-2;
    console.log("a :", a)//5

    a = a * 2 //a=a*2;
    console.log("a :", a);//10

    a **= 2 // a=a**2 => a=10*10;
    console.log("a :", a);//100


}

{
    /**
     *  
     * comprator operator
     * 
     *  1.Double equals to =>  == , Not equals to.  != , Strict type of equlas => ===,  Strict type of not equals => !==
     *  
     *   2. greater than => >, less than => <, grater than equals too  >=, less thant equals too ==> <= 
     * 
     */


    let x = 20;

    let y = 30;

    // double equals
    console.log("Double Equals :", x == y)// false

    // Not Equals
    console.log("Not Equals :", x != y)// true

    // strict type of equals operator  -> why we need this operator because this double equals operator ignore the data type 
    // let me explain you but strict type of (====) but it will not ignore the operator

    let a = "30";
    let b = 30;
    // here you can see double equals and not equals ingnore the data type they will also give the reult 
    console.log("Dobule Equals Result :", a == b);// true
    console.log("Not Equlas Result :", a != b)// false

    // But You can see now strict type of compraison operator

    console.log("Strict Type of Equals :", a === b); // here it will return as a false because these are not equals one is string and second is int data type

    let price = "400";
    let upd_price = 350;

    console.log("Strict Type of Not Equals Operator", price !== upd_price)//  true // it's not giving true because of here the data is not represent




}

{
    /**
     * 
     * Logical Operator -
     * 
     *    &&==>   (a==b)&&(a>=b)  => if both the condition is right then it will return true 
     * 
     *    ||==>  (a==b)||(a>=b) => if only one condtion is right then it will return true
     * 
     *     !==> not operator
     * 
     * 
     */


    let x = "Ankit Yadav 12232";
    let tempString = "";
    for (let i = 0; i < x.length; i++) {
        let c = x.charAt(i);
        if (c >= '0' && c <= '9') {
            tempString = tempString + c;
        }
    }
    console.log("Numeric String :", tempString);

    let mix_string = "abcdcd22324@#$%%%";

    let tempString_1 = "";

    // neeed to extract only the alphabetes

    for (let i = 0; i < mix_string.length; i++) {
        let c = mix_string.charAt(i);
        let d = c.charCodeAt();

        if ((d >= '65' && d <= '90') || (d >= '97' && d <= '122')) {
            tempString_1 = tempString_1 + c;
        }
    }
    console.log("Temp String :", tempString_1);

}



/**
 *    Conditional Statement
 * 
 * // if statment -> compare a one conditon
 *   if(conditon ){
 * }
 * 
 * //. if else statment => compare only one condition
 *  if(){
 * } else . => 
 * }
 * 
 * // if else if statment (compare multiple condition)
 * 
 *  if(){
 * }else if(){
 * } else if(){
 * } else{
 * }
 * 
 * 
 * 
 * 
 */


/**
 *   turnary operator
 * 
 *   syntax =>. condtion ? " if true" : "if false";
 * 
 *  if (condtions ) is true then it will exectue first statment
 * 
 *  if condition is false then it will execute second statement
 * 
 * 
 * 
 */




