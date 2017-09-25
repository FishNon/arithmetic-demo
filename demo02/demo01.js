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

var names = new List();
names.append('Bob');
names.append('Jane');
names.append('Sandy');
names.append('Ann');
names.append('Andy');
names.append('Poly');
names.append('Lily');
names.append('Jack');

console.log(names.toString());

names.remove('Ann');
console.log(names.toString());

// 移动到列表中的第一个元素并显示它
names.front();
console.log(names.getElement());

// 向前移动一个单位并显示它
names.next();
console.log(names.getElement());

// 向前移动两个单位，再向前移动一个单位并显示当前元素
names.next();
names.next();
names.prev();
console.log(names.getElement());

// 从前向后遍历
console.log('---------------------从前向后遍历---------------------');
for(names.front(); names.hasNext(); names.next()){
    console.log(names.getElement());
}
// 从后向前遍历
console.log('---------------------从后向前遍历---------------------');
for(names.end();names.hasPrev();names.prev()){
    console.log(names.getElement());
}