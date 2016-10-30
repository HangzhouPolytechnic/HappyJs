##选择题
1.在javascript语言中，当元素失去焦点时触发的事件是
* A.Fouce 
* B.unload 
* C.mouseover 
* D.blur

2.SQL语句中修改表结构的语句是
* A.modify table 
* B.modify structure 
* C.alter table 
* D.alter structure

3.Javascript中String对象的哪个方法可以寻找子字符串并返回该字符串
* A.match() 
* B.indexOf() 
* C.serach() 
* D.concat()

4.下面哪条语句会产生运行错误
* A.var obj=();  
* B.var obj=[];  
* C.var obj={};  
* D.var obj=1;//


5.var a=10;b=20;c=4 那么 ++b+c+a++ 的运算结果是:
* A.34
* B.35
* C.36
* D.37

6.下列的哪一个表达式将返回假：
* A.!(3<=1)
* B.(4>=4)&&(5<=2)
* C.(“a”==”a”) && (“c”!=”d”)
* D.(2<3)||(3<2)

7.以下表达式产生一个0~7之前 （含0,7）的随机整数
* A.Math.floor(Math.random()*6)
* B.A.Math.floor(Math.random()*7)
* C.A.Math.floor(Math.random()*8)
* C.A.Math.ceil(Math.random()*8)

8.在sql语句中，过滤掉重复记录应该用哪个关键词
* A.Union
* B.Unique
* C.DISTINCT
* D.EXISTS


9.Javascript 中制作图片大体按钮的提交效果需要手动提交的方法submit()，以下调用正确的是
* A.submit()
* B.Myform.submit()
* C.Document.myform.submit()
* D.Window.myform.submit()

7.在HTML页面上，当按下键盘上任意一个键会触发的Javascript事件的
* A.onFouce
* B.onBlur
* C.onSubmit
* D.onKeyDown

8.Javascript中产生当前日期的方法是
* A.now()
* B.Date()
* C.New Date()
* D.New Now()

9.HTML页面上编写Javascript代码时,应该编写在()标签中间
* A.script
* B.head
* C.body
* D.javascript

10.分析下面的代码，输出结果a的值是

```javascript
var mystring='I am a student'
var a=mystring.substring(9,13)
```

* A.tude 
* B.tuden 
* C.uden 
* D.udent

11.分析下面的javascript代码，输出的结果s是

```javascript
var s=parseInt(“101中学”)
```
* A.NaN 
* B.101中学 
* C.101 
* D.出现脚本错误

##简答题
* Javascript使得页面后退的方法是什么
* Javascript中设置定时任务和见个任务的方法分别是什么
* <img>标签中的title属性和alt属性分别是什么意思
* 写出一个文本输入框，最大输入字符串为6个字符

```javascript
  <!--写出一个文本输入! 最大输入字符串为6个字符 -->
  <input type="text" value="" id="input_string" oninput="limitString()" maxlength="6" />
  
  function limitString(){
		var inputString=document.getElementById("input_string").value;
		if(inputString.length>6){//当输入的字符超过6位数时候 对输入的字符串进行截取，并且赋值到该input标签内
			console.log(inputString.substr(0,6));
			document.getElementById("input_string").value=inputString.substr(0,6);
		}
	}
```
* 仔细观察下面数据的排列组合，选择你认为最可能出现的情况4，2，12，28，80，（）
* 班级44班人，从A,B,C,D,E五位候选人中选择A的票数为23张B的占票7张，C,D的票数相同，E最少得4票，那么B票的选票（）张

##编程题
* 编写一个小程序计算1+3+5+7+……+99的值
* 写一个js方法，实现6位随机数，要求输出的字符串中既要出现大写字母和小写字母数字

```javascript
	//随机生成1位大写字母
	function randomDaxie(){
		string="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		return string[Math.floor(Math.random()*26)];
	}
	
	//随机生成1位小写字母
	function randomXiaoxie(){
		string="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
		return string[Math.floor(Math.random()*26)];
	}
	//随机生成0~9一个字符
	function randomNumber(){
		return Math.floor(Math.random()*10);	
	}
	//定义一个函数 随机生成6位随机数 该方法不够灵活 且 第一位随机数肯定大写 第二位 小写 第三位是数字
	function randomSixCode(){
		return randomDaxie()+randomXiaoxie()+randomNumber()+randomDaxie()+randomXiaoxie()+randomNumber();
	}

	//以生成随机数的长度为变量
	function randomCode(length){
		var randomCode="";
		for(i=0;i<length;i++){//每一次循环生成一位随机字符
			
			var method=Math.floor(Math.random()*100);//生成0~99 数字
			
			switch(method%3){//取除以3的余数
				case 0: 
					//整除则随机生成一位大写字符
					randomCode+=randomDaxie();
					break;
				case 1:
					//余数为1则随机生成一位小写字符
					randomCode+=randomXiaoxie()
					break;
				case 2:
					//余数为2则随机生成一位数字字符
					randomCode+=randomNumber();
					break;
			}
		}
		return randomCode;//返回随机生成的结果字符串
	}
```


* 写一个js方法去除集合中重复的元素例如：[1,2,3,4,1,2,3,8,9] 得到[1,2,3,4,8,9]
```javascript
var a=[1,2,3,4,1,2,3];

function distinct_siple_array(arr){
		var result=[];
		var map={};//利用对象属性不能重复这个特点 对基本集合元素进行去重操作
		debugger;
		
		//遍历整个数组 foreach 写法 js当中 不存在 foreach 关键词 只有类似foreach的写法
		for(i in arr){
			if(!map[arr[i]]){
				result.push(arr[i]);
				map[arr[i]]=true;//值可以是任意值
			}
		}
		//注意:i变量”用来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
		/*
		for(i=0;i<arr.length;i++){
			if(!map[arr[i]]){
				result.push(arr[i]);
				map[arr[i]]=true;//值可以是任意值
			}
		}
		*/
		return result;
	}
	
	distinct_siple_array(a)
```
