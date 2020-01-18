## process属性

属于global对象上面的属性，可以直接通过`process`获取，由于这个对象上面的属性实在太多，

### argv 

运行时传递的参数

例如我在命令行中输入：
我们在`test.js`中简单地打印 <strong> argv </strong>

```javascript
console.log(process.argv)
```

接着我在命令行中执行：

```shell
$node test.js -a node.ts
```

之后我们可以看到：

```javascript
[
  '/usr/local/bin/node',
  '/Users/yuxin/Desktop/personal/b-log/test.js',
  '-a',
  'node.ts'
]
```

第一个代表当前node的执行环境，第二个代表当前执行文件的绝对路径，后面两个是我们通过命令行传入文件中的参数。我们可以通过<em>process.argv.slice(2)</em>这样拿到这两个参数。

### env 

环境变量：在当前运行的命令中 可以设置一个变量 比如<strong>set NODE_ENV=development</strong>(这是windows下设置环境变量的方法)，mac下需要使用<strong>export NODE_ENV=development</strong>

接着我们可以通过env获取这个设置的全局变量

```javascript
console.log(process.env.NODE_ENV)
```

### cwd 

 当前的工作目录（也就是说在哪里执行node命令，它的值就是那个目录）

```javascript
console.log(process.cwd())
```

### nextTick

微任务，只能在node中使用。

```javascript

 // stdin stdout stderr

```