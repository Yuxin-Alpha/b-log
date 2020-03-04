## 全局链接

在全局的npm包下面创建一个快捷键
> npm link

首先我们要在`package.json`里面加入

```json
"bin": {
	"clement": "./bin/www.js"
}
```

然后在最外层的目录下创建`./bin/www.js` 文件，然后在里面书写：`#! /usr/bin/env node`