# EasyH5 —— 快速搭建移动端H5

### 导语
> EasyH5是一个用于移动端快速开发H5的轻量级JavaScript框架，它不依赖于任何现有的JavaScript库。

### 快速上手
获得 EasyH5后，将其部署到你的项目目录（或静态资源服务器），你只需要引入下述一个文件：
```
./build/easyh5.js
```

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title>开始使用EasyH5</title>
</head>
<body>
    <div id="my-easyh5">
        <!-- 将my-easyh5下div的传入EasyH5对象中，就会被渲染为一个页面 -->
        <div id="test">
            <!-- 这里放你希望在test页面下的资源（通常为图片） -->
        </div>
    </div>
<script src="./build/easyh5.min.js"></script>
<script>
//一般直接写在一个js文件中
var easyh5 = new EasyH5({
	        el: '#my-easyh5',
	        page: ["test"],
        });
</script>
</body>
</html>
```