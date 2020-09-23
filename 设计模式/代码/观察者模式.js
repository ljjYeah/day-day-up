let observerIds = 0;
let observedIds = 0;

// 观察者类
class Observer {
  constructor() {
    this.id = observerIds++;
  }

  //观察到变化后的处理
  update(obj) {
    console.log(`观察者${this.id}:检测到被观察者${obj.id}变化`);
  }
}

// 被观察者
class Observed {
  constructor() {
    this.obervers = [];
    this.id = observedIds++;
  }

  // 添加观察者
  addObserver(observer) {
    this.obervers.push(observer);
  }

  // 删除观察者
  removeObserver(observer) {
    this.obervers = this.obervers.filter(item => item.id !== observer.id)
  }

  //通知所有的观察者
  notify() {
    this.obervers.forEach(item => {
      item.update(this);
    })
  }
}

let observed = new Observed();
let observer1 = new Observer();
let observer2 = new Observer();

observed.addObserver(observer1);
observed.addObserver(observer2);

observed.notify()

