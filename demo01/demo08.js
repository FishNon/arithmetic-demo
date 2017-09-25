var arr1 = [1,5,2,4,1,8,7];
console.log(arr1.reverse()); // [ 7, 8, 1, 4, 2, 5, 1 ]

var arr2 = [1,5,2,4,10,8,7];
arr2.sort();
console.log(arr2); // [ 1, 10, 2, 4, 5, 7, 8 ]

var arr3 = [1,5,2,4,10,8,7];
arr3.sort(function (a,b) {
    return a-b;
});
console.log(arr3); // [ 1, 2, 4, 5, 7, 8, 10 ]

