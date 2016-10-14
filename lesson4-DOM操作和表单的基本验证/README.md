##JavaScript HTML DOM
当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

##HTML DOM 树
![alt text](https://raw.githubusercontent.com/HangzhouPolytechnic/HappyJs/master/Domtree.gif "Title")

通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。

* JavaScript 能够改变页面中的所有 HTML 元素
* JavaScript 能够改变页面中的所有 HTML 属性
* JavaScript 能够改变页面中的所有 CSS 样式
* JavaScript 能够对页面中的所有事件做出反应

通常，通过 JavaScript，您需要操作 HTML 元素，首先必须找到该元素

##查找 HTML 元素
有三种基本方法来做这件事

* 通过 id 找到 HTML 元素（唯一）
* 通过标签名找到 HTML 元素  （唯一 或 集合）
* 通过类名找到 HTML 元素 （唯一 或 集合）


##获取或修改 HTML 元素的属性
获取 HTML 元素的属性
```javascript
var content=document.getElementById(id).innerHTML;
```
如何改变 HTML 元素的样式
```javascript
document.getElementById(id).style.color='red';
```

