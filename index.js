//Variable - a container that stores a value and behaves as if it were the value

//To use a variable you need to use:
//1. declaration    -   let x;
//2. assignment     -   x = 100;

// 2 Types of Variables declarations (let, const)
//let       - variables can be changed
// const    -  variables cannot be changed

// Value Types 
// Primitives   -   String, Number, Boolean, undefined, null
// Reference    -   objects, array, function

// Examples of Primitive Variables

/*
let name = 'Timothy'; //    <-- String
let age = 30; //            <-- Number
let isApproved = false; //  <-- Boolean
let firstName = undefined; // undefined variable (can be used later)
let lastName = null; // used to clear the value of variable
*/

// to check the type of variable - on console enter "typeof (variable name)"

// to change the content of HTML element use 
//document.getElementById("element id").textContent = 'the content';

//you can also use template literal to insert a variable inside a text value ``
// to use it, use `` instead of '' or ""
// then to insert a variable inside the template literal use ${}

// ex. 
/*
    let mName = "Timm";
    console.log(`Hello ${mName}!`);
*/

// ======================== STRING METHOD =====================
// this method allows you to manipulate and work with text (strings)

// to read a index of a character it always starts with 0,1,2....
//ex. Tim the index of this character is  0,1,2
// T = 0, i = 1, m = 2

// charAt           -   to know the character of index
/* ex.
    let userName = "Timots";
    console.log(userName.charAt(0)); <- it will show "T" in the console
*/

// indexOf          -   to know the index of the character
// lastIndexOf      -   to know the last index of character
/* ex.
    let userName = "Timotsi";
    console.log(userName.indexOf("i")); <- it will show "1" in the console
    console.log(userName.lastIndexOf("i")); <- it will show "6"
*/

// length           -   to know the length of the character
/* ex.
    let userName = "Timots";
    console.log(userName.length); <- it will show "6"
*/

// trim()           -   to remove all the spaces inside the string
/* ex.
    let userName = "I am Timots";
    userName = userName.trim();
    console.log(userName); <- it will show "IamTimots"
*/

// toUpperCase()    -   to make string all uppercase
// toLowerCase()    -   to make string all lowercase
/* ex.
    let userName = "Timots";
    userName = userName.toUpperCase();
    userName = userName.toLowerCase();
    console.log(userName); <- it will show "TIMOTS"
    console.log(userName); <- it will show "timots"
*/

// repeat()         -   to repeat the string
/* ex.
    let userName = "Timots";
    userName = userName.repeat(3);
    console.log(userName); <- it will show "TimotsTimotsTimots"
*/

// startsWith()     -   to determine if a string starts with a given character
// endsWith()       -   to determing if a string ends with a given character
//                      **both are boolean value type
/* ex.
    let userName = "Timots";
    let result = userName.startsWith(" ");
    console.log(result); <- it will show "false"
*/

// includes()       -   to know if the string contains an empty space
//                      **also a boolean value type
/* ex.
    let userName = "Timots";
    let result = userName.includes(" ");
    console.log(result); <- it will show "false"
*/

// replaceAll()     -   to replace a character
/* ex.
    let userName = "123-456-7890";
    let result = userName.replaceAll("-", "");
    console.log(result); <- it will show "1234567890"
*/

// padStart()       -   to set a certain length of characters
//                      and fill it with certain character at the start
// padEnd()         -   to set the length and fill it at the end
/* ex.
    let userName = "1234";
    let start = userName.padStart(7, "0");
    let end = userName.padStart(7, "0");
    console.log(start); <- it will show "0001234"
    console.log(end); <- it will show "1234000"
*/


// --------------------- METHOD CHAINING -----------------------
//method chaining - calling one method after another in one continous line
/*
let text = "bro";

let letter = text.charAt(0).toUpperCase().trim();

console.log(letter);
*/


// ================= Examples Of Reference Variables ================

