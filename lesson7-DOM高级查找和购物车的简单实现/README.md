##JS获取父节点方法
找元素的基本方法
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
* parentObj.childNodes
注意：经测试发现，在IE7上获取的是直接子节点的数组，而在Firefox2.0.0.11上获取的是所有子节点即包括子节点的子节点。
* parentObj.getElementsByTagName(tagName)
例如：parentObj.getElementsByTagName('A')返回已知的子节点中的所有超链接。

##通过父节点获取兄弟节点

* neighbourNode.previousSibling 
获取已知节点（neighbourNode）的前一个节点，这个属性和前面的firstChild、lastChild一样都似乎可以递归使用的。获取哥哥节点，在它前一个
* neighbourNode.nextSibling
获取已知节点（neighbourNode）的下一个节点，同样支持递归。获取弟弟节点，在它后一个
##通过子节点获取父节点

* childNode.parentNode
获取已知节点的父节点
