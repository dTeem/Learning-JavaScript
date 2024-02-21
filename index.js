// Strategy for JavaScript
// 1. Figure out what steps we need
// 2. Convert these steps into code

//Variable - a container that stores a value and behaves as if it were the value

//To use a variable you need to use:
//1. declaration    -   let x;
//2. assignment     -   x = 100;

// 3 Types of Variables declarations (let, const, var)
// let      - variables can be changed
// const    - variables cannot be changed
// var      - is not affected by scope limits

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

// object   -   groups multiple value together but object can also be a value
// to assign object literal use {} you can place 1 or more value pairs inside
// values inside the object are like using the 'let' declaration, you can 
// change the values of the properties.

// the object also works like an array

/*
let person = { 
    name: 'Tim', <- the 'name' & 'age' inside the object 'person' is 
                    called a property
    age: 21     <- the 'Tim' & '21' is called a value
                ** the symbol ',' is used to seperate the properties
};

---------------------------------
// 2 Types to change the object property - dot, bracket
//Dot notation (.variable)
person.name = 'Timmy';
console.log(person.name); <- this will show 'Timmy' in the console
                            since we changed the value of name.

//Bracket notation ['target property']
// let's us use the properties that don't work with dot notation
// ex. to this case if you have a property with a '-' on the name 
// person['birth-day'] = 9; <- this will add the property to the object
// if you try to use it with dot notation you will get an error.
// person.birth-day = 9; <- this will give you an error

person['name'] = 'Teem';

console.log(person.name);

-------------------------------

You can also add a new property to an existing object

person.gender = 'male';

console.log(person); <- this will show 
{name: 'Timmy', age: 21, gender: 'male'} in the console

------------------------------

You can also delete a property from the object

delete person.gender;
console.log(person); <- this will show {name: 'Timmy', age: 21}


ex. of an object being a value
(we use the example above)


let person2 = {
    name: 'Tim',
    age: 21,
    status: { //<- this is called Nested Object
        stars: 4.5,
        followers: '5M'
    },
    fun: function about() { //<- functions is also a type of value in object
        console.log('function inside object');
    }
}

console.log(person2.status.stars); //<- this will show the value of stars
person2.fun(); // <- this will run the function about() inside the object

*/

//----------- ARRAY ------------
// array    -   a variable like structure that can hold more than 1 value
//          -   another type of value in JavaScript

// square bracket are array literal [] <-- means empty array
// to access the elements inside the array use index numbering [0,1,2,..]
//array elements are dynamic and can change or add values

// let selectedColors = ['red', 'blue'];
// index value ['red' is 0, 'blue' is 1]
// selectedColors[2] = 'green'
//using this ^ will add green to the array of selectedColors variables which will show ['red','blue','green'] in the console.

// you can store any type of values inside the array
// array is a data structure to represent the list of items

//ex. [1, 'hello', true, { name: 'Tim' }, [7, 9]]
// Items that can be stored in an array:
//  - number
//  - string
//  - boolean
//  - object
//  - array

// console.log(typeof [1, 2]); <- this will show in the console object
// An array is a special type of object

// Since arrays is an object, it can also have properties and methods
/* ex.
    const myArray = [10, 20, 30];

    **To check if the element is an array use Array.isArray();
    console.log(Array.isArray([1, 2]));
    this will show true in the console

    console.log(myArray.length); <- this will show 3 in the console

    myArray.push(100); <-.push(); adds a value to the end of the array

    console.log(myArray); <- this will show [10, 20, 30, 100]

    myArray.splice(); <- this will remove an value from an array
    splice takes 2 values:
    1. Index we want to remove
    2. Number of values to remove starting from the index you declare in 1.

    ex. 
    const myArray = [10, 20, 30, 100];
    myArray.splice(0, 1);
    console.log(myArray); //<- will show [20, 30, 100]

    myArray.splice(1, 2);
    console.log(myArray); <- will show [10, 100]
*/


// console.log(selectedColors);
//to select a specific array value select it by index ex. (selectedColors[0]) which shows red in the console.


// let fruits = ["apple", "orange", "banana", "coconut", "strawberry"];

// console.log(fruits.reverse());
// sort()           -   to sort the array alphabetically 
// sort().reverse() -   to sort aplhabetically in reverse order

// for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
// }


// -------------- SPREAD OPERATOR ----------------------
// spread operator  -   allows an iterable as an array
//  [...]               or string to be expanded into separate
//                      elements (unpacks the elements)
//                      you can also assign it to a new variable
//                      after you use spread operator


// let numbers = [1, 2, 3, 4, 5];

//let maximum = Math.max(numbers); //<-- this will show as NaN in the console
//                                      since the numbers in the array are not
//                                      individually selected.

// let maximum = Math.max(...numbers); //<- this will show in the console the
//                                      largest number in the array

// console.log(maximum);

// let nameSpread = "Tim";
// let letterSpread = [...nameSpread]; //<- this will show ['T', 'i', 'm']
// let letterSpread = [...nameSpread].join("-"); //<- this will show T-i-m

// console.log(letterSpread);


// let vegetables = ["carrots", "celery", "potatoes"];

// let foods = [...fruits, ...vegetables];

// console.log(foods); // <- this will show all the values inside the array
// ['apple', 'banana', 'coconut', 'orange', 'strawberry', 'carrots', 'celery', 'potatoes']

// you can also add another value inside the new array
// let foods = [...fruits, ...vegetables, "eggs", "milk"];

// console.log(foods); // <- ['apple', 'banana', 'coconut', 'orange', 'strawberry', 'carrots', 'celery', 'potatoes', 'eggs', 'milk']


// -------------- REST PARAMETERS ----------------------
// rest parameters  -   allow a function work with a variable number of
// [...rest]            arguments by bundling them into an array


    // //ex.
    // function openFridge(...foods) {
    //     console.log(foods);
    // }

    // const food1 = "pizza";
    // const food2 = "burger";
    // const food3 = "hotdog";
    // const food4 = "sushi";
    // const food5 = "ramen";

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

// this calcInputs left to right but following the operator precedence
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


// let userName;

// document.getElementById("myButton").onclick = function() {
//     userName = document.getElementById("myText").value;
//     document.getElementById("myLabel").textContent = `Hello ${userName}!`;
// }



// --------- TYPE CONVERSION = change the data type of a value to another (strings, number, boolean)

/*

let x;
let y;
let z;

x = Number("7"); if a value is a 'word' it will show NaN (not a number)

y = String(7); if a string is added to a number it will add the number 
                along the string ex. y += 1; it will show 71 instead of 8

But if we use '- * /' operators JavaScript automatically converts if the string 
only contains a number.

ex. console.log('25' - 5); <- this will show in the console 20
because the JavaScript automatically converted the string into a number
This is called Type Coercion in JS

But if the '+' operator is used JS will automatically convert the number into a string if you are trying to add a string and a number.
ex. console.log('15' + 5); this will show in the console '155'

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


function radBtn() {
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

// ------------ Exercise Variables -------
/*
const nameVar = 'Tim';
const coffee = 5;
const bagels = 3;
const soup = 9;
let cost = '';
let tax = 0.1;
let total = '';

cost = coffee + (bagels * 2) + soup;
total = cost + (cost * tax);

console.log(`My name is ${nameVar}`);
console.log(`Cost of food: $${total}`);
*/


/////////////////////////////////////////
// ------------ CART QUANTITY -------------
// const showCart = document.getElementById("showCart");
// const addToCart = document.getElementById("addToCart");
// const addTwo = document.getElementById("addTwo");
// const addThree = document.getElementById("addThree");
// const addFour = document.getElementById("addFour");
// const addFive = document.getElementById("addFive");
// const removeToCartBtn = document.getElementById("removeToCartBtn");
// const subThree = document.getElementById("subThree");
// const subTwo = document.getElementById("subTwo");
// const resetCart = document.getElementById("resetCart");
// const myCart = document.getElementById("myCart");
// let cartValue = 0;

// showCart.onclick = function () {
//     myCart.textContent = `Cart Quantity: ${cartValue}`;
    
//     if(cartValue === 0) {
//         myCart.textContent = `No items your cart. Cart Quantity: ${cartValue}`;
//     }
//     else if(cartValue === 10) {
//         myCart.textContent = `The cart is full!!`;
//     }
// }

// function addToCart() {
//     if(cartValue + 1 > 10) {
//         myCart.textContent = `The cart is full!! Cart Quantity: ${cartValue}` ;
//         cartValue = 10;
//     }
//     else {
//         cartValue++;
//         myCart.textContent = `Cart Quantity: ${cartValue}`;
//     }
// }

// addTwo.onclick = function() {
//     if(cartValue === 9) {
//         cartValue++;
//         myCart.textContent = `The cart is full!! Cart Quantity: ${cartValue}`;
//     }
//     else if(cartValue === 10) {
//         cartValue = 10;
//         myCart.textContent = `The cart is full!! Cart Quantity: ${cartValue}`;
//     }
//     else {
//         cartValue += 2;
//         myCart.textContent = `Cart Quantity: ${cartValue}`;
//     }
// }

