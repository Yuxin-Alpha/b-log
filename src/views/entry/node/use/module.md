## 模块化

对前端模块化了解的开发者应该都知道，前端模块化的实现是靠<strong>eval()</strong>实现的，但是eval会有一个问题，就是其执行环境是不干净的，也就是说引入的模块上下文会跟模块外的上下文融合，这样模块内部的环境就可以获取模块外的变量，这样会出现一些隐藏的bug，因此Node在处理模块化的时候专门写了一个包叫做<strong>vm</strong>