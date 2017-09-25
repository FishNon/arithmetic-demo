/*
 *
 * 创建一个对象，它将字母存储在一个数组中，
 * 并且用一个方法可以将字母连在一起，
 * 显示成一个单词；
 *
 * */

function ConstWord() {
    this.data = [];
    this.add = function (c) {
        this.data.push(c);
    };
    this.connect = function () {
        return this.data.join('');
    };
}

var w = new ConstWord();
w.add('H');
w.add('e');
w.add('l');
w.add('l');
w.add('o');
console.log(w.connect());