// function add3() {
//     if(cartValue + 3 > 10) {
//         myCart.textContent = `The cart is full!! Cart Quantity: ${cartValue}`;
//     }
//     else {
//         cartValue += 3;
//         myCart.textContent = `Cart Quantity: ${cartValue}`;
//     }
// }

// addFour.onclick = function() {
//     if(cartValue >= 7) {
//         cartValue += 3;
//         cartValue = 10;
//         myCart.textContent = `The cart is full!! Cart Quantity: ${cartValue}`;
//     }
//     else if(cartValue === 10) {
//         cartValue = 10;
//         myCart.textContent = `The cart is full!! Cart Quantity: ${cartValue}`;
//     }
//     else {
//         cartValue += 4;
//         myCart.textContent = `Cart Quantity: ${cartValue}`;
//     }
// }

// addFive.onclick = function() {
//     if(cartValue >= 6) {
//         cartValue += 4;
//         cartValue = 10;
//         myCart.textContent = `The cart is full!! Cart Quantity: ${cartValue}`;
//     }
//     else if(cartValue === 10) {
//         cartValue = 10;
//         myCart.textContent = `The cart is full!! Cart Quantity: ${cartValue}`;
//     }
//     else {
//         cartValue += 5;
//         myCart.textContent = `Cart Quantity: ${cartValue}`;
//     }
// }

// removeToCartBtn.onclick = function() {
//     if(cartValue === 0) {
//         myCart.textContent = `No items your cart. Cart Quantity: ${cartValue}`;
//     }
//     else {
//         cartValue--;
//         myCart.textContent = `Cart Quantity: ${cartValue}`;
//     }
// }

// subTwo.onclick = function() {
//     if(cartValue === 0) {
//         myCart.textContent = `No items your cart. Cart Quantity: ${cartValue}`;
//     }
//     else if(cartValue <= 1) {
//         cartValue = 0;
//         myCart.textContent = `No items your cart. Cart Quantity: ${cartValue}`;
//     }
//     else {
//         cartValue -= 2;
//         myCart.textContent = `Cart Quantity: ${cartValue}`;
//     }
// }

// subThree.onclick = function() {
//     if(cartValue === 0) {
//         myCart.textContent = `No items your cart. Cart Quantity: ${cartValue}`;
//     }
//     else if(cartValue <= 2) {
//         cartValue = 0;
//         myCart.textContent = `No items your cart. Cart Quantity: ${cartValue}`;
//     }
//     else {
//         cartValue -= 3;
//         myCart.textContent = `Cart Quantity: ${cartValue}`;
//     }
// }

// resetCart.onclick = function() {
//     cartValue = 0;
//     myCart.textContent = `No items your cart. Cart Quantity: ${cartValue}`;
// }

// function showCartResult() {

//     console.log(cartValue);
// }
// the program commented above is the long way to do the Cart Quantity system

const myCart = document.getElementById("myCart");
const myCartAlert = document.getElementById("myCartAlert");
let cartQuantity = JSON.parse(localStorage.getItem('cart')) || 0;

myCart.textContent = `${cartQuantity}`;

function addToCart() {
    const itemQuantity = Number(document.getElementById("itemQuantity").value);

    updateCart(itemQuantity);
}

function removeToCartBtn() {
    updateCart(-1);
}

function resetCart() {
    cartQuantity = 0;
    myCart.textContent = `${cartQuantity}`;
    myCartAlert.textContent = 'Cart was reset';
    localStorage.removeItem('cart');
}