// ----------- OBJECTS -----------
// to assign object literal use {} you can place 1 or more value pairs inside

/*
let person = {
    name: 'Tim',
    age: 21
};

// 2 Types to change the object property - dot, bracket
//Dot notation (.variable)
person.name = 'Timmy';

//Bracket notation ['target property']
person['name'] = 'Teem';


console.log(person.name);
*/

//----------- ARRAY ------------
// array    -   a variable like structure that can hold more than 1 value
// square bracket are array literal [] <-- means empty array
// to access the elements inside the array use index numbering [0,1,2,..]
//array elements are dynamic and can change or add values

// let selectedColors = ['red', 'blue'];
// index value ['red' is 0, 'blue' is 1]
// selectedColors[2] = 'green'
//using this ^ will add green to the array of selectedColors variables which will show ['red','blue','green'] in the console.
// you can store different types of values inside the array
// array is a data structure to represent the list of items

// console.log(selectedColors);
//to select a specific array value select it by index ex. (selectedColors[0]) which shows red in the console.


let fruits = ["apple", "orange", "banana", "coconut", "strawberry"];

fruits.sort();
// sort()           -   to sort the array alphabetically 
// sort().reverse() -   to sort aplhabetically in reverse order

for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
}


// -------------- SPREAD OPERATOR ----------------------
// spread operator  -   allows an iterable as an array
//  [...]               or string to be expanded into separate
//                      elements (unpacks the elements)
//                      you can also assign it to a new variable
//                      after you use spread operator


let numbers = [1, 2, 3, 4, 5];

//let maximum = Math.max(numbers); //<-- this will show as NaN in the console
//                                      since the numbers in the array are not
//                                      individually selected.

let maximum = Math.max(...numbers); //<- this will show in the console the
//                                      largest number in the array

// console.log(maximum);

let nameSpread = "Tim";
// let letterSpread = [...nameSpread]; //<- this will show ['T', 'i', 'm']
let letterSpread = [...nameSpread].join("-"); //<- this will show T-i-m

// console.log(letterSpread);


let vegetables = ["carrots", "celery", "potatoes"];

// let foods = [...fruits, ...vegetables];

// console.log(foods); // <- this will show all the values inside the array
// ['apple', 'banana', 'coconut', 'orange', 'strawberry', 'carrots', 'celery', 'potatoes']

// you can also add another value inside the new array
let foods = [...fruits, ...vegetables, "eggs", "milk"];

// console.log(foods); // <- ['apple', 'banana', 'coconut', 'orange', 'strawberry', 'carrots', 'celery', 'potatoes', 'eggs', 'milk']


// -------------- REST PARAMETERS ----------------------
// rest parameters  -   allow a function work with a variable number of
// [...rest]            arguments by bundling them into an array




    //ex.
    function openFridge(...foods) {
        console.log(foods);
    }

    const food1 = "pizza";
    const food2 = "burger";
    const food3 = "hotdog";
    const food4 = "sushi";
    const food5 = "ramen";

    // openFridge(food1, food2, food3, food4, food5); //<- this will show as an
                                                   // array of ['pizza', 'burger', 'hotdog', 'sushi', 'ramen']






// ================== PERDFORMING A TASK FUNCTION ==================
//        v to declare the name of the function together with () <--
/*
function greet() {
    console.log('Hello World');
}

greet(); // <-- will display the function value in the console


//the name inside (name) <-- is the parameter of the welcome function
function welcome(name, lastName) {
//to add parameters inside the function (name, lastName)

    console.log('Hello ' + name + ' ' + lastName);
}

welcome('Timots', 'Kab');
*/

// the 'Timots' <- is refered as an argument
// argument is the value we supply to the parameter

// ================= CALCULATING A VALUE FUNCTION ===============

