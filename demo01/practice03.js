/*
 * 3、创建一个对象，用于保存观测到的周最高温度，
 * 该对象有多个方法：
 * ①增加一条新的气温记录；
 * ②计算存储在对象中的平均气温；
 * （扩展：修改创建的对象，
 * 使它可以使用一个二维数组来存储每个月的有用数据，
 * 增加一些方法用以显示月平均数，
 * 具体某一周平均数和所有周的平均数）
 * */

function Temperature() {
    this.num = 0;
    this.dataStore = [];
    this.add = function (t) {
        var n = this.num % 7;
        var m = parseInt(this.num / 7);
        if (n == 0) {
            this.dataStore.push([]);
        }
        this.dataStore[m].push(t);
        this.num++;
    };
    this.weekAverage = function (w) {
        var total = 0;
        w = w-1;
        for (var i = 0; i < this.dataStore[w].length; i++) {
            total += this.dataStore[w][i];
        }
        return total / this.dataStore[w].length;
    };
    this.monthAverage = function () {
        var t = 0;
        for(var k =0 ;k<this.dataStore.length;k++){
            t += this.weekAverage(k+1);
        }
        return t/this.dataStore.length;
    }
}

var m = new Temperature();
m.add(10);
m.add(10);
m.add(10);
m.add(10);
m.add(10);
m.add(10);
m.add(10);
m.add(10);
m.add(10);
console.log(m.dataStore);
console.log(m.weekAverage(2));
console.log(m.monthAverage());


