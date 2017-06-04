var str = "2015-12-3 12:25:23";
// var twoSize = str.split(" ");，用正则，不要用字符串拆分了
var rgg = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})$/g
//用正则经行全部匹配
var arr = [];
str.replace(rgg, function () {
    arr = [].slice.call(arguments);//捕获的小分组非常的多，把它转换为数组，再截取想要的内容
    arr = arr.slice(1, 7);
})
console.log(arr);//[ '2015', '12', '3', '12', '25', '23' ]//数组里面的都是字符串




var newStr = "2015年12月3日 12时25分23秒";
var resStr = "{0}年{1}月{2}日 {3}时{4}分{5}秒";
var ary = [2015, 12, 13, 4, 30, 56];
var reg = /{(\d+)}/g;
var a = resStr.replace(reg, function () {
    // body
    return ary[arguments[1]] > 10 ? ary[arguments[1]] : "0" + ary[arguments[1]];
});
console.log(a);//2015年12月13日 04时30分56秒


String.prototype.myFormatTime = function myFormatTime() {
    // body
    var reg = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})$/g;
    var arr = [];
    this.replace(reg, function () {
        arr = ([].slice.call(arguments)).slice(1, 7);;//捕获的小分组非常的多，把它转换为数组，再截取想要的内容
    });
    var format = arguments[0] || "{0}年{1}月{2}日 {3}:{4}:{5}";//参数设置默认值
    return format.replace(/{(\d+)}/g, function () {
        // body
        var val = arr[arguments[1]];
        return val.length === 1 ? "0" + val : val;//超过两位经行补零
    })
}
console.log(str.myFormatTime("{0}年{1}月{2}日"))//2015年12月03日
console.log(str.myFormatTime("{3}时{4}分{5}秒"))//12时25分23秒
console.log(str.myFormatTime())//2015年12月03日 12:25:23

