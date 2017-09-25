var fs = require('fs');
var __readline = require('readline-sync');

__readline.setDefaultOptions({prompt: ''});
var read_line = __readline.prompt;

// -------------------读取输入、引入fs-------------------------
var movies = [];
fs.readFile('./films.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        movies = data.split('\n');
        for (var i = 0; i < movies.length; i++) {
            movies[i] = movies[i].trim();
        }
        return createMovies(movies);
    }
});


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

function showList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            // 操作
            console.log(list.getElement()["name"] + ', ' + list.getElement()["film"]);
        } else {
            console.log(list.getElement());
        }
    }
}


var customer = new List();


function Customer(name, film) {
    this.name = name;
    this.film = film;
}

function checkOut(name, movie, movieList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name,movie);
        customerList.append(c);
        movieList.remove(movie);
    } else {
        console.log(movie + ' 不存在。');
    }
}


function createMovies(data) {
    var movieList = new List();
    for (var i = 0; i < data.length; i++) {
        movieList.append(data[i]);
    }
    console.log('影单列表：');
    showList(movieList);
    console.log('please enter your name:');
    var name = read_line();
    console.log('What movie would you like?');
    var movie = read_line();
    checkOut(name,movie,movieList,customer);

    console.log('客户租借信息：');
    showList(customer);

    console.log('更新后的影单：');
    showList(movieList);
}
