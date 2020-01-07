class _Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var old = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return old.apply(this, arguments)
  }

  return descriptor
}

const math = new _Math();

math.add(2, 3);