/*
* 数组判断：
*
* */

// 方法一：自带的isArray方法
var nums = [1,2,3];
console.log(Array.isArray(nums)); // true

// 方法二：利用instanceof 运算符判断
var arr = ['2','1','5'];
console.log(arr instanceof Array); // true

// 方法三：利用toString判断
var str = ['h','e','l','l','o'];
console.log(Object.prototype.toString.call(str) == '[object Array]'); // true