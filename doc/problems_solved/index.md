# 问题记录

定位：对遇到的问题做记录及思考过程
进阶：形成解决方案

## 常见交互

- 输入框输入时实时校验，符合条件时按钮变成可点击
- [滑动穿透（遮罩下不允许滑动）](./problems/scroll_strike.md)

## 常见功能实现

- [监听网页刷新](https://blog.csdn.net/halo1416/article/details/86705437)
- [数组倒序](./problems/revert_array.js)

## 常见bug

- 属性或对象因未判空而访问其方法报错(例如：undefined.toString())
  - 能否写一个npm包用于判空处理

## 常见疑惑

- [option请求](https://stackoverflow.com/questions/1256593/why-am-i-getting-an-options-request-instead-of-a-get-request)

## 常见误区

- [sessionStorage](./mislead/sessionStorage.md)

## 典型问题案例

- [mpvue刷新](./problems/mpvue.md)

## 问题解决方法

### 最小化代码复现

重新创建同技术栈项目（脚手架初始化新项目），逐渐累加到现状，定位问题所在