function updateCart(change) {

    if (cartQuantity + change > 10) {
        myCart.textContent = cartQuantity;
        myCartAlert.textContent = 'Cart is full';
        if (cartQuantity === 9) {
            cartQuantity++;
            myCart.textContent = cartQuantity;
        }
        else if (cartQuantity === 8) {
            cartQuantity += 2;
            myCart.textContent = cartQuantity;
        }
        else if (cartQuantity === 7) {
            cartQuantity += 3;
            myCart.textContent = cartQuantity;
        }
        else if (cartQuantity === 6) {
            cartQuantity += 4;
            myCart.textContent = cartQuantity;
        }
    }

    else if (cartQuantity + change < 0) {
        cartQuantity--;
        cartQuantity = 0;
        myCart.textContent = `${cartQuantity}`;
        myCartAlert.textContent = 'You have no items in the cart';
    }
    else {
        cartQuantity += change;
        myCart.textContent = `${cartQuantity}`;
        myCartAlert.textContent = null;
    }
    localStorage.setItem('cart', JSON.stringify(cartQuantity));
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

    if(myAge >= 60) {
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

// ------------------ CALCULATOR ---------------------

const calcDisplay = document.getElementById('jsCalcDis');
// let calcInput =  '';
let calcInput = JSON.parse(localStorage.getItem('calcInput')) || '';

function btn7() {
    calcInput += '7';
    calcDisplay.textContent = calcInput;
}

function btn8() {
    calcInput += '8';
    calcDisplay.textContent = calcInput;
}

function btn9() {
    calcInput += '9';
    calcDisplay.textContent = calcInput;
}

function btn4() {
    calcInput += '4';
    calcDisplay.textContent = calcInput;
}

function btn5() {
    calcInput += '5';
    calcDisplay.textContent = calcInput;
}

function btn6() {
    calcInput += '6';
    calcDisplay.textContent = calcInput;
}

function btn1() {
    calcInput += '1';
    calcDisplay.textContent = calcInput;
}

function btn2() {
    calcInput += '2';
    calcDisplay.textContent = calcInput;
}

function btn3() {
    calcInput += '3';
    calcDisplay.textContent = calcInput;
}

function btn0() {
    calcInput += '0';
    calcDisplay.textContent = calcInput;
}

function multBtn() {
    calcInput += ' x ';
    calcDisplay.textContent = calcInput;
}

function subBtn() {
    calcInput += ' - ';
    calcDisplay.textContent = calcInput;
}

function addBtn() {
    calcInput += ' + ';
    calcDisplay.textContent = calcInput;
}

function deciBtn() {
    calcInput += '.';
    calcDisplay.textContent = calcInput;
}

function posNegBtn() {
    calcInput += '-';
    calcDisplay.textContent = calcInput;
}

function percentBtn() {
    calcInput += '%';
    calcDisplay.textContent = calcInput;
}

function divideBtn() {
    calcInput += ' / ';
    calcDisplay.textContent = calcInput;
}

function clacACBtn() {
    calcInput = '';
    localStorage.setItem('calcInput', JSON.stringify(calcInput));
    calcDisplay.textContent = calcInput;
}

function equalBtn() {
    calcInput = eval(calcInput);
    localStorage.setItem('calcInput', JSON.stringify(calcInput));
    calcDisplay.textContent = calcInput;
}

calcDisplay.textContent = calcInput;


/*
calc algo
1. type input number
2. display input to calc display
3. calcInput when = is pressed
    - when = is pressed check for numbers and operators
    - calcInput the values inside the calc display


*/

// else if(calcInput === ) {
//     acBtn.textContent = 'AC';
// }

// console.log(typeof calcInput, calcInput);



//---------- TRUE & FALSE VALUES --------------
// false values are -   false, 0, '', Nan, undefined, null   
// true values are  -   any value that is not on the false values


////////////////////// TERNARY OPERATOR /////////////////////////
// ternary operator -   a shortcut to if{} and else{} statements
//  ? true : false;     helps to assign a variable based on a condition
//                      condition ? codeIfTrue : codeIfFalse;
//                      you can also store the ternary inside a variable
// ex. const result = 0 ? 'true' : 'false';


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
// &&  (and)   - both conditions must be true to proceed (guard operator)
// ||  (or)    - either condition can be true to proceed (default operator)

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

// const hour = 18;
// const name2 = "Tim";

// if(hour >= 6 && hour < 12) {
//     console.log(`Good morning ${name2}!`);
// }
// else if(hour >= 12 && hour < 17) {
//     console.log(`Good afternoon ${name2}!`);
// }
// else if(hour >= 17 && hour <= 24) {
//     console.log(`Good night ${name2}!`);
// }
// else {
//     console.log(`Go back to sleep ${name2}!`);
// }

////////////////////////////////////////////////

// const agePark = 6;
// const isHoliday = false;

// if(isHoliday === false && agePark <= 6 || agePark >= 65) {
//     console.log(`Discount`);
// }
// else if(agePark > 6 || agePark < 65) {
//     console.log(`No Discount`);
// }


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

// You can also place a value of the parameters inside the ()
// same with how you declare a variable with a value

// the 0.1 declared value becomes the default value for the parameter taxPercent

// ex.  function calculateTax(cost, taxPercent = 0.1) {
//      console.log(cost * taxPercent);
//      }
//      calculateTax(2000, 0.2); <-- this will show 400
//      calculateTax(5000);     <-- and 500 in the console

*/


// ------- VARIABLE SCOPE ---------------------------------
// variable scope   -   where a variable is recognized and
//                      accessible (local vs global) 
//                  -   it helps us avoid renaming conflicts


//Global scope      -   variables declared outside of a blocks
//Local scope       -   variables declared inside of a blocks
//**function{}      -   are called blocks

// function function1() {
    // let x = 1;  //<-- this declaration is called local scope
    // console.log(x); // if the declaration is inside the function
                    // it is called local scope.
// }
// function function2() {
//     let x = 2;
    // console.log(x);
// }
// function1(); //<-- this will show "1" in the console even with the same 
            //      value of x in 2 different functions. 
            //      It depends which function is called.


// let x = 5; //<-- variables declared outside are called global

// function function3() {
//     // console.log(x);
// }
/* function3(); <-- this will show "5" in the console not know the value
                    of the other x inside the other functions.
                    declaring a variable outside the function 
                    called a global scope. (normal declaration of variables)
                    if there are variables declared locally with the same variable declared globally it will look first into locally.
                    thus if there are no variables declarations locally it will use the variables globally.
                    */

/* Exercise - Functions
greet();

function greet(name) {
    
    if(!name) {
        console.log(`Hi there!`);
    }
    else{
        console.log(`Hello ${name}!`);
    }
} 


function favNum(num) {
    return num;
}

let myFav = favNum(7);

console.log(`My fav number is ${myFav}`);
*/

// -------- EXERCISE TEMP CONVERTER -----------
/*
function converToFahr(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertToCels(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function convertTemp(degrees, unit) {
    if(unit === 'C') {
        const result = converToFahr(degrees);
        return `${result}F`;
    }
    else if(unit === 'F') {
        const result = convertToCels(degrees);
        return `${result}C`;
    }
}

console.log(convertTemp(25, 'C'));
console.log(convertTemp(86, 'F'));
*/


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

//////////// COIN-FLIP GAME v1 //////////////////
// scoreCF.textContent = `Score: W: ${cfScore.wins}, L: ${cfScore.losses}`;

// function play() {
//     const guess = document.getElementById("guessCoin").value;
//     const flipValue = Math.random();
//     const coinResult = document.getElementById("coinResult");
//     const gameResult = document.getElementById("flipGameResult");

//     coinResult.textContent = flipValue <= 0.5 ? "HEADS" : "TAILS";

//     guess === coinResult.textContent ? gameResult.textContent = 'You win!' : gameResult.textContent = 'You lose!';

//     // if(flipValue <= 0.5) {
//     //     coinResult.textContent = 'HEADS';
//     //     console.log(flipValue);
//     // }
//     // else {
//     //     coinResult.textContent = 'TAILS';
//     //     console.log(flipValue);
//     // }
// }


//////////// COIN-FLIP GAME v2 //////////////////
const scoreCF = document.getElementById("scoreCF");
const coinResult = document.getElementById("coinResult");
const gameResult = document.getElementById("flipGameResult");
let cfScore = JSON.parse(localStorage.getItem('cfScore')) || {
    wins: 0,
    losses: 0
};

scoreCF.textContent = `Score: W: ${cfScore.wins}, L: ${cfScore.losses}`;

function play() {
    const guess = document.getElementById("guessCoin").value;

    coinResult.textContent = cfcalcInputr();

    guess === coinResult.textContent ? gameResult.textContent = 'You win!' : gameResult.textContent = 'You lose!';

    console.log(guess);

    if(gameResult.textContent === 'You win!') {
        cfScore.wins++;
    }
    else if (gameResult.textContent === 'You lose!') {
        cfScore.losses++;
    }

    localStorage.setItem('cfScore', JSON.stringify(cfScore));

    scoreCF.textContent = `Score: W: ${cfScore.wins}, L: ${cfScore.losses}`;
}

function cfcalcInputr() {
    const flipValue = Math.random();
    let cfcalcInputrMove = flipValue <= 0.5 ? "HEADS" : "TAILS";
    return cfcalcInputrMove;
}

function resetCFScore() {
    cfScore.wins = 0;
    cfScore.losses = 0;

    localStorage.removeItem('cfScore');

    coinResult.textContent = null;
    gameResult.textContent = null;
    scoreCF.textContent = `Score: W: ${cfScore.wins}, L: ${cfScore.losses}`;
}


// ======================= RANDOM PASSWORD GENERATOR ======================

// const passwordLength = function passBtn(passWord) {
//     passWord = document.getElementById("passLength").value;
//     passWord();
// };
let passWord1 = document.getElementById("passWord1");
let passWord2 = document.getElementById("passWord2");
let passWord3 = document.getElementById("passWord3");
let passWord4 = document.getElementById("passWord4");
let passResultText = document.getElementById("passResultText");
let passwordLength = '';
let includeLowercase;
let includeUppercase;
let includeNumbers;
let includeSymbols;

function passBtn() {
    passwordLength = document.getElementById("passLength").value;
    const passwordType = document.querySelector('#passwordType');
    let passType = passwordType.value;

    if(passType === "numeric") {
        includeLowercase = false;
        includeUppercase = false;
        includeNumbers = true;
        includeSymbols = false;
    }
    else if(passType === 'letters') {
        includeLowercase = true;
        includeUppercase = true;
        includeNumbers = false;
        includeSymbols = false;
    }
    else if (passType === 'mix') {
        includeLowercase = true;
        includeUppercase = true;
        includeNumbers = true;
        includeSymbols = false;
    }
    else if (passType === 'mix-special') {
        includeLowercase = true;
        includeUppercase = true;
        includeNumbers = true;
        includeSymbols = true;
    }
    else {
        passResultText.textContent = `Please select type of password`
    }

    const password1 = generatePassword(
        passwordLength, 
        includeLowercase, 
        includeUppercase, 
        includeNumbers, 
        includeSymbols);

    const password2 = generatePassword(
        passwordLength, 
        includeLowercase, 
        includeUppercase, 
        includeNumbers, 
        includeSymbols);    

    const password3 = generatePassword(
        passwordLength, 
        includeLowercase, 
        includeUppercase, 
        includeNumbers, 
        includeSymbols);

    const password4 = generatePassword(
        passwordLength, 
        includeLowercase, 
        includeUppercase, 
        includeNumbers, 
        includeSymbols);


    function generatePassword(length, includeLowercase, includeUppercase,includeNumbers, includeSymbols) {

        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars =  "0123456789";
        const symbolChars = "!@#$%^&*()-+=_";

        let allowedChars = "";
        let password1 = "";
        let password2 = "";
        let password3 = "";
        let password4 = "";

        allowedChars += includeLowercase ? lowercaseChars : "";
        allowedChars += includeUppercase ? uppercaseChars : "";
        allowedChars += includeNumbers ? numberChars : "";
        allowedChars += includeSymbols ? symbolChars : "";

        for (let i = 0; i < length; i++ ) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password1 += allowedChars[randomIndex];
            password2 += allowedChars[randomIndex];
            password3 += allowedChars[randomIndex];
            password4 += allowedChars[randomIndex];
        }

        return password1;
    }

    passResultText.textContent = `Generated Passwords:`;
    passWord1.textContent = password1;
    passWord2.textContent = password2;
    passWord3.textContent = password3;
    passWord4.textContent = password4;

}

function resetPassBtn() {
    passResultText.textContent = null;
    passWord1.textContent = null;
    passWord2.textContent = null;
    passWord3.textContent = null;
    passWord4.textContent = null;
}

// ======================= CALLBACK ======================
// callback     -   a function is passed as an argument to another function

/*
    used to handle asynchronus operations:
    1. Reading a file
    2. Network request
    3. Interacting with databases
*/

// hello (goodbye); <- this execute the hello function 1st then the goodbye

// function hello(callback) {
//     console.log("Hello!");
//     callback();
// }

// function goodbye() {
//     console.log("Goodbye!");
// }

// function greet(cb, x, y) {
//     let result = x + y;
//     cb(result);
// }

// function callback(result) {
//     console.log(result);
// }

// greet(callback, 4, 3);

// function showCallFunc(fn, value) {
//     value = 20;
//     fn(value);
// }

// showCallFunc(function(fn) {
//     console.log(fn);
// });

 
// ======================= JSON ========================
// JSON     -   JavaScript Object Notation
//              a syntax similar to JavaScript Object

// JSON syntax is similar to JS Object but with less features
// But the real difference between the 2 is that JSON is more universal
// it can be read by other programming languages

// We use JSON when:
//  - we send data between calcInputrs
//  - we store data

// Built-in Objects:
//  - JSON
//  - localStorage

// Built-in JSON Object:
// Convert: JavaScript Object -> JSON   -   JSON.stringify()
// Convert: JSON -> JavaScript Object   -   JSON.parse()

//Built-in localStorage Object:
// localStorage - only support strings

// to use this we need the built-in functions for localStorage:
// .setItem();      - to save a value for an item to localStorage
// .getItem();      - to get the item from localStorage
// .removeItem();   - to remove the item from localStorage
// localStorage.setItem(); or localStorage.getItem();

// To use the .setItem(); we need 2 strings (like declaring a variable)
//ex. localStorage.setItem('message', 'hello');
// The 1st string 'message' is the name of the variable
// the 2nd string 'hello' is the value of the variable

// To get the value of an item from the localStorage we use .getItem();
//ex. console.log(localStorage.getItem('message'));
// this will show the value of the message which is 'hello'



// **This is an example from above using the JavaScript Object
// let person2 = {
//     name: 'Tim',
//     age: 21,
//     status: { //<- this is called Nested Object
//         stars: 4.5,
//         followers: '5M'
//     },
//     fun: function about() { 
//         console.log('function inside object');
//     }
// }

// console.log(person2.status.stars); 
// person2.fun(); 


// console.log(JSON.stringify(person2)); // <- this will show 
// {"name":"Tim","age":21,"status":{"stars":4.5,"followers":"5M"}}

// But as you can see the 'fun' property is not included in the converted
// object, because the JSON does not support function.
// the object from JS is now converted to a string

// JSON syntax only accepts "" 

// To convert: JSON -> Javascript Object
// use JSON.parse()

// console.log(JSON.parse(JSON.stringify(person2))); 
// or you can place the JSON to a variable to be read easily.

// const jsonString = JSON.stringify(person2);
// console.log(JSON.parse(jsonString)); // this will show 
//{name: 'Tim', age: 21, status: {…}} in the console



// ======================= ROCK PAPER SCISSORS GAME ======================
//Math.random()     -   always generates a random number between 0 and 1
//For this game you can divide the values between 0 and 1 into 3 equal parts
//to place it to different answers like rock, paper, scissors.
//ex. 0 -> 1/3 = rock
//  1/3 -> 2/3 = paper
//  2/3 -> 1   = scissors
function rpsGame() {
    let options = 'statubar=no, height=800, width=500';
    window.open('RPSGame.html', 'RPS Game', options);
}
/*

const resultRPS = document.getElementById("resultRPS");
const movesRPS = document.getElementById("movesRPS");
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

/* 
to make a clean and short code you can use the one above with the same
results as this commented code below

if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
*

rpsScore();

function rock() {
    playGame('rock');
}

function paper() {
    playGame('paper');
}

function scissors() {
    playGame('scissors');
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if(playerMove === 'scissors') {
        if(computerMove === 'rock') {
            result = 'You lose! Try again';
        }
        else if(computerMove === 'paper') {
            result = "You Win!!";
        }
        else if(computerMove === 'scissors') {
            result = "It's a tie!";
        }
    }
    else if(playerMove === 'paper') {
        if(computerMove === 'rock') {
            result = 'You Win!!';
        }
        else if(computerMove === 'paper') {
            result = "It's a tie!";
        }
        else if(computerMove === 'scissors') {
            result = 'You lose! Try again';
        }
    }
    else if(playerMove === 'rock') {
        if(computerMove === 'rock') {
            result = "It's a tie!";
        }
        else if(computerMove === 'paper') {
            result = 'You lose! Try again';
        }
        else if(computerMove === 'scissors') {
            result = 'You Win!!';
        }
    }

    if (result === 'You Win!!') {
        score.wins += 1;
    }
    else if (result === 'You lose! Try again') {
        score.losses += 1;
    }
    else if (result === "It's a tie!") {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    movesRPS.textContent = result;
    resultRPS.textContent = `You: ${playerMove} = Computer: ${computerMove}.`;

    rpsScore();
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}

function resetRPSBtn() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.removeItem('score');

    movesRPS.textContent = null;
    resultRPS.textContent = null;
    rpsScore();
}

function rpsScore() {
    const scoreRPS = document.getElementById("scoreRPS");

    scoreRPS.textContent = `Wins: ${score.wins}, Losses: ${score.losses},  Ties: ${score.ties}`;
}
*/

//---------- TRUE & FALSE VALUES --------------
// false values are -   false, 0, '', Nan, undefined, null   
// true values are  -   any value that is not on the false values

// NULL VS UNDEFINED

// null         -   if we intentionally want something to be empty
// undefined    -   is a default value or no value

/* ex.
function func(parameter = 'default') {
    console.log(parameter);
}

func();             ->  'default'
func(undefined);    ->  'default'

func(null);         ->  null
*/


// ----------- OBJECTS -----------

/* ex. 
let person2 = {
    name: 'Tim', <- 'Tim' is the property of the object
    age: 21,
    status: { //<- this is Nested Object - property inside a property
        stars: 4.5,
        followers: '5M'
    },
    fun: function about() { //<- functions is also a type of value in object
        console.log('function inside object');
    }

}
*/

// Objects can also have methods
// Other values also have properties and methods

/* ex.

console.log('hello'.length); <- the string 'hello' can have a property
                                .length property tells us how many characters
                                in the string
                                it will show in the console '5'

console.log('hello'.toUpperCase()); <- the string can also have a method
                                    .toUpperCase() method makes all the characters uppercase.
                                    this will show in the console 'HELLO'

In the ex. the value can also have properties and methods 

Why does a string can have a property or method?
- JavaScript has a special feature called Auto-boxing

Auto-boxing
- It automatically wraps the value in a special object

Auto-boxing only works on:
 -  strings
 -  numbers
 -  booleans

 it does not work on:
 -  null
 -  undefined

Important details on Object
-   objects are references
-   we can't compare objects directly

ex.
const object1 = {
    message: 'hello'
};

const object2 = object1; <- this only gives the reference of object1

object1.message = 'Good Job!';

console.log(object1); <- this will show in the console {message: 'Good Job!'}

Even if we declared the object1 as a const we can still change the value inside the object. As it is just referencing to the value of the object not to the object itself.

console.log(object2); <- this will also show {message: 'Good Job!'}
even if we only made the change to object1 because it is getting the reference from object1.


const object3 = {
    message: 'Good Job!'
};

console.log(object3 === object1); <- this will show in the console 'false'
even though we declared them with the same value.
Because the objects are just a references of the calcInputr's memory
it compares the references, not the values inside

ex. (at the top we made the object2 = object1)
console.log(object2 === object1); <- this will show in the console 'true'
since both object1 & object2 refers to the same refrence not the value thats why object3 show false even it has the same value of the 2.

Shortcuts for Objects
 -  destructuring
 -  shorthand Property
 -  shorthand Method


const object4 = {
    msgObj: 'Good Job!',
    price: 777
};

// const msgObj = object4.msgObj;

// This is the same as the declaration above
// const {msgObj} = object4; 
// This shortcut is called destructuring
// this took out the property out of the object4 and place it in the 
// variable named msgObj.

const {msgObj, price} = object4;
// This is how you decalare multiple variable using destructuring

console.log(msgObj); // <- this will show Good Job!

console.log(object4); //<- this will show {msgObj: 'Good Job!', price: 777}

console.log(price); // <- this will show 777


const object5 = {
    //message: msgObj
    // there is another shortcut for shorthand property
    // if you are using the same property name you can just type it like this
    msgObj, // <- this will take to value of the same property name

    // method: function function1() { <- this code is the same as the code below
    //     console.log('method'); 
    // }
    method() { // <- this is the shorthand method
        console.log('method');
    }
};

console.log(object5); // this will show {message: 'Good Job!'}
object5.method(); // this will show method in the console

*/

// ------- Exercises - Objects ----------
/*
const shop = {
    basketball: 2095
};

shop['delivery-time'] = '3 days';

console.log(`Basketball: ${shop.basketball + 500}c`);

console.log(shop);



const product1 = {
    name: 'basketball',
    price: 2095
};

const product2 = {
    name: 'shoes',
    price: 3050
};

function comparePrice(product1, product2) {
    if(product1.price < product2.price) {
        return product1;
    }
    else {
        return product2;
    }
}

console.log(comparePrice(product1, product2));

//-----------------------------

const item1 = {
    name: 'mouse',
    price: 20
};

const item2 = {
    name: 'mouse',
    price: 20
};

const item3 = item1;

function isSameProduct(item1, item2) {
    if(
        item1.name === item2.name &&
        item1.price === item2.price
    ) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isSameProduct(item1, item2));

//-----------------------------

let greet = 'Good Morning';

console.log(greet.toLowerCase());

console.log(greet.repeat(2));

*/

// ================== DOCUMENT OBJECT MODEL (DOM) ======================
// DOM  -   another built-in object (document object)
// the document object represents / models the webpage
// the DOM combines JavaScript & HTML together and gives JavaScript control
// of the webpage

// Syntax Rules
// works the same like any other objects
// it also contains properties
// it is link to the webpage
// document also has methods ex. document.querySelector('button');
// if get a value input from HTML using DOM it will be converted to a string


// ex. .body or .title
// document.body.innerHTML = 'hello'; <- this replace everything in the webpage 
//                                       to a 'hello' string value

// document is an object that represents the webpage

// the innerHTML property controls all the HTML inside the body
// we can change the HTML using javascript and HTML codes
// innerHTML selects all the characters including spaces of the HTML element

// document.body.innerText <- selects all the text without spaces in the element

// ex. document.body.innerHTML = '<button>Good job!</button>';
// this will replace all the webpage content with a button

// document.title = 'Learning JavaScript'; // this changes the title of the webpage

// console.log(document.title); 
// the title property is used to change the title of HTML

// console.log(document.body);
// the body property is used to change or modify the contents inside body tag

// When the HTML element is inside the JavaScript it is converted into a 
// JavaScript object

// --- METHODS of DOM ---
// method   -   function saved inside an object

// document.querySelector() -   lets us get any element from the page and
//                              put it inside Javascript

// document.querySelector('button'); < this selects the 1st button from the HTML
// any HTML element inside a JavaScript becomes a JS object
// every HTML element has a property .innerHTML


/*
ex.
<body>

<button>hello</button>

</body>

console.log(document.querySelector('button').innerHTML);
this will show the html content of the button which is hello

document.querySelector('button').innerHTML = 'changed';
this will show in the webpage that the HTML is changed
the button text will show 'changed'

*/

// To select a specific HTML element using .querySelector()
// we need a class atribute from the HTML

/*
ex.
<body>

<button>First Button</button>
<button class="js-btn2">Second Button</button>
**note it is a great practice to place a 'js-' when creating a class that is used by JS to easily determine that JS is using that element

</body>

console.log(document.querySelector('.js-btn2'));
this will show in the console that querySelector has specifically looked for 
a button with a class of '.js-btn2'

HTML elements becomes JavaScript objects, and objects in JS are values

ex.
const btnElement = document.querySelector('.js-btn2');
** it's best practice to place 'Element' for creating a variable from HTML

clicks, keydowns are called events

Types of Event Listeners:
 - onclick          = click
 - onkeydown        = key press
 - onscroll         = scrolling
 - onmouseenter     = hovering over
 - onmouseleave     = stop hovering over

 and many many more....
 check this site for ref
 https://www.w3schools.com/jsref/dom_obj_event.asp

 in this event listeners there is a special JS object for it called 'event'
 ex.
 onkeypress="console.log(event);" <- this will show all of the events after you pressed a button and can determine the details and which key you pressed

 onkeypress="console.log('typing'); <- this will show in the console the 
 string 'typing' if you press any key on the keyboard.
 ** can be used for real time chat app

*/

//----------------------

//Window is a built-in object that represents the browser
// we dont actually need to type it since JavaScript automatically adds it

/*
ex.
window.document
window.console.log
window.alert
*/

//----------------------
// .classList               -   gives us the control of the class attribute
// .classList.add();        -   adds a new class to the HTML element
// .classList.remove();     -   removes a class from the HTML element
// .classList.contains();   -   checks if the element has a class


// --- PROJECTS FOR DOM ---

// YouTube Subscribe Button

function jsSubBtn() {
    subScribe();
}

function subScribe() {
    const subElemBtn = document.querySelector('.js-SubBtn');
    // subElemBtn.innerText === 'Subscribe' ? 'Subscribed' : 'Subscribe';

    if(subElemBtn.innerText === 'Subscribe') {
        subElemBtn.innerHTML = 'Subscribed';
        subElemBtn.classList.add('is-subscribed');
    }
    else {
        subElemBtn.innerText = 'Subscribe';
        subElemBtn.classList.remove('is-subscribed');
    }
}

//----------------------
// Amazon Shipping Calculator

const resultElem = document.querySelector('.js-totalResult');
const inputElem = document.getElementById('jsInput');
let shipping = 10;


function amazonShip() {
    let cost = Number(inputElem.value);
    
    if(cost < 40 && cost > 0) {
        console.log(typeof cost, cost);
        cost = cost + shipping;
        resultElem.innerHTML = `$${cost}`;
    }
    else {
        if(cost < 0) {
            resultElem.innerHTML = 'Error: cost cannot be less than $0'; 
        }
        else {
            resultElem.innerHTML = `$${cost}`; 
        }
    }
}

function clearAmazonShip() {
    inputElem.value = null; 
    resultElem.innerHTML = null;
}

function amazonInputEnterKey(event) {

    if(event.key === 'Enter') {
        amazonShip();
    }
}

//----------------------
// Event onkeyup

function jsEventKeyUp() {
    const jsInput = document.querySelector('.jsInput');
    const onKeyDisp = document.getElementById("onKeyDisplay");

    onKeyDisp.textContent = jsInput.value;
    // onKeyDisp.textContent = 'typing...';
}

//----------------------
// Multi-choice Buttons

function tGaming() {
    isToggled('.tbtn-gaming');
}

function tMusic() {
    isToggled('.tbtn-music');
}

function tTech() {
    isToggled('.tbtn-tech');
}

function isToggled(toggled) {
    const tBtn = document.querySelector(toggled);

    if(!tBtn.classList.contains('is-toggled')) {
        tBtn.classList.add('is-toggled');
    }
    else {
        tBtn.classList.remove('is-toggled');
    }
}

//----------------------
// Single-choice Buttons

function warrior() {
    singleToggle('.js-warrior-btn');
}

function archer() {
    singleToggle('.js-archer-btn');
}

function mage() {
    singleToggle('.js-mage-btn');
}

function singleToggle(choice) {
    const singleBtn = document.querySelector(choice);

    if(!singleBtn.classList.contains('is-picked')) {
        pickedOption();
        singleBtn.classList.add('is-picked');
    }
    else {
        singleBtn.classList.remove('is-picked');
    }
}

function pickedOption() {
    const picked = document.querySelector('.is-picked');

    if(picked) {
        picked.classList.remove('is-picked');
    }
}


//======================= WHILE LOOP =======================
// while loop - repeat some code while some condition is true
//              potentially infinite

/*
let nameUser = "";

while(nameUser == "") {
    nameUser = window.prompt("Enter your name");
}

console.log("Hello", nameUser);

let i = 1; <- this is called loop variable

while(i <= 5) { <- the elements inside () are called loop condition
    i = i + 1; <- this is called loop body
    console.log(i); this will show in the console that 'i' will increment by 1
    until it reach it's value to 5 and then stop the loop.
    1
    2
    3
    4
    5
}
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

// this needed 3 pieces of code:
// 1. loop variable
// 2. loop condition
// 3. increment step

// for(the starting value; until it reach this value; behavior of the value;) {}

// This example is a standard loop..
// for(let q = 1; q <=10; q += 1) {
//     console.log(q); <-- this will count starting from 1 to 10
// }


// This example is a non-standard loop..
/* let randomNumber = 0;

    while(randomNumber < 0.5) {
        randomNumber = Math.random();
    }
    console.log(randomNumber);
*/

// While VS For Loop
// For loop     -   is better used for standard loop
// While loop   -   is better used for non-standard loop

//-------------------------
// Looping through an array
//  1. Go through each value of an array 1 by 1
//  2. Do something with each value
/*
const todoList = [
    'make dinner', 
    'wash dished', 
    'watch youtube'
];

for(let i = 0; i < todoList.length; i++) {
    const value = todoList[i];
    console.log(value);
}
*/

// Accumulator Pattern  -   to combine looping through an array

// To use Accumulator Pattern:
//  1. Create a variable to store the result
//  2. Loop through the array and update the result

/* Example 1 
    What if we want to calculate the total of values of an array?
    we have an array of numbers: [1, 2, 3]

    
    const nums = [1, 2, 4];
    let total = 0;
    
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        total += num; // += also a shortcut for total = total + num;
    }
    console.log(total); <- this will show the sum of values inside the array
*/

/* Example 1 Code explanation:
(1st loop)
i = 0
nums[0] = 1 <- value of index 0 from nums
num = 1 
total = 0 <- first value

total = total + num
total = 0 + 1
total = 1

Then i++
i = 1

(2nd loop)
i = 1 <- value from 1st loop
nums[1] = 2 <- value of index 1 from nums
num = 2
total = 1 <- value from 1st loop

total = total + num
total = 1 + 2
total = 3

than i++
i = 2

(3rd loop)
i = 2 <- value from 2nd loop
nums[2] = 4 <- value of index from nums
num = 4
total = 3

total = total + num
total = 3 + 4
total = 7

i meets the condition < 3 <- length of nums index
stops the loop

*/

/* Example 2
    Create a copy of the array with each number doubled
    const numsValue = [1, 3, 5];
    const numsDoubled = [];
    
    for(let i = 0; i < numsValue.length; i++) {
        const num = numsValue[i];
        numsDoubled.push(num * 2);
    }
    console.log(numsDoubled); <- this will show in the console
        (3) [2, 6, 10]
        0: 2
        1: 6
        2: 10
        length: 3

*/

//--------------------------------
// --- PROJECTS FOR ARRAY ---

// TODO LIST V1
// const toDoArray = [];

// renderTodoList();

// function renderTodoList() {
//     let todoListHTML = '';
    
//     for(let i = 0; i < toDoArray.length; i++) {
//         const todo = toDoArray[i];
//         const html = `<p>${todo}</p>`;
    
//         todoListHTML += html;
//     }
//     document.querySelector('.js-todo-list').innerHTML = todoListHTML;
// }

// function toDoBtn() {
//     const toDoInput = document.getElementById("jsToDoIn");
//     const input = toDoInput.value;
    
//     toDoArray.push(input);

//     toDoInput.value = null;

//     renderTodoList();
// }

//--------------------------------

const alNums = [10, 20, 30];
let lastValue = '';

alNums[2] = 99;

// console.log(alNums);

function getLastValue(array) {
    const lastIndex = array.length - 1;
    return array[lastIndex];
}

// console.log(getLastValue([1,2,3]));

//--------------------------------

function arraySwap(array) {
    let firstIndex = array[0];
    let lastIndex = array.length - 1;
    let lastValue = array[lastIndex];

    array[0] = lastValue;
    array[lastIndex] = firstIndex;

    return array;
}

// console.log(arraySwap([1, 2, 3]));

//--------------------------------

const countOneToTen = [0, 1, 2, 3, 4, 5];
const countByTwo = [];

for(let i = 0; i < countOneToTen.length; i++) {
    const count = countOneToTen[i];
    countByTwo.push(count * 2);
}

// console.log(countByTwo);

//--------------------------------

for(let i = 5; i >= 0; i--) {
    // console.log(i);
}

//--------------------------------

// let i = 0;

// while(i <= 5) {
//     i++;
//     console.log(i * 2 - 2);
// }

//--------------------------------

// let i = 5;

// while(i >= 0) {
//     i--;
//     console.log(i + 1);
// }

//--------------------------------

// const arrayValue = [1, 2, 3];
// const arrayV1 = [];

// for(let i = 0; i < arrayValue.length; i++) {
//     const plus = arrayValue[i];

//     arrayV1.push(plus + 1);
// }

// console.log(arrayV1);

//--------------------------------

// function addOne(array) {
//     const result = [];

//     for(let i = 0; i < array.length; i++) {
//         result.push(array[i] + 1);
//     }

//     return result;
// }

// console.log(addOne([1, 2, 3]));
// console.log(addOne([-2, -1, 0, 99]));

//--------------------------------

// function addNum(array, num) {
//     const result = [];

//     for(let i = 0; i < array.length; i++) {
//         result.push(array[i] + num);
//     }
//     return result;
// }

// console.log(addNum([1,2,3], 2));
// console.log(addNum([1,2,3], 3));
// console.log(addNum([-2,-1,0,99], 2));

//--------------------------------

// function addArrays(array1, array2) {
//     const result = [];

//     for(let i = 0; i < array1.length; i++) {
//         result.push(array1[i] + array2[i]);
//     }
//     return result;
// }

// console.log(addArrays([1,1,2], [1,1,3]));
// console.log(addArrays([1,2,3], [4,5,6]));

//--------------------------------

// function countPositive(nums) {
//     let result = 0;

//     for(i = 0; i < nums.length; i++) {

//         if(nums[i] >= 1) {
//             result++;
//         }
//     }
//     return result;
// }

// console.log(countPositive([1, -3, 5]));
// console.log(countPositive([-2, 3, -5, 7, 10]));

//--------------------------------

// function minMax(nums) {

//     const result = {
//         min: null,
//         max: null
//     };

//     for(let i = 0; i < nums.length; i++) {
//         const value = nums[i];

//         // If the value is less than the min,
//         // update the min.
//         if (result.min === null || value < result.min) {
//             result.min = value;
//         }

//         // If the value is greater than the max,
//         // update the max.
//         if (result.min === null || value > result.max) {
//             result.max = value;
//         }
//     }
//     return result;
// }

// console.log(minMax([]));
// console.log(minMax([3]));

//--------------------------------

// function countWords(words) {
//     const result = {};
    
//     for(let i = 0; i < words.length; i++) {
//         const text = words[i];
        
//         // result[word] adds/accesses a property using whatever is
//         // saved inside the 'word' variable.
//         // If word = 'apple', result[word] will do result['apple']
//         // If word = 'grape', result[word] will do result['grape']
        
//         if(!result[text]) {
//             result[text] = 1;
//         }
//         else {
//             result[text]++;
//         }
//     }
//     return result;
// }

// countWords(['apple', 'grape', 'apple', 'apple']);
// console.log(countWords(['apple', 'grape', 'apple', 'apple', 'grape']));

//--------------------------------
// TO DO LIST V2
// Exercise 11x (added localStorage)
// Exercise 12 (replaced for loop with forEach)

const toDoArray = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList()
{
    let todoListHTML = '';
    
    toDoArray.forEach((todoObject) =>
    {
        const { name, date, time } = todoObject;
        const html = 
        `
            <div>${name}</div>
            <div>${date}</div>
            <div>${time}</div>
            <button class="delete-todo-btn js-delete-btn">Delete</button>
        `;

        todoListHTML += html;
    });
    // This code is the same with forEach code above but forEach is much
    //easier to read

    // for(let i = 0; i < toDoArray.length; i++)
    // {
    //     const todoObject = toDoArray[i];
    //     // const name = todoObject.name; <- below is the shortcut for this code
    //     // const date = todoObject.date; that is called destructuring
    //     // const time = todoObject.time; takes the property to a variable
    //     const { name, date, time } = todoObject;
    //     const html = 
    //     `
    //         <div>${name}</div>
    //         <div>${date}</div>
    //         <div>${time}</div>
    //         <button onclick="
    //             toDoArray.splice(${i}, 1);
    //             renderTodoList();
    //             saveTodoStorage();
    //         " class="delete-todo-btn">Delete</button>
    //     `;

    //     todoListHTML += html;
    // }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;


    //.querySelectorAll - will give us all the elements that has the same class
    document.querySelectorAll('.js-delete-btn')
    // Everytime we loop this code, forEach needs 2 parameters
    // 1. Value
    // 2. Index
        .forEach((deleteButton, index) =>
        {
            deleteButton.addEventListener('click', () =>
            {
                toDoArray.splice(index, 1);
                renderTodoList();
                saveTodoStorage();
            });
        });

}

document.querySelector('.js-add-btn')
    .addEventListener('click', () =>
    {
        addTodoBtn()
    });

function addTodoBtn()
{
    const toDoInput = document.querySelector(".js-name-input");
    const dateInputElement = document.querySelector('.js-date-input');
    const timeInputElement = document.querySelector('.js-time-input');
    const name = toDoInput.value;
    const date = dateInputElement.value;
    const time = timeInputElement.value;

    toDoArray.push
    ({
        // name: name, <- the code below is the shortcut for this code
        // date: date,  - if the property name has the same variable name
        // time: time     you can use the shorthand property
        name,
        date,
        time
    });

    toDoInput.value = null;
    dateInputElement.value = null;
    timeInputElement.value = null;

    saveTodoStorage();

    renderTodoList();
}

function saveTodoStorage()
{
    localStorage.setItem('todoList', JSON.stringify(toDoArray))
}


//======================= MORE DETAILS ABOUT ARRAYS =======================
// Array is also a reference like object

/*
ex.
const array1 = [1, 2, 3];
const array2 = array1;

array2.push(4);

console.log(array1);
console.log(arraty2); 
- both will show in the console [1, 2, 3, 4]
- even we only push the value 4 only in array2

To avoid this behavior we can copy the values in the array by using .slice()
ex.
const array1 = [1, 2, 3];
const array2 = array1.slice(); <- this will make a copy of the values of array1

array2.push(4);

console.log(array1); <- this will show [1, 2, 3]
console.log(arraty2); <- this will show [1, 2, 3, 4]
- the push method now only affects the array2 since it now has a 
  different reference from array1
*/

// Shortcuts of Array
// Destructuring
/*
ex.
const array3 = [1, 2, 3];
Let say we want to get the 1st and 2nd value out of this array
- the standard way to do this is:
    const firstValue = array3[0];
    const secondValue = array3[1];

- shortcut using destructuring:
    1. to use this shortcut just put [] for declaring an array
    2. inside the [] place the array name
        - by default the first array name always gets the first index
        - adding a array name by ',' will get the second index and so on..
    ex.
    const [firstValue, secondValue] = [1, 2, 3];
    console.log(firstValue); <- will show 1
    console.log(secondValue); <- will show 2
*/


//======================= MORE DETAILS ABOUT LOOPS =======================
// 2 Features of loop:
// 1. break     -   let's us exit the loop early
// 2. continue  -   let's us skip 1 iteration of the loop

/* Example of break
for(let i = 1; i <= 10; i++) {
    console.log(i); //<- this will count 1-10 in the console
    //but if we use a break in this loop

    if(i === 8) { <- now this will only count 1-8
        break;    <- since we placed the break here when i = 8
    }
}
*/

/* Example of continue
for(let i = 1; i <= 10; i++) {
    if(i === 3) {
        continue; <- this will count 1-10 but it will skip 3
    }
    console.log(i); 
}

// Let's say that we want to skip the number if it's divisible by 3
for(let i = 1; i <= 10; i++) {
    if(i % 3 === 0) { //<- using the % operator will check if the number will 
        continue;     // have a remainder  
    }               //in this example we are looking for the no. divisble by 3
    console.log(i); //<- will count 1-10 while skipping no. divisible by 3
}

//Let's use continue in the while loop
// we want to count from 1-10 using while loop

let i = 1;

while(i <= 10) {
    if(i % 3 === 0) {
        i++; //<- always remember to place an increment first before using 
        continue; // continue in a while loop to prevent the infinite loop
    } //<- not placing a increment before continue will skip the increment 
    // and will be stucked in a infinite loop
    console.log(i);
    i++;
} // while in the for loop, the increment will be done automatically
// after every iteration
*/

// ----- Use loops with functions ------
// Let say we want to take the values of an array and double each value
// and reuse the function for any arrays

/* Example of loops with function
return is another way to stop the loop when it's inside of a function

function doubleArray(nums) {
    const arrayDoubled = [];
    
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if(num === 0) {
            return arrayDoubled;
        }
        
        arrayDoubled.push(num * 2);
    }
    return arrayDoubled;
}
console.log(doubleArray([2,2,0,7,2]));
*/


//----------------------------------------
// --- EXERCISES FOR ARRAYS AND LOOPS ---

// Exercise 11o-p
let words = 
[
    'hello',
    'world',
    'not',
    'search',
    'good',
    'search'
];
let index = -1;

for(let i = 0; i < words.length; i++) 
{
    if(words[i] === 'search')
    {
        index = i;
        break;
    }
}

// console.log(index);

words = ['not', 'found'];
index = -1;

for(let i = 0; i < words.length; i++)
{
    if(words[i] === 'search')
    {
        index = i;
        break;
    }
}

// console.log(index);

//----------------------------------------
// Exercise 11q
// function findIndex(array, word)
// {   
//     for(let i = 0; i < array.length; i++)
//     {

//         if(array[i] === word)
//         {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(findIndex(['green', 'red', 'blue', 'red', 'red'], 'red'));
// console.log(findIndex(['green', 'red', 'blue', 'red', 'red'], 'yellow'));

//----------------------------------------
// Exercise 11r-u

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];