/*
function square(number) {
    reroll number * number;
}

console.log(square(2));


document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById('p2').innerHTML = "You are " + age + " years old" ;

/*
    Arithmetic expression is a combination of..
    operands (values, variables, etc..)
    operators ( + - * / % )
    exponents ** - to the power of number 
    that can be evaluated to a value
    ex. y = x + 5;
*/

// let students = 20;
// let extraStudents = students % 3;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;

// MODULUS Operator % (percent sign) it gives the remainder of any division
// note** it is better to give the value of modulus operator its own variable

/* 
Augmented Assignment Operators:
a shortcut for using operators "+=" <-- operators next to equal sign 
(ex. +=, -=,...)
    a students += 1; which is the same with students = students + 1;

    you can also use ++, -- if you only need to increment or decrese by 1
    ex students++; is also will make students value increment 1
    students = 21
*/

// console.log(students);
// console.log(extraStudents);

/*
   OPERATOR PRECEDENCE
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

// this computes left to right but following the operator precedence
// let result = 1 + 2 * (3 + 4);
// so for this problem it starts with the parenthesis (3+4)
//result = 1 + 2 * 7; then exponents if there is none, skip to next step
//result = 1 + 14; then lastly addition & subtraction
//result = 15;


// console.log(result);


// ================= USER INPUT ======================

// EASY WAY with a window prompt

// let userName = window.prompt("What's your name?");
// console.log(userName);


// HARD WAY HTML TEXTBOX


let userName;

document.getElementById("myButton").onclick = function() {
    userName = document.getElementById("myText").value;
    document.getElementById("myLabel").textContent = `Hello ${userName}`;
}



// --------- TYPE CONVERSION = change the data type of a value to another (strings, number, boolean)

/*

let x;
let y;
let z;

x = Number("7"); if a value is a 'word' it will show NaN (not a number)

y = String(7); if a string is added to a number it will add the number 
                along the string ex. y += 1; it will show 71 instead of 8

z = Boolean(""); blank = false, any value is = true

// to check the type of variable use "typeof"
ex. 
console.log(x, typeof x);


let age = window.prompt("How old are you?");

age = Number(age);
age += 1;

console.log("Happy Birthday! You are", age, "years old")

*/


// EXAMPLES OF USING A CONST

const PI = 3.14159;
let radius;
let circumference;


document.getElementById("radBtn").onclick = function() {

    radius = document.getElementById("radiusValue").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("circValue").textContent = circumference + " cm";
}

document.getElementById("radClearBtn").onclick = function() {
    document.getElementById("radiusValue").value = null;
    document.getElementById("circValue").textContent = "...";
}

///////////////////////////////////////////////////////////

const computeBtn = document.getElementById("computeBtn");
const clearComputeBtn = document.getElementById("clearComputeBtn");
const totalPurchase = document.getElementById("totalPurchase");
let amount;
let discount;

computeBtn.onclick = function() {
    amount = document.getElementById("itemAmount").value;
    discount = document.getElementById("itemDiscount").value;
    
    totalPurchase.textContent = amount - amount * (discount/100);
}

clearComputeBtn.onclick = function() {
    document.getElementById("itemAmount").value = null;
    document.getElementById("itemDiscount").value = null;
    totalPurchase.textContent = "...";
}



// =================== MATH ==========================
/*
let x = 3.14; // or x = Math.PI; it will show the value of pie
let y = 5;
let z = 9;
let maximum;
let minimum;

// x = Math.round(x); - round up the number if the decimal is .5 and up
// x = Math.floor(x); - round down the number or ignores the decimal
// x = Math.ceil(x); - round up the number regardles the value of decimal
// x = Match.trunc(x); - will remove any decimal 
// x = Math.pow(x, 2); - power of number
// x = Math.sqrt(x); - square root
// x = Math.log(x); - logarithm of a number
// x = Math.sin(x); - sine
// x = Math.cos(x); - cosine
// x = Math.tan(x); - tangent
// x = Math.abs(x); - the distance value away from zero
// x = Math.sign(x);


maximum = Math.max(x, y, z);    -   will determine the maximum number in array
minimum = Math.min(x, y, z);    -   will determing the minimum

console.log(maximum);
console.log(minimum);

*/

