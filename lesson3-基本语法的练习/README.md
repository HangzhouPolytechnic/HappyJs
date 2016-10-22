##练习题

* 书写一个函数，要求将字符串倒着打印出来：例：输入hello world 输出dlrow olleh
```javascript
function reverseString(string){
		//普通方法
		/*var content="";  
		for(var index=string.length-1;index>=0;index--){
			content=content+string[index];
		}
		return content;	*/
		
		return string.split("").reverse().join("");//现将字符串转换成数组 再进行反转 再将数组通过空字符串拼接
}
```
* 截取字符串abcdefg的efg(腾讯2015年校招题)
* 打印出1-10000之间的所有对称数(如121,1331,2442)
```javascript
function reverseString(string){
		return string.split("").reverse().join("");
	}
	
	for(i=1;i<10000;i++){
		if(i==reverseString(i.toString())){
			console.log(i);
		}
	}
```
* 计算等差出列1+2+3+.....1000的值

```javascript
var result=0;
for(var i=0;i<=1000;i++){
	result+=i;// result=result+i 简写
}
```
* 一个新入职（25岁），月工资为2000元的员工，每年涨工资20%，到退休时（60岁）的月工资是多少？ 直到退休拿了多少钱

```javascript
var money=2000;
var get_money=0;
for(age=25;age<=60;age++){
	for(month=1;month<=12;month++){
		get_money=get_money+money;
	}
	money=money*1.2;
}
console.log("60岁薪资:"+money+"直到退休拿了:"+get_money);
```

* 打印出九九乘法表
* 100-200间的3和7的倍数
* 正整数十进制转化成二进制 js函数
```javascript
function conver10to2(t){
		var array=[];
		while(t!=1){
		   if(t%2==0){
			array.push(0);
		   }else{
			array.push(1);
		   }
		   t=parseInt(t/2);//
		}
		array.push(1);
		return array.reverse().join("");
	}
```
* 下面程序运行后alert(n)的内容是什么?(腾讯前端面试题)
```javascript
//
var n = 0;
function a() {
    var n = 10;
    function b() {
        n++;
    }
    b();
    return b;
}
var c = a();
c();
alert(n);
```
* 判断一个字符串中出现次数最多的字符，统计这个次数