function removeEgg(foods)
{
    const copy = foods.slice();
    let result = [];
    let egg = 0;

    for(let i = 0; i < foods.length; i++)
    {
        copy.reverse();
        if(copy[i] === 'egg' && egg < 2)
        {
            egg++;
            continue;
        }
        result.push(copy[i]);
    }
    return result.reverse();
}

// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
// console.log(removeEgg(foods));
// console.log(foods);

//----------------------------------------
// Exercise 11v
// for(let i = 1; i <= 20; i++)
// {
//     if(i % 3 === 0 && i % 5 === 0)
//     {
//         console.log('FizzBuzz');
//     }
//     else if(i % 3 === 0)
//     {
//         console.log('Fizz');
//     }
//     else if(i % 5 === 0)
//     {
//         console.log('Buzz');
//     }
//     else
//     {
//         console.log(i);
//     }
// }

//----------------------------------------
// Exercise 11w
function findIndex(array, word)
{   
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] === word)
        {
            return i;
        }
    }
    return -1;
}
// console.log(findIndex(['green', 'red', 'blue', 'red', 'red'], 'red'));
// console.log(findIndex(['green', 'red', 'blue', 'red', 'red'], 'yellow'));

function unique(array)
{
    let result = [];

    for(let i = 0; i < array.length; i++)
    {
        const word = array[i];

        // Using the findIndex() function from above, we
        // can check if the string is already in the
        // result array. If it's not in the result array
        // (index is -1), then add it to the result array.
        if(findIndex(result, word) === -1)
        {
            result.push(word);
        }
    }
    return result;
}

