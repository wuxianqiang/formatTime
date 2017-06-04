// typeof数据类型检测

// instanceof检测某个实例是否属于这个类
//不能用来出来字面量创建出来的基本数据类型的值,只要再当前实例的原型链上，用它检测就会返回true

// constructor构造函数

// Object,也是函数数据类型的，所有的内置类都是函数数据类型的

//hasOwnProperty检测私有属性
//propertyIsEnumerable原型上的方法都是不可枚举的

// console.log(typeof "w");
// console.log(typeof 12);
// console.log(typeof Object);//function
// console.log(typeof Function);
// console.log(typeof null);//object
// //typeof有自己的局限性，typeof null会返回object
// console.log(typeof typeof(12))//string,typeof返回的值时字符串类型的
// function fn (callBack) {
//     // body
//     callBack && callBack();
// }
// function fn2 (a) {
//     // body
//     a = a || 0;
// }
var str = "w";//字面俩方式创建
var str2 = new String("w");//实例方式创建
var ary = [];
console.log(str instanceof String);//false
console.log(str2 instanceof String);//true
console.log(ary instanceof Array);//true
console.log(ary instanceof Object);//true
//注意，只有实例方式创建出来的，才属于标准的实例，js的松散性