// ============== LOOKING FOR THE HYPOTHENUS OF THE NUMBER =============


/*
let a;
let b;
let c;

a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

//
c = Math.pow(a, 2) + Math.pow(b, 2); 
c = Math.sqrt(c);
or shortcut


c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side C;", c);
*/

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function () {
    
    a = document.getElementById("aTextBox").value;
    a = Number(a);
    
    b = document.getElementById("bTextBox").value;
    b = Number(b);
    
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    
    document.getElementById("sideC").innerHTML = c;
}

document.getElementById("hypoClearBtn").onclick = function() {
    document.getElementById("aTextBox").value = null;
    document.getElementById("bTextBox").value = null;
    document.getElementById("sideC").textContent = " ...";
}


// ====================== COUNTER NUMBER ====================
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

decreaseBtn.onclick = function () {
    count -= 1;
    countLabel.textContent = count;
}

increaseBtn.onclick = function () {
    count += 1;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}


// ======================= DICE ROLL ======================
function rollDice() {
    
    const diceCount = document.getElementById("diceCount").value;
    const diceResult = document.getElementById("diceResult");
    const diceValues = [];
    const images = [];

    for (let i = 0; i < diceCount; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        diceValues.push(value);
        images.push(`<img src="images/dice/${value}.svg" alt="Dice ${value}">`);
        //note** you should rename the image to call it easily
    }
    diceResult.textContent = `Dice: ${diceValues.join(', ')}`;
    diceImages.innerHTML = images.join('');
}

function resetRoll() {
    document.getElementById("diceCount").value = 1;
    document.getElementById("diceResult").textContent = null;
    diceImages.innerHTML = null;
}


// let minRoll = 1;
// let maxRoll = 6;
// let roll1;
// let roll2;
// let roll3;

// roll.onclick = function() {

//     roll1 = Math.floor(Math.random() * maxRoll) + minRoll;
//     roll2 = Math.floor(Math.random() * maxRoll) + minRoll;
//     roll3 = Math.floor(Math.random() * maxRoll) + minRoll;

//     d1.textContent = roll1;
//     d2.textContent = roll2;
//     d3.textContent = roll3;
// }

// resetRoll.onclick = function() {
//     roll1 = 0;
//     roll2 = 0;
//     roll3 = 0;

//     d1.textContent = roll1;
//     d2.textContent = roll2;
//     d3.textContent = roll3;
// }


// ==================== SLICE METHOD =======================
//slice() extracts a section of a string and rerolls it as a new string
// without modifying the original string.

const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const nameBtn = document.getElementById("nameBtn");
const clearSlice = document.getElementById("clearSlice");
let firstName;
let lastName;
let fullName;

nameBtn.onclick = function() {
    fullName = document.getElementById("fullName").value;
    firstName = fullName.slice(0, fullName.indexOf(" "));
    lastName = fullName.slice(fullName.indexOf(" ") + 1);

    fName.textContent = firstName;
    lName.textContent = lastName;
}

clearSlice.onclick = function() {
    document.getElementById("fullName").value = null;
    fName.textContent = null;
    lName.textContent = null;
}

// ========================= IF STATEMENT ==========================
/*
    if statement - a basic form of decision making, if a condition is true, 
                    then do a something
                    if not, then dont do it

    note** you can use 'continue, break' for the iterations
    continue    -   to skip a certain value
    break       -   to stop the iteration
*/
const ageStatus = document.getElementById("ageStatus");
const ageBtn = document.getElementById("ageBtn");
let myAge;