// console.log(unique(['green', 'red', 'blue', 'red']));
// console.log(unique(['red', 'green', 'green', 'red']));


//======================= ADVANCED FUNCTIONS P1 =======================
// functions are also values
//  - we can save a function inside a variable

/*
ex.
// const greeting = function()
// {
//     console.log('hello');
// }

// This one is the shortcut for the code above
function greeting()
{
    console.log('hello');
}
greeting();
// This syntax have advantages:
// 1. Easier to read
// 2. Hoisting (doesn't need to worry about the order of the code)


const num = 2;
const function1 = function() {console.log('hello2');}
// this is called anonymous function (function without a name)

console.log(function1);
function1();
*/


//----------------------------------------
// Save a function in an object
// call a function use ();
/*
const object1 = 
{
    num: 2,
    fun: function() {console.log('hello3');}
};
object1.fun(); // This will show hello3 in the console
*/

//----------------------------------------
// Pass a function into a function
/*
function display(param)
{
    console.log(param);
}
display(2); // This will display 2 in the console

function run(param)
{
    param();

}
// This is the function for 'param'
run(function()// we can declare a function on parameters
{
    console.log('hello4');
});
// The function that is passing to the function is called a callback
*/

//======================= FEATURES OF JAVASCRIPT =======================
// setTimeout() -   allows us to run a function in the future
//              -   it needs 2 parameters to use
//                  1. a function we want to run in the future
//                  2. how long to wait before running this function
//                    (a number in milliseconds, 1000 milliseconds = 1 second)
//              -   is a asynchronous code

