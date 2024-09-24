console.log('other file');

const name = 'kanchi';
function sum(a, b) {
    console.log(a+b);
}

// to export 1 function
// module.exports = sum;

// for multiple functions
module.exports = { name, sum }
