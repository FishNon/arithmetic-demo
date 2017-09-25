var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var read_line = __readline.prompt;

// ======================分割线==============================

var names = ['Sandy', 'Bob', 'Jane', 'Ann', 'Poly'];
console.log('please enter a name to search for:');
var name = read_line();
var position = names.indexOf(name);
if (position >= 0)
    console.log('Found ' + name + ' at position ' + position);
else
    console.log(name + ' not found in array.');