ageBtn.onclick = function() {
    myAge = document.getElementById("myAge").value;

    if(myAge >= 65) {
        ageStatus.textContent = "You are a senior citizen";
    }
    else if(myAge >= 18) {
        ageStatus.textContent = "You are an adult";
    }
    else if(myAge < 0) {
        ageStatus.textContent = "You haven't been born yet!";
    }
    else {
        ageStatus.textContent = "You are a kid";
    }
}

document.getElementById("resetAgeBtn").onclick = function() {

    document.getElementById("myAge").value = null;
    ageStatus.textContent = "...";
}

////////////////////////////////////////////////////////////////////////////////
const subButton = document.getElementById("subButton");
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const subStatus = document.getElementById("subStatus");
const cardStatus = document.getElementById("cardStatus");
const clearStatus = document.getElementById("clearStatus");

subButton.onclick = function() {

    if (myCheckBox.checked) {
        subStatus.textContent = "You are subscribed!";
    }
    else {
        subStatus.textContent = "You are not yet subscribed!";
    }

    if (visaBtn.checked) {
        cardStatus.textContent = "You are paying with Visa";
    }
    else if (masterCardBtn.checked) {
        cardStatus.textContent = "You are paying with Master Card";
    }
    else if (paypalBtn.checked) {
        cardStatus.textContent = "You are paying with Paypal";
    }
    else {
        cardStatus.textContent = "Please select your payment type";
    }
}

clearStatus.onclick = function() {
    myCheckBox.checked = false;
    visaBtn.checked = false;
    masterCardBtn.checked = false;
    paypalBtn.checked = false;
}

////////////////////// TERNARY OPERATOR /////////////////////////
// ternary operator -   a shortcut to if{} and else{} statements
//                      helps to assign a variable based on a condition
//                      condition ? codeIfTrue : codeIfFalse;
/*
    let age = 21;
    let message = age >= 18 ? "You're an adult" : "You're a minor";

    console.log(message);
*/

const compBtn = document.getElementById("compBtn");
const clearCompBtn = document.getElementById("clearCompBtn");
const totalAmount = document.getElementById("totalAmount");
let purchase;
let disc;

compBtn.onclick = function() {
    purchase = document.getElementById("purchaseAmount").value;
    disc = purchase >= 100 ? 30 : 0;

    totalAmount.textContent = purchase - purchase * (disc/100);
}

clearCompBtn.onclick = function() {
    document.getElementById("purchaseAmount").value = null;
    totalAmount.textContent = "...";
}


// ========================= SWITCH STATEMENT ==========================
// swtich - a statement that examines a value for a match against many case.
//          More efficient than many "else if" statements

let myGrade;

document.getElementById("gradeBtn").onclick = function() {
    myGrade = document.getElementById("myGrade").value;

    switch(true){
        case myGrade >= 95:
            document.getElementById("myResult").innerHTML = ("You did great!");
            break;
        case myGrade >= 80:
            document.getElementById("myResult").innerHTML = ("You did good!");
            break;
        case myGrade >= 70:
            document.getElementById("myResult").innerHTML = ("You did okay.");
            break;
        case myGrade >= 60:
            document.getElementById("myResult").innerHTML = ("You passed... barely");
            break;
        case myGrade < 60:
            document.getElementById("myResult").innerHTML = ("You FAILED!");
            break;
        default:
            document.getElementById("myResult").innerHTML = `${myGrade} is not a grade.`;
    }
}

//     if (myGrade >= 95){
//             document.getElementById("myResult").innerHTML = ("You did great!");
//             console.log("you din great")
//     }
//     else if (myGrade >= 80) {
//             console.log("You did good!");
//     }
//     else if (myGrade >= 70) {
//         console.log("You did good!");
// }
//     else if (myGrade >= 60) {
//         console.log("You did good!");
//     }
//     else if (myGrade > 60) {
//         console.log("You did good!");
// }
//     else {
//         console.log(myGrade);
//     }
// }

