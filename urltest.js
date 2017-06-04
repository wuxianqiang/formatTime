//
var str = "http://kbs.sports.qq.com/kbsweb/game.htm?mid=100002&cid=11776&app=1.0"
// var obj = {
//     mid: 10000,
//     cid: 11776,
//     app=1.0
// };
var reg = /([^?=&]+)=([^?=&]+)/g;
var obj = { };
str.replace(reg,function () {
    // 用replace
    obj[arguments[1]] = arguments[2];
})
console.log(obj);

function exe(reg,str) {
    // 用exec
    var obj = {};
    var res = reg.exec(str);
    while (res) {
        obj[res[1]] = res[2];
        res = reg.exec(str);
    }
    return obj;
}
console.log(exe(reg,str));