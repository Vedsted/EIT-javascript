let extra = ['Task 2: ', 'Task 3: ', 'Task 4: ']; let index = 0;
//////////////////
// Functions

// basic function
function fun() {
    let a = 1;
    let b = '2';
}


// adding parameters
function fun2(x, y) {
    let a = x;
    let b = y;
}

// can manipulate and return data
function addNumbers(x, y) {
    let result = x + y;
    return result;
}

addNumbers(3, 5); // => 8


// TASK 2:
/* Write the function 'triple'
    the function should take a string as parameter.
    the parameter should be returned times three.
    eg: Hello => HelloHelloHello
*/
let text = 'example ';

// create function here!


print(triple(text));




//////////////////
// If Statements 

let a = 1;
let b = 2;

if (a < b) {
    // do stuff
}

if (a >= b) {
    // do other stuff
}

if (a === b) {
    // do something else
}


//mutiple checks

// AND
if (a < b && a <= b / b) {
    // wow 
}

// OR
if (a < b || b < 10) {
    // wow 
}


// if else 
if (a < b) {
    // do this
} else {
    // else do this
}


// TASK 3:
/* Compare strings  a  and  b,
    Check if they are equal. 
    If they are, set a variable textToPrint to:
        ‘These are the same!’
    Else:
        ‘These are not the same!’
    End the task by printing the textToPrint 
    variable using the print() method.

    When done, try changing the value of a and b
*/
a = 'Hello';
b = 'hello';





//////////////////
// Loops


// While loops
let counter = 0;

while (counter < 50) {
    //print to console
    console.log("printing " + (counter + 1));
    counter++;
}

while (true) {

    if (true) {
        break;
    }
}


// For loops
counter = 10;

for (let i = 0; i < counter; i++) {
    //print to console
    console.log('printing round ' + (i + 1));
}

a = ['Ghalib', 'Sara', 'Paula', 'Baldur', 'Jonas'];
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

let j = 0;
for (; j < j;) {
    // do nothing
}


// loops in loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log('X');
    }
}



// TASK 4:
/* Write a function that takes a number as parameter.
    the function should print a triangle, 
    with the depth the same as the parameter.
    eg: depth = 3;
    #    
    ##
    ###

    you should use the print method to output the triangle.
*/

let depth = 5;







///////////////////////////////////////////

function print(o) {
    let p = document.createElement('p');

    if (index < 3) {
        let task = document.createElement('h2');
        task.innerText = extra[index] + '\n';
        document.body.appendChild(task);
    }

    p.innerText += o;
    document.body.appendChild(p);

    index++;
}