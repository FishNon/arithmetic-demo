var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var read_line = __readline.prompt;

// ======================分割线==============================

var num = [1,2,3,4,5];

num.push(6,7,8);
console.log(num); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

num.unshift(-2,-1,0);
console.log(num); //  -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8 ]


