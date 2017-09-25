/*
* 创建Person类，该类用于保存人的姓名和性别信息。
* 创建一个至少包含10个Person对象的列表。
* 写一个函数显示列表中所有拥有相同性别的人。
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

function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}

function createPerson(name, sex) {
    var p = new Person(name, sex);
    personList.append(p);
}

function showSameSex(list) {
    var girls = [];
    var boys = [];
    for(list.front();list.hasNext();list.next()){
        if(list.getElement()['sex'] == 'girl'){
            girls.push(list.getElement()['name']);
        }else{
            boys.push(list.getElement()['name']);
        }
    }
    console.log('----------------girls----------------');
    console.log(girls);
    console.log('----------------boys----------------');
    console.log(boys);
}

var personList = new List();
createPerson('Bob', 'boy');
createPerson('Sandy', 'girl');
createPerson('Jane', 'boy');
createPerson('Ella', 'boy');
createPerson('Jone', 'girl');
createPerson('Jane', 'boy');
createPerson('Lily', 'girl');
createPerson('Ann', 'girl');
createPerson('Jack', 'boy');
createPerson('Broke', 'girl');
createPerson('Query', 'boy');
createPerson('Merry', 'boy');
createPerson('Poly', 'girl');
createPerson('Ran', 'boy');
createPerson('Jam', 'girl');
createPerson('Jim', 'girl');
showSameSex(personList);
