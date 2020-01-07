// 如何判断js的某一个对象是object还是array，或function?

// Predefine some utils
let print = function(val) {
    console.log(val);
}

// Define some const
const arr = [1, 2, 3];
const obj = {
    "name": "I am a object"
}
class Foo {
    say() {
        console.log("I'm foo");
    }
}
const func = function() {
    console.log("this is a function");
}

// 1.原生js实现Array.isArray()和isObject

function testArray() {
    print(Array.isArray(arr));
    print(Array.isArray(obj));
    print(Array.isArray(func));
}

// testArray();
// true
// false
// false

// 可见Array.isArray是提供了区分array和非array的

// 但是貌似没有现成的类似isObject()这样的方法
function testObject() {
    print(isObject(arr));
    print(isObject(obj));
    print(isObject(func));
}

// testObject();
// ReferenceError: isObject is not defined

// 所以我们来用原生js自己定义一个类似isObject()的方法

function isObject(val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
}

// testObject();
// false
// true
// false

// 看上去效果还不错

// 那么究竟我们写的这个方法能够鉴定哪些类型?
// 让我们完善test cases

function testCaseForIsObject() {
    // 直接定义的空对象
    print(isObject({}));
    // Object创建的空对象
    print(isObject(Object.create({})));
    // Object创建的符合Object原型的对象
    print(isObject(Object.create(Object.prototype)));
    // Object创建的null
    print(isObject(Object.create(null)));
    // new关键字创建的对象
    print(isObject(new Foo));
    // 正则对象
    print(isObject(/foo/));
}

// testCaseForIsObject();
// true
// true
// true
// true
// true
// true

// 那么除了对象的其他类型(type)，自然不应该通过

function testTypeNotObject() {
    print(isObject());
    // function
    print(isObject(function() {}));
    // number
    print(isObject(1));
    // array
    print(isObject([]));
    // undefined
    print(isObject(undefined));
    // null
    print(isObject(null));
}

// testTypeNotObject();
// false
// false
// false
// false
// false
// false

// 2.另一种实现方式

function anotherWayToDistinguishType() {
    if (!Array.isArray) {
        Array.isArray = function(arg) {
            // 这样会返回一个数组，第一个值还是对象，因为js中array本质也是object，但第二个值会表示它具体的类型
            return Object.prototype.toString.call(arg) === '[object, Array]';
        }
    }

    var arr = new Array(1, 2, 3);
    print(Object.prototype.toString.call(arr));
    print(Array.isArray(arr));
}

// anotherWayToDistinguishType();
// [object Array]
// true

// 如果直接拿typeof去区分object,array,function是怎么样的呢?

function testNormalType() {
    print(typeof arr);
    print(typeof obj);
    print(typeof func);
}

// testNormalType();
// object
// object
// function

// 就是需要解决object和array的类型区分

// 用这种方式看到的结果呢?

function changeThis(arg) {
    return Object.prototype.toString.call(arg);
}

function testWayToDistinguishType() {
    print(changeThis(arr));
    print(changeThis(obj));
    print(changeThis(func));
}

// testWayToDistinguishType();
// [object Array]
// [object Object]
// [object Function]

// 这就很明朗了
// 也解释了js其实认为array和function在某种意义上也是object

// End