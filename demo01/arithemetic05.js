// 数组求差集

Array.prototype.differenceSet = function (arr) {
    return this.filter(function (n) {
        return arr.indexOf(n) == -1;
    })
};
var arr1 = [1, 4, 2, 6, 9, 5, 1];
var arr2 = [1, 5, 2, 5, 0, 3];

var one_two = arr1.differenceSet(arr2);
var two_one = arr2.differenceSet(arr1);

console.log('arr1-arr2: ' + one_two);
console.log('arr2-arr1: ' + two_one);

function multiply(array) {
    // write code here
    var n = array.length;
    var res = [];
    for (var i = 0; i < n; i++) {
        var j = 0;
        res[i] = 1;
        while (j < n) {
            res[i] *= array[j];
            j++;
        }
        res[i] /= array[i];
    }
    return res;
}

console.log(multiply([1,2,3,4]));