// 声明链表的节点
class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}

// 声明链表的数据结构
class NodeList {
    constructor(arr) {
        // 声明链表的头部节点
        let head = new Node(arr.shift());
        let next = head;
        arr.forEach(item => {
            next.next = new Node(item);
            next = next.next;
        });
        return head
    }
}

// 交换两个节点的值
const swap = (p, q) => {
    const temp = p.value;
    p.value = q.value;
    q.value = temp;
};

// 寻找基准元素的节点
const partion = (begin, end) => {
    let value = begin.value;
    let p = begin;
    let q = begin.next;
    while (q !== end) {
        if (q.value < value) {
            p = p.next;
            swap(p, q);
        }
        q = q.next;
    }
    // 让基准元素跑到中间去
    swap(p, begin);
    return p;
};

function sort(begin, end) {
    if (begin!==end) {
        let part = partion(begin,end);
        sort(begin,part);
        sort(part.next,end);
    }
}

let head = new NodeList([4,1,3,345,6,7,34,23,7]);
sort(head);
let res = [];
let next = head;
while (next) {
    res.push(next.value);
    next=next.next
}
console.log(res);






