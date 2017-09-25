var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];

for (var i = 0; i < grades.length; i++) {
    var total = 0;
    var average = 0;
    for (var j = 0; j < grades[i].length; j++) {
        total += grades[i][j];
    }
    average = total / grades[i].length;
    console.log('Student ' + (i+1) + ' average : ' + average.toFixed(2));
}


for (var m = 0; m < grades.length; m++) {
    var total = 0;
    var average = 0;
    for (var n = 0; n < grades[m].length; n++) {
        total += grades[n][m];
    }
    average = total / grades.length;
    console.log('Test ' + (m+1) + ' average : ' + average.toFixed(2));
}
