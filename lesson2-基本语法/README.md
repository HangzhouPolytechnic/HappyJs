## 基本数据类型
* Number数据类型(整型，实型)
* 字符串类型(“hello world” 或者 ‘hello world’)
* 布尔类型(true,false)



## 高级数据类型

* 数组
下面的代码创建名为 cars 的数组：
```javascript
var cars=new Array();
cars[0]="Audi";
cars[1]="BMW";
cars[2]="Volvo";
```

* 对象
对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：
```javascript
var person={firstname:"Bill", lastname:"Gates", id:5566};
```
上面例子中的对象 (person) 有三个属性：firstname、lastname 以及 id。
空格和折行无关紧要。声明可横跨多行：<br>
```javascript
var person={
	firstname : "Bill",
	lastname  : "Gates",
	id        :  5566
};
```
获取对象属性的两种方式:
```javascript
name=person.lastname;
name=person["lastname"];`
```

## 特殊数据类型

* 转义字符

转义字符|描述|转义字符|描述
---|---|---|---
\n|回车换行|\r|换行|
\t|Tab空格|\\\|反斜杠
\\'|单引号| \\"|双引号|


* 未定义值

1. undefined
变量没有复制，或者赋予一个不存在的属性值

2. NaN	
进行计算后得到一个非数字 此时返回NaN

3. 空值 Null
特殊的值表示为空值

**null与undefined的区别是null表示一个变量被赋予一个空值，而undefined则表示变量尚未赋值**

## 变量

```javascript
var orderNumber  
orderUserid  
_x=0  
y=1 
z=2
$a
username
```
* 敏感的大小写
* 特殊的空格和换行符

## JS算数运算符
```javascript
+ (同时为字符运算符)
-
*(shift+8)
% 取余数
++
--
```

## JS比较运算符
```javascript
==
===
！=
!==
<
>
<=
>=
```

## JS逻辑运算符
```javascript
！
&&
||
^ (按位异或) 
```

## JS程序控制

* if条件语句
* for循环语句
* while循环语句
循环语句中使用break;关键词跳出循环，而continue关键字用来阻止当前循环，然后进入下一轮循环
* switch选择分支语句（重点在break的使用）


## JS函数
函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。
```javascript
function 函数名称(参数1，参数2，参数3)
{
	函数体；
	return 返回的值；（可以不存在返回值）
}
```

## debugger;
如何调试js工具的使用
```javascript
{
	code....
	debugger；//加入你想要的调试模块
	code....
}
```

