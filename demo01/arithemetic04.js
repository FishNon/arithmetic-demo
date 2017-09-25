// 数组求并集

Array.prototype.unionSet = function (arr) {
    var res = this.concat(arr);
    return unique(res);
};

function unique(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) == -1) {
            res.push(arr[i]);
        }
    }
    return res;
}

var arr1 = [1, 4, 2, 6, 9, 5, 1];
var arr2 = [1, 5, 2, 5, 0, 3];
var res = arr1.unionSet(arr2);
console.log(res);