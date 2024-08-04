console.log('This is Module.js')
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length   
    // return sum*arr.length
    // return sum+arr.length
    // return sum-arr.length
}

// module.exports = average;
// module.exports = {
//     avg: average,
//     name: 'harsh',
//     repo: 'github',
// }

// Whole module.exports is a object we can also write like this 
module.exports.name='Harsh'
