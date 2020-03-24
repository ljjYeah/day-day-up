function test() {
    var n=4399;
    function add() {
        n++;
        console.log(n);
    }
    return {n, add}
}

var res = test();
var res2 = test();
res.add();
res.add();
console.log(res.n);
res2.add();