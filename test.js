//字符串的捕获，又正则的exec，字符串的match
//replace字符串的替换方法，执行一次，只能替换一次
// var ary = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
// var str = '2015';
// str = str.replace(/\d/g, function () {
//     // 捕获的内容当作索引来获取
//     return ary[arguments[0]]
// })
//console.log(str);

//获取出现最多的字母
var str = "wuxianqiangwwww";
var obj = {};
str.replace(/[a-z]/gi, function () {
    // 出现一次累加1
    var val = arguments[0];
    obj[val] >= 1 ? obj[val] += 1 : obj[val] = 1;
    

})
//假设法//获取对象里面的最大值
var maxNum = 0;
for (var item in obj) {
    obj[item] > maxNum ? maxNum = obj[item] : null;
}
console.log(maxNum);
var ary = [];
for(var item in obj) {
    obj[item] === maxNum ? ary.push(item) : null;
}
console.log(ary);
console.log("出现最多的字母是" + ary.toString() + "出现" + maxNum);

