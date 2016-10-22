##JavaScript HTML DOM
当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

##HTML DOM 树
![alt text](https://raw.githubusercontent.com/HangzhouPolytechnic/HappyJs/master/lesson4-DOM%E6%93%8D%E4%BD%9C%E5%92%8C%E8%A1%A8%E5%8D%95%E7%9A%84%E5%9F%BA%E6%9C%AC%E9%AA%8C%E8%AF%81/Domtree.gif "Title")

通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。

* JavaScript 能够改变页面中的所有 HTML 元素
* JavaScript 能够改变页面中的所有 HTML 属性
* JavaScript 能够改变页面中的所有 CSS 样式
* JavaScript 能够对页面中的所有事件做出反应

通常，通过 JavaScript，您需要操作 HTML 元素，首先必须找到该元素

##查找 HTML 元素
有三种基本方法来做这件事，无论是js 还是 jquery

* 通过 id 找到 HTML 元素（唯一）
```javascript
document.getElementById("span1") //元素id编号 <span id="span1"></span>
//jquery 写法
$('#span1')
```
* 通过标签名找到 HTML 元素  （集合）
```javascript
document.getElementsByTagName("p");// 所有的标签集合  <p> <span>
//jquery 写法
$('p')
```
* 通过类名找到 HTML 元素 （集合）
```javascript
/*
<span class="class1"></span>
<span class="class1"></span>
<p class="class1"></p>
*/
document.getElementsByClassName("class1");// 找到所有类为"class1"的元素 
//jquery 写法
$('.class1')
```
* 批量修改集合元素的属性
```javascript
  //找出 class为 my_span 的标签集合 
	var n=document.getElementsByClassName("my_span").length; //这边 可以换成 getElementsByTagName 获取标签元素集合 
	for(i=0;i<n;i++){
		document.getElementsByClassName("my_span")[i].innerHTML="想要修改的值";
	}
```
##获取或修改 HTML 元素的属性
获取 HTML 元素的属性
```javascript
var content=document.getElementById(id).innerHTML;
```
如何改变 HTML 元素的样式
```javascript
document.getElementById(id).style.color='red';
```

