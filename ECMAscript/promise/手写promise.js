function CutePromise(executor) {
  this.value = null;
  this.reason = null;
  this.status = 'pending';

  this.onResolvedQueue = [];
  this.onrejectedQueue = [];

  var self = this;

  function resolve(value) {
    if (self.status !== 'pending') {
      return;
    }
    self.value = value;
    self.status = 'resolved';
    setTimeout(function () {
      self.onResolvedQueue.forEach(resolved => resolved(self.value))
    })
  }

  function reject(reason) {
    if (self.status !== 'pending') {
      return;
    }
    self.reason = reason;
    self.status = 'rejected';
    setTimeout(function () {
      self.onrejectedQueue.forEach(rejected => rejected(self.reason))
    })
  }

  executor(resolve, reject)
}

CutePromise.prototype.then = function (onResolved, onRejected) {
  if (typeof onResolved !== 'function') {
    onResolved = function (x) {
      return x;
    }
  }

  if (typeof onRejected !== 'function') {
    onRejected = function (e) {
      return e;
    }
  }

  var self = this;
  if (self.status === 'resolved') {
    onResolved(self.value)
  } else if (self.status === 'rejected') {
    onRejected(self.reason);
  } else if (self.status === 'pending') {
    self.onResolvedQueue.push(onResolved);
    self.onrejectedQueue.push(onRejected);
  }

  return this;
}


new CutePromise((resolve, reject) => {
  resolve('成了');
  reject('错了')
}).then(value => {
  console.log(value);
}, (reason) => {
  console.log(reason);
})


new CutePromise((resolve, reject) => {
  reject('错了')
}).then(value => {
  console.log(value);
}, (reason) => {
  console.log(reason);
})
