# 实例
在`ajax`中，请求非本域名的URL，则会出现跨域问题

一个域名为：`http://localhost/`
另一个为：`http://127.0.0.1/`

```
$.ajax({
		url:"http://127.0.0.1:1643/WebSite1/load_info.aspx",//请求的后台地址
		data:null,//请求的数据
		async:false,//是否开启异步功能 默认开启的
		type:'POST', //POST请求呢
		success: function(data){
		    // to render data
		},
		error:function(){
			alert('挤爆了!')
		},
		dataType:"json"// text 
	});
```


```
XMLHttpRequest cannot load http://127.0.0.1:1643/WebSite1/load_.aspx. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1' is therefore not allowed access. 
```

# 解决方法

## 方法1：通过修改Header响应头

> 适用于POST及GET请求

在被请求页面中，设置响应头信息

`Access-Control-Allow-Origin: http://127.0.0.1/`

### PHP 代码如下：
```
header("Access-Control-Allow-Origin: http://127.0.0.1/");
```

### ASPX 第一种方式：
代码如下
```
//  注意在这里设置响应头
Response.AppendHeader("Access-Control-Allow-Origin", "http://127.0.0.1/"); 

string text = "{\"people\":[{\"firstName\":\"Brett\",\"lastName\":\"McLaughlin\",\"email\":\"aaaa\"},{\"firstName\":\"Jason\",\"lastName\":\"Hunter\",\"email\":\"bbbb\"},{\"firstName\":\"Elliotte\",\"lastName\":\"Harold\",\"email\":\"cccc\"}]}";

Response.Write(text);
```

### ASPX 第二种方式：
在web.config文件里配置
```
<system.webServer>  
  <httpProtocol> 
    <customHeaders> 
      <add name="Access-Control-Allow-Methods" value="OPTIONS,POST,GET"/> 
      <add name="Access-Control-Allow-Headers" value="x-requested-with"/> 
      <add name="Access-Control-Allow-Origin" value="http://127.0.0.1*" /> 
    </customHeaders> 
  </httpProtocol> 
</system.webServer> 
```

> 建议不要使用 通配符*，以上代码已经全部替换为需要被请请求的域名地址
>
> `"Access-Control-Allow-Origin", "*"`

## 方法2：使用getJSON方法

如果只是 从远程服务器获取数据，那么用GET请求JSON数据即可

> 适用于 GET 请求

在这里使用jquery的getJSON方法
```
$.getJSON("http://127.0.0.1:1643/WebSite1/load_info.aspx", function(data){
  // to render data
});
```


> 以上仅个人分析，如有其他好的建议或者有哪些错误，欢迎指出！