// ======================= "AND, OR" LOGICAL OPERATORS =======================
// and, or - gives us the ability to check more than 1 condition concurrently
// &&  (and)   - both conditions must be true
// ||  (or)    - either condition can be true

/*
let temp = 15;
let sunny = true;

if (temp > 0 && temp < 30 && sunny) {
    console.log('The weather is good!');
}
else {
    console.log('The weather is bad');
}
*/


// ======================= "!" NOT LOGICAL OPERATORS =======================
// ! - typically used to reverse a condition's boolean value 
// true --> false
// false --> true

/*
let tempe = 15;
let sun = true;

if (!(tempe > 0)) {
    console.log("it's cold outside");
}
else {
    console.log("It's warm outside");
}

if (!sun) {
    console.log("It's cloudy outside");
}
else {
    console.log("It's sunny outside");
}
*/

// ======================= OTHER USEFULL OPERATORS ======================
// =    -   assignment operator
// ==   -   comparison operator (compare if values are equal)
// ===  -   strict equality operator (compare if values & datatype are equal)
// !=   -   inequality operator
// !==  -   strict inequality operator


// ======================= WHILE LOOP =======================
// while loop - repeat some code while some condition is true
//              potentially infinite

/*
let nameUser = "";

while(nameUser == "") {
    nameUser = window.prompt("Enter your name");
}

console.log("Hello", nameUser);
*/

//------------------ DO WHILE LOOP --------------------
// do while loop - do something, then check the condition, 
//                  repeat if condition is true
const whileBtn = document.getElementById("whileBtn");
const clearWhileBtn = document.getElementById("clearWhileBtn");
let loggedIn = true;
let user;
let pass;

whileBtn.onclick = function() {
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;

    do{

        if(user === "tim" && pass === "123"){
            loggedIn = true;
            window.alert("You are logged in!");
        }
        else{
            window.alert("Invalid credentials! Please try again");
        }
    }while(!loggedIn)
}

clearWhileBtn.onclick = function() {
    document.getElementById("user").value = null;
    document.getElementById("pass").value = null;
}


//------------------ FOR LOOP --------------------
// for loop - repeat some code a certain amount of times 
// for(the starting value; until it reach this value; behavior of the value;) {}

// for(let q = 1; q <=10; q += 1) {
//     console.log(q); <-- this will count starting from 1 to 10
//}


// ======================= NUMBER GUESSING GAME ======================
// const minNum = 1;
// const maxNum = 100;
// const gameTxt = document.getElementById("gameTxt");
// const guessBtn = document.getElementById("guessBtn");
// const againBtn = document.getElementById("againBtn");
// const theAnswer = document.getElementById("theAnswer");
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + 1);

// let attempts = 0;
// let myGuess;
// let guess;
// let tries = true;

// gameTxt.textContent = (`Guess a number between ${minNum} - ${maxNum}`);


// while(tries){


//     // guessBtn.onclick = function() {
//     //     if(isNaN(myGuess)){
//     //         window.alert("Please enter a valid number");
//     //     }
//     //     else if(myGuess < minNum || myGuess > maxNum){
//     //         window.alert("Please enter a valid number");
//     //     }
//     //     // else {
//         //     attempts++;
//         //     if(myGuess < answer) {
//         //         window.alert("Number too low, try again!");
//         //     }
//         //     else if(myGuess > answer) {
//         //         window.alert("Number too high, try again!");
//         //     }
//         //     else {
//         //         window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`);
//         //         tries = false;
//         //     }

//         }
//     }
// }
// console.log(answer);

const guessBtn = document.getElementById("guessBtn");
const againBtn = document.getElementById("againBtn");
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

let attempts = 0;
let guess;
let tries =true;

