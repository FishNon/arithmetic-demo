/*
 * 数组判断
 * */

/*
 * 方法一：
 *
 * */
function shuffle1(array) {
    var res = [];
    var i = 0;
    var n = array.length;
    while (n) {
        i = Math.floor(Math.random() * array.length);
        if (i in array) {
            res.push(array[i]);
            delete array[i];
            n--;
        }
    }
    return res;
}
var nums = [1, 2, 3, 4, 5, 6];
console.log(shuffle1(nums));

console.log('============================================');

function shuffle2(array) {
    var res = [];
    var n = array.length;
    var i = 0;
    while (n) {
        i = Math.floor(Math.random() * array.length);
        if (i in array) {
            res.push(array.splice(i, 1)[0]);
            n--;
        }
    }
    return res;
}
var nums2 = [1, 2, 3, 4, 5, 6];
console.log(shuffle2(nums2));

console.log('============================================');

// 方法三：
// 前面随机抽取一个数值与末尾的元素交换，后面依次类推；
function shuffle3(array) {
    var n = array.length;
    var i = 0;
    while(n){
        i = Math.floor(Math.random()*n--);
        t = array[n];
        array[n] = array[i];
        array[i] = t;
    }
    return array;
}
var nums3 = [1, 2, 3, 4, 5, 6];
console.log(shuffle3(nums3));

console.log('============================================');
