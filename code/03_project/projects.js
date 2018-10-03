/* Project 1
    write a function decipher that takes the string 'X' as parameter.
    the function should take every other letter from the string and put them together into a single new string, starting from index 0.
    print the new string using the print function
*/
let x = 'If Ackaand Iwsriimtfee tjaaxveaasbctrjifpcts';



/* Project 2
    write a function findLowest that takes an array as parameter.
    the function should find and return the lowest number from the list.
    print the result using the print function
*/
let a = [5000, 50, 05, 1, 0, -10, (-1 * 20), -15, 10];




/* Project 3
    write a function addLists that takes two arrays as parameters.
    the function should add the values from the different lists together
    on each index and put them in to a new array.
    
    eg: 
    index 1
    array1 = [1, 2, 3]
    array2 = [2, 3, 4]
    newArray = [3, 5, 7]

    you should return the new array and print it using the print function

    if the task is to easy try combining one of the arrays with the hard array.
*/
let array1 = [100, 200, 300, 400, 500, 0, -2];
let array2 = [10, 20, 30, 40, 50, 10, 0, 2];
//let hardMode = [10, , '30', null, 50, NaN, Math.pow(10) / 100];
















/////////////////////////////////////////////
function print(o) {
    let q = document.createElement('p');
    q.innerText += o;
    document.body.appendChild(q);

    let p = document.createElement('p');
    p.innerText = '--------------------------------------------';
    document.body.appendChild(p);
}