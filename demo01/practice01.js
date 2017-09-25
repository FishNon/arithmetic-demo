/*
 * 创建一个记录学生成绩的对象，
 * 提供一个添加成绩的方法，
 * 以及一个显示学生平均成绩的方法
 *
 * */

function StuGrade() {
    this.dataStore = [];
    this.addGrade = addGrade;
    this.showAverage = showAverage;
}
function addGrade(grade) {
    this.dataStore.push(grade);
}
function showAverage() {
    var total = 0;
    for(var i = 0;i<this.dataStore.length;i++){
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

var grades = new StuGrade();
grades.addGrade(70);
grades.addGrade(88);
grades.addGrade(70);
grades.addGrade(65);
grades.addGrade(30);
grades.addGrade(90);
grades.addGrade(33);
grades.addGrade(89);
console.log(grades.showAverage());