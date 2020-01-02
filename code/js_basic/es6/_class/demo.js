// 生成实例对象的传统方法：构造函数

function oldWayToInstance() {
  function Point(x, y) {
      this.x = x;
      this.y = y;
  }

  Point.prototype.toString = function () {
      return '(' + this.x + ', ' + this.y + ')';
  }

  var p = new Point(3, 5);
  console.log(p);
}

// oldWayToInstance();
// Point { x: 3, y: 5 }

// ES6引入Class概念，作为对象的模板
// class可视作语法糖——