// 1.
// function test() {
//     var n=4399;
//     function add() {
//         n++;
//         console.log(n);
//     }
//     return {n, add}
// }
//
// var res = test();
// var res2 = test();
// res.add();
// res.add();
// console.log(res.n);
// res2.add();

//2.
function foo(a,b){
    console.log(b);
    return {
        foo:function(c){
            return foo(c,a);
        }
    }
}

var func1=foo(0);
func1.foo(2);
func1.foo(3);
var func2=foo(0).foo(1).foo(2).foo(3);
var func3=foo(0).foo(1);
func3.foo(2);
func3.foo(3);