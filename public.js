// //exec实现捕获,返回一个数组
// //？：只捕获不pipei
// //量词原字符后加？取消贪婪向，
// //g改变正则的懒惰的性，通过改变lastindex的值
// var reg = /\d+/;
// var reg2 = /\d+?/g;
// var str = "2013and2015";
// // console.log(reg.exec(str));//[ '12345', index: 0, input: '12345' ]
// // console.log(reg2.exec(str));//[ '1', index: 0, input: '12345' ]
// // console.log(reg2.exec(str));//[ '2', index: 1, input: '12345' ]
// var ary = [];
// //正则自带的方法来捕获
// //exec
// var res = reg2.exec(str);
// while (res) {//根据匹配不到返回null的原理写个循环，进行全部捕获
//     ary.push(res[0]);
//     res = reg2.exec(str)
// }
// console.log(ary);//[ '2', '0', '1', '3', '2', '0', '1', '5' ]
// //字符串用来匹配正则的一个方法，把一次性符合正则中的内容全部捕获
// //match不能捕获分组
// var mat = str.match(reg2);
// console.log(mat);//[ '2', '0', '1', '3', '2', '0', '1', '5' ]

// //分组捕获
// String.prototype.match = function match(reg) {
//     // 模仿match方法
//     //this代表我们想操作的实例
//     var ary = [];//所有符合的都存放在数组里面
//     var res = reg.exec(this);
//     while (res) {
//         ary.push(res[0]);
//         res = reg.exec(this);
//     }
//     return ary;
// }

var str = "my name is {0} I form {1} I love {2}";
var ary = ["wu","beiji",13];
var reg = /{(\d+)}/g;//想捕获大括号
//分组不仅仅可以把大正则里面的捕获，还可以用小分组捕获
console.log(reg.exec(str));//["{0}", "0", index: 11, input: "my name is {0} I form {1} I love {2}"]
var newStr = str.replace(reg,function (local,content,index,input) {
    // content捕获的内容,index开始索引,input原始字符串,没一次捕获的值会当作参数传递进来,
    //不用参数，用argument也可以，argument[0]...

    return ary[content];
});
console.log(newStr);

