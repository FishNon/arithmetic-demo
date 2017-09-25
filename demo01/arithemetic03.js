// 求两个数组交集

Array.prototype.intersection = function (arr) {
    return this.filter(function (n) {
        return arr.indexOf(n) != -1;
    })
};

var arr1 = [1,4,2,6,9,5];
var arr2 = [1,5,2,5,0,3];
var res = arr1.intersection(arr2);
console.log(res);


