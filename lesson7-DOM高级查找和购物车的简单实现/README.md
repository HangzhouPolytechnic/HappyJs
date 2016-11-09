##JS获取父节点方法
* document.getElementById(elementId)

该方法通过节点的ID，可以准确获得需要的元素，是比较简单快捷的方法。
注意:如果页面上含有多个相同id的节点，那么只返回第一个节点。

* document.getElementsByClassName

该方法是通过节点的class获取节点，从名字可以看出，这个方法返回的不是一个节点元素，而是具有同样名称的节点数组。然后，我们可以通过要获取节点的某个属性来循环判断是否为需要的节点。

* document.getElementsByTagName(tagName)

该方法是通过节点的标签获取节点，从名字可以看出，这个方法返回的不是一个节点元素，而是具有同样名称的节点数组。然后，我们可以通过要获取节点的某个属性来循环判断是否为需要的节点。

* document.getElementsByName(elementName)

该方法是通过节点的name获取节点，从名字可以看出，这个方法返回的不是一个节点元素，而是具有同样名称的节点数组。然后，我们可以通过要获取节点的某个属性来循环判断是否为需要的节点。

##通过父节点获取子节点

* parentObj.firstChild

如果节点为已知节点（parentObj）的第一个子节点就可以使用这个方法。可以以递归使用的

* parentObj.lastChild

如果节点为已知节点（parentObj）的最后一个子节点。可以以递归使用的

* parentObj.children

注意：经测试发现，在IE7上获取的是直接子节点的数组，而在Firefox2.0.0.11上获取的是所有子节点即包括子节点的子节点。

* parentObj.getElementsByTagName(tagName) 

例如：parentObj.getElementsByTagName('a')返回已知的子节点中的所有超链接。

##通过父节点获取兄弟节点

* neighbourNode.previousSibling<br/>
获取已知节点（neighbourNode）的前一个节点，这个属性和前面的firstChild、lastChild一样都似乎可以递归使用的。获取哥哥节点，在它前一个
* neighbourNode.nextSibling<br/>
获取已知节点（neighbourNode）的下一个节点，同样支持递归。获取弟弟节点，在它后一个

### nextSibling 与 nextElementSibling的区别 
注意:同样适用于previousSibling和previousElementSibling

nextElementSibling 总会返回一个节点中的Element元素，nextSibling 能够返回一个节点当中的任何内容（包含但不限于 Element 及 Text 节点）。 下面的这个例子就非常好的体现了这点。
```html
<p><span id="span-01">Here is span-01</span>
Some text at the top level
<span id="span-02">Here is span-02</span></p>
```
当我获取 span-01 的下一个兄弟节点时，用

```javascript
document.getElementById('span-01').nextElementSibling //获取的<span id="span-02">Here is span-02</span></p>
```

```javascript
document.getElementById('span-01').nextSibling;//就返回了一个文本节点 "Some text at the top level"!
```


##通过子节点获取父节点

* childNode.parentNode
获取已知节点的父节点
