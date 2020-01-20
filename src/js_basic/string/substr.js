/**
 * 首先，这个方法即将被废弃，官方已不推荐使用
 * 作用：返回从索引`index`开始的`length`个字符的字符串
 * 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr
 */
var log = console.log;
var str = 'hello world!'
// log(str.substr(2, 3));
// // llo
// log(str.substr(-3, 2));
// // ld
// // 如果索引为负数，则
// log(str.substr(0, 3));
// hel
// log(null.substr(0, 3));

// 试着实现substr
function _substr(startIndex, length = this.length) {
  // debugger
  // log(Object.prototype.toString(this));
  // log(this.toString());
  // log(typeof this);
  // log(this.length);
  const len = this.length;
  if (typeof this !== 'object' && !this.length) {
    throw('only string can be treated with substr method')
  }
  const chars = this.split('');
  let result = '';
  // handle startIndex
  // if ()
  if (typeof startIndex !== 'number' || Math.abs(startIndex) > len) {
    startIndex = 0;
  } else if (startIndex < 0) {
    startIndex = startIndex + len;
  }
  // handle length
  if (typeof length !== 'number' || length < 0 || length === 0) {
    return '';
  }
  // handle main logic
  for (let i = 0; i < chars.length; i ++) {
    if (result.length !== length && !(i < Math.round(startIndex))) {
      result += chars[i];
    }
  }
  return result
}
Object.prototype._substr = _substr;
// log(str._substr(2, 3));
// log(str._substr(0, 3));
// log(str._substr(-3, 2));
// // llo
// // hel
// // ld
// log(str._substr(13, 2));
// // he
// log(str._substr(13));
// // hello world!
// log(str._substr(13, -2));

// log(str.substr(3, 2))
// log(str.substr(4, 2))
// log(str.substr(3.4, 2));
// log(str._substr(3.4, 2))
log(str.substr('test'));
// hello world!
log(str.substr('test', 2));
// he
log(str._substr('test'));
// hello world!
log(str._substr('test', 2));
// he
log(str.substr(3, 'test'));
log(str._substr(3, 'test'));


/**
 * 官方对于【Microsoft's JScript 不支持负的 start 索引】的衬垫代码
 */
if ('ab'.substr(-1) !== 'b') {
  String.prototype.substr = function(substr) {
    return function(start, length) {
      if (start < 0) start = start + this.length;
      return substr.call(this, start, length)
    }(String.prototype.substr)
  }
}