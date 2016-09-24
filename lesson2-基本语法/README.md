####基本数据类型

*Number数据类型(整型，实型)
*字符串类型(“hello world” 或者 ‘hello world’)
*布尔类型(true,false)
*空值 Null


###高级数据类型
*数组
下面的代码创建名为 cars 的数组：
`var cars=new Array();
cars[0]="Audi";
cars[1]="BMW";
cars[2]="Volvo";`

*对象
对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：
var person={firstname:"Bill", lastname:"Gates", id:5566};
上面例子中的对象 (person) 有三个属性：firstname、lastname 以及 id。
空格和折行无关紧要。声明可横跨多行：
`var person={
	firstname : "Bill",
	lastname  : "Gates",
	id        :  5566
};`
获取对象属性的两种方式:
`name=person.lastname;
name=person["lastname"];`

##变量
·var orderNumber  
orderUserid  
_x=0  
y=1 
z=2`
*敏感的大小写
*特殊的空格和换行符

##JS算数运算符
+ (同时为字符运算符)
-
*(shift+8)
% 取余数
++
--

##JS比较运算符
==
！=
<
>
<=
>=

##JS逻辑运算符
！
&&
||
^(按位异或) 


##JS程序控制

*if条件语句
*for循环语句
*while循环语句
*switch选择分支语句


##JS函数
函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。
`function 函数名称(参数1，参数2，参数3)
{
	函数体；
	return 返回的值；（可以不存在返回值）
}`

##debugger;
如何调试js工具的使用
·{
	code....
	debugger；//加入你想要的调试模块
	code....
}·





