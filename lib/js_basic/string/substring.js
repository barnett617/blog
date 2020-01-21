"use strict";

/**
 * 返回从某个位置开始，到另一个位置之前的字符串子集
 * 参考： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring
 */
var log = console.log;
var str = 'hello world!'; // log(str.substring(2, 3));
// // l
// log(str.substring(0, 3));
// log(str.substring(-2, 3));
// log(str.substring('test', 3));
// hel
// hel
// hel
// log(str.substring('test', 0));
// log(str.substring('test', -1));

log(str.substring(2, -1));
log(str.substring(2, 'test')); // he
// he

/**
 * 试着实现
 */

function _substring(start, end) {
  let str = this;
  let result = '';
  let chars = []; // handle start
  // if ()
}