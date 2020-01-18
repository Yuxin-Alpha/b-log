## path

路径模块是常用模块，笔者先介绍几个API。

### basename -> 取一个文件的文件名

```javascript
console.log(path.basename('1.js', '.js')) // 1
```

### extname -> 取一个文件的拓展名

```javascript
console.log(path.basename('1.js')) // .js
```

### join -> 将参数拼接成路径

```javascript
console.log(path.join('a', 'b')) // a/b
```

### __dirname&__filename -> 目录名与文件名

```javascript
console.log(__dirname) //  /Users/personal/b-blog
console.log(__filename) // /Users/personal/b-blog/test.js
```

### resolve -> 将一个文件路径转化为绝对路径

```javascript
console.log(path.resolve('test.js')) // /Users/personal/b-blog/test.js
```