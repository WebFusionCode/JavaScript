console.log('This is Tutorial of Function in JavaScript')

// Here we are Going to Function in javascript 

let name1 = 'harsh';
let name2 = 'rohit';
let name3 = 'siddesh';
let name4 = 'Ashish';
let name5 = 'Mukesh';
let greetText = 'Good Moring';

// For all output wwe have to indivisual variable name for each on to prevent this there is a short cut way to save our time is 
// console.log(name1 + ('is a good boy'));
// console.log(name2 + ('is a good boy'));
// console.log(name3 + ('is a good boy'));
// console.log(name4 + ('is a good boy'));
// console.log(name5 + ('is a good boy'));

// The Function is for this is 
// here when me write in the parameters that value it will take as default like i have deleted the greetText from name 5 but it will show that default string in the output 
function greet (name, greetText='Greetings from javascript'){
    let name1 = 'harry';
    // this let will not effect to the greet called because it is within the curly braces and the ouoter one is global variable 
    console.log(greetText + ' ' + name);
    console.log(name + ('is a good boy'));
}
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);
greet(name5,);

function sum(a,b,c){
    let d = a + b + c;
    return d;
}

let summed = sum(1,2,3);
console.log(summed);

function ageing(age){
    if(age > 18){
        console.log('You are Adult');
    }
    else{
        console.log('You are Minor');
    }
}
let ages = ageing(44);
console.log(ages)

