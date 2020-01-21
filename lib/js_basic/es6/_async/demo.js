"use strict";

// js异步编程(4种方式)
// 1.回调函数
function wayNo1() {
  function f1(callback) {
    setTimeout(function () {
      console.log('f1');
      callback();
    }, 3000);
  }

  function f2() {
    console.log('f2');
  }

  f1(f2);
} // wayNo1();
// 3s后
// f1
// f2
// 区别于顺序执行两个函数
// f1();
// f2();
// 如果这样呢?


function wayNo1plus() {
  function f1(callback) {
    setTimeout(function () {
      console.log('f1');
    }, 3000);
    callback();
  }

  function f2() {
    console.log('f2');
  }

  f1(f2);
} // wayNo1plus();
// f2
// 3s后
// f1