//-------------------------------------
// Asynchronous Code    -   won't wait for a line to finish beforer going
//                          to the next line
// Advantage:
// - it doesn't block our code for a set of time

/*                 
setTimeout(function()
{
    console.log('timeout');
}, 3000); // 3000 = 3 secs
// after 3 secs the 'timeout' will display in the console

console.log('next line'); 
// This will show first in the console before the code above
*/

//-------------------------------------
// Synchronous Code    -   will wait for a line to finish before going
//                         to the next line

/*
setTimeout(function()// All the code inside this code called a sychronous code
{
    console.log('timeout');
    console.log('timeout2');//This will show after the 'timeout' after 3 secs
}, 3000);

console.log('next line');
// All the code inside will still run line by line
// If the code is placed before the declared timer it will wait the finish
// before going to the next line
*/

//-------------------------------------
// setInterval() -   allows us to run a function in the future
//               -   it needs 2 parameters to use
//                   1. a function we want to run in the future
//                   2. how long to wait before running this function
//                    (a number in milliseconds, 1000 milliseconds = 1 second)
//                 **if a timer isn't set it may run the code infinitely
//               -  is a asynchronous code

/*
setInterval(function() 
{
    console.log('interval');
}, 3000); // This will run the code every 3 sec

console.log('next line 2')// This code will run first before the interval
*/


