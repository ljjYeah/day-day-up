let observerIds = 0;
let observedIds = 0;

// 订阅者
class Subscriber {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
    this.id = observerIds++;
  }

  subscribe(type) {
    this.dispatcher.subscribe(type, this);
  }

  doUpdate(type, param) {
    console.log(`接收到${param}`);
  }
}

// 发布者
class Publisher {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
    this.id = observedIds++;
  }

  publish(type) {
    this.dispatcher.publish(type, this);
  }
}

class Dispatcher {
  constructor() {
    this.dispatcher = {};
  }

  // 订阅
  subscribe(type, subscriber) {
    if (!this.dispatcher[type]) {
      this.dispatcher[type] = [];
    }
    this.dispatcher[type].push(subscriber);
  }

  //退订
  unsubscribe(type, subsciber) {
    let subscribers = this.dispatcher[type];
    if (!subscribers || subscribers.length) return;
    this.dispatcher[type] = subscribers.filter(item => item.id !== subsciber.id)
  }

  // 发布
  publish(type, param) {
    let subscribers = this.dispatcher[type];
    if (!subscribers || subscribers.length) return;
    subscribers.forEach(item => item.doUpdate(type, param))
  }
}

class Reader extends Subscriber{
  constructor(name, dispatcher) {
    super(dispatcher);
    this.name = name;
  }
  doUpdate(type, reader){
    console.log(`${this.name}阅读了--${type}--公众号文章`);
  }
}

class Wx extends Publisher{
  constructor(name, dispatcher) {
    super(dispatcher);
    this.name = name;
  }
  publishArticle(title) {
    this.publish(title)
  }
}

let dispatcher = new Dispatcher();
// 读者
const ming = new Reader('小明', dispatcher);
const hong = new Reader('小红', dispatcher);
// 微信公众号
const wx1 = new Wx('小森家', dispatcher);
const wx2 = new Wx('静雅课堂', dispatcher);

ming.subscribe('小森家');
hong.subscribe('静雅课堂');

wx1.publishArticle('9月期刊');
wx2.publishArticle('单身勿进');



