/**
 * 可选链式调用
 * 用处：优化对象的对层级属性访问判空
 */
function optionalChain() {
  const res = {
    code: 200,
    data: {
      contents: {
        price: 22
      }
    }
  }
  // 传统方式
  if (res && res.data && res.data.contents && res.data.contents.price) {
    console.log('origin: ' + res.data.contents.price);
  }
  // 可选链式
  if (res?.data?.contents?.price) {
    console.log('now: ' + res.data.contents.price);
  }
}
function main() {
  optionalChain();
}