//======================= LOOP THROUGH AN ARRAY =======================
// ------- FOR EACH --------
// forEach()    -   method used to iterate (loop through) over the elements of 
//                  an array and apply a specific function (callback) to each
//                  element

//                  array.forEach(callback)
//                  element, index, array are provided

// let numbersFor = [1, 2, 3, 4, 5];

// function display(element) {
//     console.log(element);
// }

// function double(element, index, array) {
//     array[index] = element * 2; //<- the index inside the array will be
//                                 //    multiplied to 2
// }

// numbersFor.forEach(double); //<- this will do the function double before 
//                             //   displaying it
// numbersFor.forEach(display);


/*
Before the way we do it is using the for loop:
for(let i = 0; i < array.length; i++) {}

another way is:
.forEach()
*/

// [
//     'make dinner',
//     'wash dishes',
//     'watch youtube'
// ].forEach(function(value, index)// Passing a function into another function
// { 
//     // for example we need to skip wash dishes
//     if(value === 'wash dishes')
//     {
//         return;
//     }

//     console.log(index);
//     console.log(value);
// });
// forEach doesn't have 'continue' but we can use 'return' statement
// The .forEach() save each values of the array inside the parameter 'value'
// The value of array saves into the parameter and runs the code
// the index parameter gets the index of the values of array

/*
Easier to read than:
for(let i = 0; i <= array.length; i++)
{
    const value = array[i];
    console.log(value);
}
*/


//----------------------------------------
// --- EXERCISES USING ADVANCED FUNCTION ---

// Exercise 12a

// let add = function() 
// {
//     console.log(2 + 3);
// }

// add();
// add();

//---------------------------
// Exercise 12b

// function runTwice(fun)
// {
//     fun();
//     fun();
// }

// runTwice(function() {console.log('12b');});

// // runTwice(add);

//---------------------------
// Exercise 12c-d (added loading onclick)

// This is using onlick function
// see exercise 12q using the addEventListener
// function setTimeoutBtn()
// {
//     const setTimeBtn = document.getElementById("setTimeBtn");

//     setTimeBtn.textContent = 'Loading...';

//     setTimeout(function()
//     {
//         setTimeBtn.textContent = 'Finished!';
//     }, 2500);
// }

//---------------------------
// Exercise 12e-f

