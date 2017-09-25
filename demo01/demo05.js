var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var read_line = __readline.prompt;

// ======================分割线==============================

var names = ['Bob', 'Jane', 'Sandy', 'Lily', 'Lisa', 'Ann', 'Bob', 'Jone'];
console.log('Please enter a name:');
var name = read_line();
var pos = names.lastIndexOf(name);
if (pos >= 0)
    console.log('Found '+name + ' at position ' + pos);
else
    console.log(name + ' not found in array.');