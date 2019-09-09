//正则表达式

let str='good good';
let reg=/\d+/;
reg.test(str);
console.log(reg.test(str))
//捕获
str='2019-08-12'; 
console.log(reg.exec(str))
//编写正则表达式
//1.字面量方式  两个斜杆之间的 是元字符
reg =/\d+/;
//2.2个参数,元字符,     修饰字符(转义)
let reg2=new RegExp("\\d+");
reg2.test(str);
console.log(reg2.exec(str))
//常用元字符
//量词 * 0到多次  + 1到多次 ?零次或一次 {n}次 {n,} n到多次 {n,m}
//特殊元字符 单个或组合
// \ 转义字符 (普通=>特殊=>普通)
// . 除\n 以外的任何字符
// ^ 开始
// $ 结束
// \n \d \D 
// \w 数字,字母,下划线
// \s 空白字符 (空格,制表符,换页符)
// \t
// x|y
// [xyz] xyz中一个
// [^xy] 非
// [a-z]
// \b 单词边界
// () 分组
// (?:) (?=) (?!)

//普通元字符
str='good good';
reg=/good/; 
console.log(reg.exec(str))
//修饰符 img
// i ignoreCase 忽略大小写
// m multiline 多行
// g global 全局
console.log(/A/.test('lalala'))
console.log(/A/i.test('lalala'))
reg=/^\d/;          //数字开头
reg=/\d$/;          //数字结尾
reg=/\d+/;          //包含
reg=/^1\d{10}$/;    //十一位数字
console.log(reg.exec('13504269699'))
reg=/^2.3$/         //2 任意字符 3
reg=/^2\.3$/
console.log(reg.exec('2.3')) //转义.

