// 数组的浅复制
var nums = [1, 2, 3, 4, 5, 6, 7];
var newNum = nums;
newNum.push(8);
console.log('nums : ' + nums);
console.log('newNum : ' + newNum);

// nums : 1,2,3,4,5,6,7,8
// newNum : 1,2,3,4,5,6,7,8
// 修改任意一个都会对另一个造成同样的影响；
