//1
o = {
    name: 'Lars',
    age: 22,
    'eye color': 'blue',
    hobbies: ['dancing', 'dancing', 'dancing']
};


//2
function triple(t) {
    return t + t + t;
}

//3
let text;
if (a === b) {
    text = 'correct';
} {
    text = 'wrong';
}
print(a);


//4
let depth = 5;

for (let i = 0; i < depth; i++) {
    let t = '';
    for (let j = 0; j <= i; j++) {
        t += 'X';
    }
    print(t);
}


// P1
let res = '';
for (let i = 0; i < x.length; i++) {
    if (i % 2 === 0) {
        res += x[i];
    }
}
print(res);


// P2 
let low;
a.forEach(e => {
    if (low === undefined) {
        low = e;
    }

    if (e < low) {
        low = e;
    }
});
print(low);