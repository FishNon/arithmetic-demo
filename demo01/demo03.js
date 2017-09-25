// 实现一：最粗暴的方式
console.log('==========================================');
console.log('实现一：');
function copy(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        arr2[i] = arr1[i];
    }
}
var nums1 = [1, 2, 3, 4, 5];
var newNum1 = [];
copy(nums1, newNum1);
newNum1.push(6);
console.log('nums1 : ' + nums1);
console.log('newNum1 : ' + newNum1);
/*
 输出：
 nums : 1,2,3,4,5
 newNum : 1,2,3,4,5,6
 */


// 实现二：JSON.stringify
// 注意：这个方法不能复制数组中带有非JSON的数据
console.log('==========================================');
console.log('实现二：');
var nums2 = [1, 2, 3, 4, 5];
var newNum2 = JSON.parse(JSON.stringify(nums2));
newNum2.push(6);
console.log('nums2 : ' + nums2);
console.log('newNum2 : ' + newNum2);
/*
 输出：
 nums2 : 1,2,3,4,5
 newNum2 : 1,2,3,4,5,6
 */

// 实现三：
console.log('==========================================');
console.log('实现二：');
var nums3 = [1,2,3,4,5];
var newNum3 = deepCopy(nums3);
newNum3.push(6);
console.log('nums3 : ' + nums3);
console.log('newNum3 : ' + newNum3);
console.log('------------------------------------------');
var nums4 = [1,2,[2,3,6,7],4,5];
var newNum4 = deepCopy(nums4);
newNum4[2].push(6);
console.log(nums4);
console.log(newNum4);

function deepCopy(arr) {
    var newObj;
    Object.prototype.toString.call(arr) === '[object Array]'? newObj = []:newObj = {};
    for(var key in arr){
        newObj[key] = (typeof arr[key] === 'object'?deepCopy(arr[key]):arr[key]);
    }
    return newObj;
}
