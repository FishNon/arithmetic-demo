var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
var read_line = __readline.prompt;

// ======================分割线==============================

var names = ['Bob', 'Jane', 'Sandy', 'Lily', 'Lisa', 'Ann', 'Bob', 'Jone'];
var namesStr1 = names.join(',');
var namesStr2 = names.toString();
console.log(namesStr1);
console.log(namesStr2);

