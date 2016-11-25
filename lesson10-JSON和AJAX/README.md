##JSON
JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它基于ECMAScript的一个子集。 
JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C、C++、C#、Java、JavaScript、Perl、Python等）。
这些特性使JSON成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成(一般用于提升网络传输速率)。

#JSON语法
* 数据在键值对中
* 数据由逗号分隔
* 花括号保存对象
* 方括号保存数组


#JSON的值
* 数字（整数或浮点数）
* 字符串（在双引号中）
* 逻辑值（true 或 false）
* 数组（在方括号中）
* 对象（在花括号中）
* null


##例子

```
{
    "people":[
        {"firstName":"Brett","lastName":"McLaughlin","email":"aaaa"},
        {"firstName":"Jason","lastName":"Hunter","email":"bbbb"},
        {"firstName":"Elliotte","lastName":"Harold","email":"cccc"}
    ]
}
```

```
{
    "programmers": [{
        "firstName": "Brett",
        "lastName": "McLaughlin",
        "email": "aaaa"
    }, {
        "firstName": "Jason",
        "lastName": "Hunter",
        "email": "bbbb"
    }, {
        "firstName": "Elliotte",
        "lastName": "Harold",
        "email": "cccc"
    }],
    "authors": [{
        "firstName": "Isaac",
        "lastName": "Asimov",
        "genre": "sciencefiction"
    }, {
        "firstName": "Tad",
        "lastName": "Williams",
        "genre": "fantasy"
    }, {
        "firstName": "Frank",
        "lastName": "Peretti",
        "genre": "christianfiction"
    }],
    "musicians": [{
        "firstName": "Eric",
        "lastName": "Clapton",
        "instrument": "guitar"
    }, {
        "firstName": "Sergei",
        "lastName": "Rachmaninoff",
        "instrument": "piano"
    }]
}
```




