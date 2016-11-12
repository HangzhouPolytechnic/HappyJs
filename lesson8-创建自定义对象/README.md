##面向对象的语言必须具备三个特征:
* 封装
* 继承
* 多态

这三个基本属性，javascript都可以支持，所以javascript确实是一种弱类型的面向对象的语言

##生成对象的原始模式
假定我们把车看成一个对象（自定义数据类型 拥有独特的属性和方法）它有品牌和型号两个属性，并且拥有启动方法移动

```javascript
var car={"brand":"BMW","model":"X5"};
var car1={"brand":"TOYOTA","model":"AE86"};
```
缺点也显而易见
* 是如果多生成几个实例，写起来就非常麻烦
* 是实例与原型之间，没有任何办法，可以看出有什么联系。

##原始模式的改进
* 我们可以写一个函数，解决代码重复的问题。

```javascript
function Car(brand,model){
　　　this.name=name;
　　　this.model=model;
}
var car1=new Car("BMW","X5");//创建一个Car 对象 命名 car1
var car2=new Car("TOYOTA","AE86");//创建一个Car 对象 命名 car2

//这时car1和car2会自动含有一个constructor属性，指向它们的构造函数。　
cat1.constructor == Car //true
cat2.constructor == Car //true
```
* instanceof运算符
Javascript还提供了一个instanceof运算符，验证原型对象与实例对象之间的关系。　

```javascript
car1 instanceof Car;
car2 instanceof Car;
```

##构造函数模式的问题
构造函数方法很好用，但是存在一个浪费内存的问题。
请看，我们现在为Car对象添加一个不变的属性"type"（种类 车），
再添加一个方法响喇叭。那么，原型对象Car就变成了下面这样：　

```javascript
function Car(name,model){
　　　this.name = name;
　　　this.model = model;
　　　this.type = "汽车";
　　　this.loudSpeaker  = function(){alert("嘀嘀嘀~~");};//对象所引用方法地址不一样
}
var car1=new Car("BMW","X5");
var car2=new Car("TOYOTA","AE86");
car1.loudSpeaker==car2.loudSpeaker;//false
```
表面上好像没什么问题，但是实际上这样做，有一个很大的弊端。那就是对于每一个实例对象，type属性和loudSpeaker()方法都是一模一样的内容，
每一次生成一个实例，都必须为重复的内容，多占用一些内存。这样既不环保，也缺乏效率。　　

##Prototype模式 
Javascript规定，每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。
这意味着，我们可以把那些不变的属性和方法，直接定义在prototype对象上：

```javascript
function Car(name,model){
　　　this.name = name;
　　　this.model = model;
}
Car.prototype.type="汽车";
Car.prototype.loudSpeaker=function(){
         alert('滴滴');
};
```
##Prototype模式的验证方法
* isPrototypeOf()
这个方法用来判断，某个proptotype对象和某个实例之间的关系。

```javascript
alert(Car.prototype.isPrototypeOf(cat1)); //true
alert(Cat.prototype.isPrototypeOf(cat2)); //true
```
* hasOwnProperty()

每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性。　

```javascript
alert(car1.hasOwnProperty("brand")); // true
alert(cat1.hasOwnProperty("type")); // false
```

* in运算符
in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。　

```javascript
alert("brand" in car1); // true
alert("type" in car2); // true
```