function game() {

    guessBtn.onclick = function() {
        while(tries) {

            guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
            guess = Number(guess);

            if(isNaN(guess)) {
                window.alert("Please enter a valid number");
                // tries = false;

            }
            else if(guess < minNum || guess > maxNum) {
                window.alert("Please enter a valid number");
            }
            else {
                attempts++;
                if(guess < answer) {
                    window.alert("A bit more, try again!");
                }
                else if(guess > answer) {
                    window.alert("A bit much, try again!");
                }
                else{
                    window.alert(`You got it!! The answer was ${answer}. It took you ${attempts} attempts`);
                    tries = false;
                }
            }
        }
    }
}

game();

// againBtn.onclick = function() {
//     game.repeat();
// }


// ======================= FUNCTIONS ======================
//function  -   a section of reusable code.
//              declare code once, use it whenever you want
//              call the function to execute the code
//              you can place an argument inside the function
//              functions have no direct relation to other functions

// inside the () are the parameters. **you can name any parameters
/*
function helloFunction(functionName, functionAge){
    console.log(`Hello ${functionName}!`);
    console.log(`You are ${functionAge} years old`);
}
//the value of the parameters should be same with the order of parameters
helloFunction("Tim", 21);
helloFunction("Mitsii", 20);

function add(x, y) {
    return x + y;
}

console.log(add(2, 3));

function oeNumber(number){
    return number % 2 === 0 ? true : false;
}
console.log(oeNumber(13));
*/


// ------- VARIABLE SCOPE ---------------------------------
// variable scope   -   where a variable is recognized and
//                      accessible (local vs global) 

function function1() {
    let x = 1;  //<-- this declaration is called local scope
    // console.log(x); // if the declaration is inside the function
                    // it is called local scope.
}
function function2() {
    let x = 2;
    // console.log(x);
}
function1(); //<-- this will show "1" in the console even with the same 
            //      value of x in 2 different functions. 
            //      It depends which function is called.


let x = 5; //<-- variables declared outside are called global

function function3() {
    // console.log(x);
}
function3(); /*<-- this will show "5" in the console not know the value
                    of the other x inside the other functions.
                    declaring a variable outside the function 
                    called a global scope. (normal declaration of variables)
                    if there are variables declared locally with the same variable declared globally it will look first into locally.
                    thus if there are no variables declarations locally it will use the variables globally.
            */


// ======================= TEMPERATURE CONVERSION ======================
const tempNumber = document.getElementById("tempNumber");
const toFahr = document.getElementById("toFahr");
const toCels = document.getElementById("toCels");
const tempResult = document.getElementById("tempResult");
let temp;


function convert(){

    if (toFahr.checked) {
        temp = Number(tempNumber.value);
        temp = temp * 9 / 5 + 32;
        tempResult.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCels.checked) {
        temp = Number(tempNumber.value);
        temp = (temp - 32) * (5/9);
        tempResult.textContent = temp.toFixed(1) + "°C";
    }
    else {
        tempResult.textContent = "Select a unit";
    }
}


// ======================= RANDOM PASSWORD GENERATOR ======================

function passBtn(callback) {
    var passWord = Number(document.getElementById("passLength").value);
    callback(passWord);

    // console.log(passwordLength);
}

console.log();


const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

display(passBtn);

const password = generatePassword(passwordLength, 
    includeLowercase, 
    includeUppercase, 
    includeNumbers, 
    includeSymbols);


function display (){
    console.log(passBtn);
}
    
    

function generatePassword(length, includeLowercase, includeUppercase,includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars =  "0123456789";
    const symbolChars = "!@#$%^&*()-+=_";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    for (let i = 0; i < length; i++ ) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;

}


console.log(`generated password: ${password}`);



// ======================= CALLBACK ======================
// callback     -   a function is passed as an argument to another function

/*
    used to handle asynchronus operations:
    1. Reading a file
    2. Network request
    3. Interacting with databases
*/

hello (goodbye);

function hello() {
    console.log("Hello!");
}

function goodbye() {
    console.log("Goodbye!");
<<<<<<< HEAD
}

//update the github
=======
}
>>>>>>> 95bebc3 (update)
