///////////////////////
// Numbers

let i = 5;
let j = 2.5;

let total = i + j;

// total is set to: total - (i + j)
total -= i + j;


///////////////////////
// Strings

let text = "Hello World";
text = 'Hello' + 'World';

text = text + text;

///////////////////////
// Arrays

let list = [];
let array = new Array();

//index:0  1  2  3  4
list = [1, 2, 3, 4, 5];
array = [1, "Hello", 2, 'World', 3]

//clear the list
list = [];
//add a element
list.push(1);
//add another element at index 1
list[1] = 2;
//override index 0
list[0] = 'Hello World';
//remove element at last index
list.pop()


///////////////////////
// Objects

let o = {};
let p = new Object();

// object with content
o = {
    name: 'Lars',
    age: 22,
    job: 'Student'
}

// change the name
o.name = 'Baldur';
o['name'] = 'Sara';

// add variable
o.friend = 'Ghalib';

// change variable type
o.friend = [o.friend, 'Paula'];





// TASK 1:
/* edit the taskObject so it contains the following:
        name,
        age,
        eye color,
        a list of hobbies
*/

let taskObject = {};



// this will print your object to the page
printObject(taskObject);

function printObject(object) {
    for (let l in object) {
        let p = document.createElement('p');
        p.innerText = l + ': ' + object[l];
        document.body.appendChild(p);
    }
}











