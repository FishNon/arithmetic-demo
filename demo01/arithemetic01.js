/*
 * 数组去重
 *
 * */

/*
 * 方法一：
 * 使用indexOf方法去重
 * 优点：可以识别字符串类型的数字和数字类型的数字；
 * 缺点：对于引用类型的数组元素无法判断
 * */
function unique1(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) == -1) {
            res.push(arr[i]);
        }
    }
    return res;
}
var arr1 = [1, 2, 1, 6, 3, 7, 2, 4, 9, 5];
console.log(unique1(arr1)); // [ 1, 2, 6, 3, 7, 4, 9, 5 ]

var arr2 = [1, 2, '1', 6, 3];
console.log(unique1(arr2)); // [ 1, 2, '1', 6, 3 ]

var arr3 = [1, 2, '1', 6, 3, [1, 2, 4, 6], [1, 2, 4, 6], 7, 2, 4, 9, 5];
console.log(unique1(arr3)); // [ 1, 2, '1', 6, 3, [ 1, 2, 4, 6 ], [ 1, 2, 4, 6 ], 7, 4, 9, 5 ]

console.log('====================================================================================');
/*
 * 方法二：
 * 利用hash表
 * 优点：对引用类型的数组元素可以判断去重
 * 缺点：对数字类型的字符串无法判断（原因：对象类型的属性名均被转换为字符串类型，不论原本是什么类型）
 * */
function unique2(arr) {
    var hash = {};
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = true;
            res.push(arr[i]);
        }
    }
    return res;
}
var arr2_1 = [1, 2, 1, 6, 3, 7, 2, 4, 9, 5];
console.log(unique2(arr2_1)); // [ 1, 2, 6, 3, 7, 4, 9, 5 ]

var arr2_2 = [1, 2, '1', 6, 3];
console.log(unique2(arr2_2)); // [ 1, 2, 6, 3 ]

var arr2_3 = [1, 2, '1', 6, 3, [1, 2, 4, 6], [1, 2, 4, 6], 7, 2, 4, 9, 5];
console.log(unique2(arr2_3)); // [ 1, 2, 6, 3, [ 1, 2, 4, 6 ], 7, 4, 9, 5 ]

console.log('====================================================================================');

/*
 * 方法三：
 * 双重遍历
 * 优点：可以识别出字符串类型的数字；
 * 缺点：对引用类型的数组元素无效，且效率略低；
 * */
function unique3(arr) {
    if (arr.length == 0 || arr.length == 1)
        return;
    var res = [arr[0]], isRepeat;
    for (var i = 0; i < arr.length; i++) {
        isRepeat = false;
        for (var j = 0; j < res.length; j++) {
            if(res[i] === arr[j]){
                isRepeat = true;
                break;
            }
        }
        if(!isRepeat){
            res.push(arr[i]);
        }
    }
    return res;
}
var arr3_1 = [1, 2, 1, 6, 3, 7, 2, 4, 9, 5];
console.log(unique3(arr3_1)); // [ 1, 2, 6, 3, 7, 4, 9, 5 ]

var arr3_2 = [1, 2, '1', 6, 3];
console.log(unique3(arr3_2)); // [ 1, 2, '1', 6, 3 ]

var arr3_3 = [1, 2, '1', 6, 3, [1, 2, 4, 6], [1, 2, 4, 6], 7, 2, 4, 9, 5];
console.log(unique3(arr3_3)); // [ 1, 2, '1', 6, 3, [ 1, 2, 4, 6 ], [ 1, 2, 4, 6 ], 7, 2, 4, 9, 5 ]

console.log('====================================================================================');
