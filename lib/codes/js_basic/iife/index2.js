"use strict";

var log = console.log;

var test = function test(a) {
  log(a);
  return function (c) {
    log(c);
  };
};

(function (b) {
  log(b);
})(1);

test('hello'); // 1
// hello