function cartTimeoutBtn()
{
    const cartTimerText = document.getElementById("cartTimerText");
    let click;

    cartTimerText.textContent = 'Added';
    // First, cancel the previous timeout so that
    // it doesn't remove the message to quickly
    clearTimeout(click);

    click = setTimeout(function()
    {
        cartTimerText.textContent = null;
    }, 2000);
}

//---------------------------
// Exercise 12g-i

document.title = "Inbox";

let messages = 0;
let inboxTimeout;

if(messages === 0)
{
    document.title = "Inbox";
}

function addTimeout()
{
    messages++;
    clearTimeout(inboxTimeout);

    inboxTimeout = setInterval(function()
    {
        if(document.title === 'Inbox')
        {
            document.title = `(${messages}) New Messages`;
        }
        else
        {
            document.title = "Inbox";
        }
    }, 1000);
}

function removeTimeout()
{
    messages--;
    clearTimeout(inboxTimeout);

    inboxTimeout = setInterval(function()
    {
        if(document.title === 'Inbox')
        {
            document.title = `(${messages}) New Messages`;
        }
        else
        {
            document.title = "Inbox";
        }
    }, 1000);
}


//======================= ADVANCED FUNCTIONS P2 =======================
// Arrow Functions  -   a shorter way to write functions

// const regularFunction = function(param, param2)
// {
//     console.log('hello');
//     return 5;
// }
// regularFunction();

// const arrowFunction = (param, param2) =>
// {
//     console.log('hello2');
//     return 5;
// };
// arrowFunction();

// // Differences of regular and arrow function:
// // regular functions has hoisting features 
// //   (the order of the code is not needed)

// // If the arrow function only have one parameters you can remove the brackets
// const oneParam = param =>
// {
//     console.log(param + 1);
// };

// oneParam(2); // This will show 3 in the console

// // If the arrow function only has one line of code you can use this shortcut.
// const oneLine = () => 2 + 3; // this is a shortcut for the code below
// // Just having an arrow it will automatically return the result on the right.
// /*
//     const oneLine = () => 
//     {
//         return 2 + 3;
//     };
// */
// console.log(oneLine()); // This will show 5 in the console


// If we are passing a function into another function it's recommended to use 
// arrow function because it's easier to read
[
    'make dinner',
    'wash dishes',
    'watch youtube'
].forEach((value, index) =>// Passing a function into another function
{ 
    // for example we need to skip wash dishes
    if(value === 'wash dishes')
    {
        return;
    }
    
    // console.log(index);
    // console.log(value);
});

// Arrow function inside an onbject

const obj2 = 
{
    method: () => // this is a arrow function inside the object
    {
        
    },
    method2() // this is a shorthand method is the same as the 'method' object
    {// It is recommended to use shorthand when saving a function in object
        
    }
}


// ------- EventListener --------
// .addEventListener()  -   lets us run some code when we interact with the elem
// .addEventListener() for using a JS onclick event

/*
Ex.
<button onclick="" class="js-button">Click</button>
const buttonElement = document.querySelector('.js-button');

buttonElement.addEventListener('click', () => 
{
    console.log('click');
});
*/

// addEventListener has 2 parameters:
// 1. event
// 2. function we want to run

// It has a advantage over using an attribute
// 1. Add multiple event listeners for an event
// 2. We can remove an event listener .removeEventListener()
//      removeEventListener also need 2 parameters:
//      1. event
//      2. function want to remove

/*
const eventListener = () => 
{
    console.log('click'); 
}

buttonElement.addEventListener('click', eventListener); 
// This will show in the console when you click the button it will run both the code

buttonElement.removeEventListener('click', eventListener);

buttonElement.addEventListener('click', () => 
{
    console.log('click2');
});
*/

//------- CLOSURE --------
// - if a function has access to that value
// - it will always have access to that value
// - value gets packaged together (enclosed) with the function
// - it automatically happens in the js code

/*
ex.
    document.querySelectorAll('.js-delete-btn')
    // Everytime we loop this code, forEach needs 2 parameters
    // 1. Value
    // 2. Index
        .forEach((deleteButton, index) =>
        {
            deleteButton.addEventListener('click', () =>
            {
                toDoArray.splice(index, 1);
                renderTodoList();
                saveTodoStorage();
            });
        });
        console.log(index); <- this will show error in the console since the 
        since the index didn't exist outside the function
*/


//======================= ADVANCED ARRAY METHODS =======================
// 2 more array methods:
//  1. .filter() - works the same as forEach
//               - needs 2 parameters value and index

//  2. .map()    - works the same as forEach and filter
//               - 

/*
ex. we have na array that we want to copy but remove the negative numbers
.filter()
[1, -3, 5] -> [1, 5]
*/
// .filter()
//  1. Creates a new array[]
//  2. return true, -> put value in array

// console.log([1, -3, 5].filter((value) =>
// {
    
//     if(value >= 0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
//    // the code below is the same as the code above
// //    return value >= 0;
// })); // this will show in the console [1, 5]

// -return true if positive
// -return false if negative



// .map()   - transform an array into another array
//  1. creates a new array[]
//  2. Whatever we return -> added to new array

// console.log([1, 1, 3].map((value) =>
// {
//     // return 10; // will show in the console [10, 10, 10]
//     return value + 10;
// }));

// ex. we want the function to return an array that each value is increased by
// the 2 parameter.
/*
function addNum(array, num)
{
    return array.map((value) => value + num);
}

console.log(addNum([1, 2, 3], 2)); <- this will show [3, 4, 5]
console.log(addNum([-2, -1, 0, 99], 2)); <- this will show [0, 1, 2, 101]
*/


//----------------------------------------
// --- SHORTCUTS OF ARROW FUNCTIONS ---
// console.log([1, 1, 3].map(value => value + 10));
// This code is the same as the code above


//----------------------------------------
// --- EXERCISES USING ARROW FUNCTIONS ---

// Exercise 12j

// const multiply = (param1, param2) => console.log(param1 * param2);

// multiply(2, 3);
// multiply(7, 10);

//------------------------------
// Exercise 12l

// function countPositive(nums)
// {
//     let positive = 0;

//     nums.forEach((num) => 
//     {
//         if(num > 0)
//         {
//             positive++;
//         }
//     });
//     return positive;
// }

// console.log(countPositive([1, -3, 5]));
// console.log(countPositive([-2, 3, -5, 7, 10]));

//------------------------------
// Exercise 12m

// function addNum(array, num)
// {
//     return array.map((value) => value + num);
// }

// console.log(addNum([1, 2, 3], 2));
// console.log(addNum([-2, -1, 0, 99], 2));

//------------------------------
// Exercise 12n-o

// function removeEgg(foods)
// {
    // return foods.filter((value) =>
    // {
    //     if(value === 'egg')
    //     {
    //         return false;
    //     }
    //     else
    //     {
    //         return true;
    //     }
    // });
                
    // OR in one line short cut
    // return foods.filter((value) => value !== 'egg');
    // '!==' is a strict inequality operator
    // same with '===' but false 
                
//     let egg = 0;

//     return foods.filter((value) =>
//     {
//         if(value === 'egg' && egg < 2)
//         {
//             egg++;
//             return false;
//         }
//         return true;
//     });

// }

// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


//------------------------------
// Exercise 12p
// change to using arrow function

// From Exercise 12c-d (added loading onclick)

// function setTimeoutBtn()
// {
//     const setTimeBtn = document.getElementById("setTimeBtn");

//     setTimeBtn.textContent = 'Loading...';

//     setTimeout(() =>
//     {
//         setTimeBtn.textContent = 'Finished';
//     }, 2500);
// }

// This setTimeout function is the same code as above
// only using the arrow function
//     setTimeout(function()
//     {
//         setTimeBtn.textContent = 'Finished!';
//     }, 2500);
// }

// From Exercise 12e-f
// function cartTimeoutBtn()
// {
//     const cartTimerText = document.getElementById("cartTimerText");
//     let click;

//     cartTimerText.textContent = 'Added';
//     // First, cancel the previous timeout so that
//     // it doesn't remove the message to quickly
//     clearTimeout(click);

//     click = setTimeout(() =>
//     {
//         cartTimerText.textContent = null;
//     }, 2000);

        // only used the arrow function in the code above
//     // click = setTimeout(function()
//     // {
//     //     cartTimerText.textContent = null;
//     // }, 2000);
// }

//---------------------------
// Exercise 12q
// Use EventListener instead onlick on exercise 12c

// function setTimeoutBtn()
// {
//     const setTimeBtn = document.getElementById("setTimeBtn");

//     setTimeBtn.textContent = 'Loading...';

//     setTimeout(() =>
//     {
//         setTimeBtn.textContent = 'Finished';
//     }, 2500);
// }

const setTimeBtn = document.getElementById("setTimeBtn");

setTimeBtn.addEventListener('click', () =>
{
    setTimeBtn.textContent = 'Loading!!!';

    setTimeout(() =>
    {
        setTimeBtn.textContent = 'Finished';
    }, 2500);
});

//---------------------------
// Exercise 12r
// Check the RPS Game added some keyboard shortcuts and features

