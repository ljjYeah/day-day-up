let subscriberIds = 0;
let publisherIds = 0;

class Dispatcher {
  constructor() {
    this.dispatcher = {};
  }

  // 订阅
  on(type, callback) {
    if (!this.dispatcher[type]) {
      this.dispatcher[type] = [];
    }
    this.dispatcher[type].push(callback);
  }

  // 发布
  emit(type, ...args) {
    let subscribers = this.dispatcher[type];
    if (!subscribers || !(subscribers.length)) return;
    subscribers.forEach(callback => {
      callback(...args)
    })
  }
}

const dispatcher = new Dispatcher()

// 订阅者
class Subscriber {
  constructor() {
    this.id = subscriberIds++;
  }

  on(type, callback) {
    dispatcher.on(type, callback);
  }
}

// 发布者
class Publisher {
  constructor() {
    this.id = publisherIds++;
  }

  emit(type, ...args) {
    dispatcher.emit(type, ...args);
  }
}

class Reader extends Subscriber{
  constructor(name, dispatcher) {
    super(dispatcher);
    this.name = name;
  }
}

class Wx extends Publisher{
  constructor(name) {
    super();
    this.name = name;
  }
  publishArticle(...args) {
    this.emit(this.name, ...args)
  }
}

// 读者
const ming = new Reader('小明');
const hong = new Reader('小红');
// 微信公众号
const wx1 = new Wx('xsj');
const wx2 = new Wx('jylesson');

ming.on('xsj', function () {
  console.log('小红接收到小森家的文章啦');
});
ming.on('jylesson', function () {
  console.log('小明接收到静雅课堂的文章啦');
});
hong.on('jylesson', function () {
  console.log('小红接收到静雅课堂的文章啦');
});

wx1.publishArticle('9月期刊');
wx2.publishArticle('单身勿进');



