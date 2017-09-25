/*
 * 1、增加一个向列表中插入元素的方法，
 * 该方法只在待插元素大于列表中的所有元素时才执行插入操作。
 * 这里的大于有多重含义，
 * 对数字，他是数值上的大小
 * ，对字母，它是指在字母表中出现的先后顺序。
 * */

// 实现列表类构造函数
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.hasNext = hasNext;
    this.hasPrev = hasPrev;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

function append(ele) {
    this.dataStore[this.listSize++] = ele;
}

function find(ele) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == ele) {
            return i;
        }
    }
    return -1;
}

function remove(ele) {
    var foundAt = this.find(ele);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(newEle, afterEle) {
    var insertPos = this.find(afterEle);
    if (insertPos > 1) {
        this.dataStore.splice(insertPos + 1, 0, newEle);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}

function contains(ele) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == ele) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    --this.pos;
}

function next() {
    if (this.pos < this.listSize) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(pos) {
    this.pos = pos;
}

function getElement() {
    return this.dataStore[this.pos];
}

function hasNext() {
    return this.pos < this.listSize;
}

function hasPrev() {
    return this.pos >= 0;
}

var list = new List();
function judgeEle(ele, list) {

    var max = Math.max.apply(Math, list.dataStore);
    if (max >= ele) {
        return false;
    } else {
        list.append(ele);
        return true;
    }
}
judgeEle('1',list);
judgeEle('5',list);
judgeEle('1',list);
judgeEle('3',list);
judgeEle(2,list);
judgeEle(10,list);
judgeEle(1,list);
judgeEle('19',list);
judgeEle(18,list);
judgeEle('a',list);
console.log(list.dataStore);