"use strict";

/**
 * 可选链式调用
 * 用处：优化对象的对层级属性访问判空
 */
function optionalChain() {
  var _res$data, _res$data$contents, _res$data2, _res$data2$content;

  const res = {
    code: 200,
    data: {
      contents: {
        price: 22
      }
    }
  }; // 传统方式

  if (res && res.data && res.data.contents && res.data.contents.price) {
    console.log('origin: ' + res.data.contents.price);
  } // 可选链式


  if (res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$contents = _res$data.contents) === null || _res$data$contents === void 0 ? void 0 : _res$data$contents.price) {
    console.log('now: ' + res.data.contents.price);
  }

  if (res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$content = _res$data2.content) === null || _res$data2$content === void 0 ? void 0 : _res$data2$content.price) {
    console.log('wrong: ' + res.data.contents.price);
  }
}

function main() {
  optionalChain();
}

main(); // 直接运行结果如下
// if (res?.data?.contents?.price) {
//   ^
// SyntaxError: Unexpected token .
// 可以通过 npm start 使用babel转换为 lib 目录中可运行的格式
// origin: 22
// now: 22