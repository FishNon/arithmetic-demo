var nums = [1, 2, 3, 4, 5, 6, 7, 8];
nums.forEach(function (num) {
    console.log(num, num * num);
});

console.log('==============================================');

var arr1 = [1, 3, 5, 6];
var arr2 = [2, 4, 6, 8, 10];
function isEven(num) {
    return num % 2;
}
console.log(arr1.every(isEven));
console.log(arr2.every(isEven));

console.log('==============================================');

console.log(arr1.some(isEven));

console.log('==============================================');

var sum = arr1.reduce(function (a, b) {
    return a + b;
});
console.log(sum);

console.log('==============================================');

var arr3 = [22, 45, 11, 57, 38];
function addNum(num) {
    return num += 10;
}
var res = arr3.map(addNum);
console.log(res);

console.log('==============================================');

var nums2 = [12, 14, 23, 4, 6];
function isOdd(num) {
    return !(num % 2);
}
console.log(nums2.filter(isOdd)); // [ 12, 14, 4, 6 ]

console.log('==============================================');

var grades = [39,43,89,19,46,54,5,13,31,27,96,64,63,30,78,89,68,40];
function isPass(grade) {
    return (grade >=60);
}
var passGrade = grades.filter(isPass);
console.log('All grades : ');
console.log(grades);
console.log('Passing grades : ');
console.log(passGrade);