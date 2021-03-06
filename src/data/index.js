// import bubbleData from './bubble'
// import navData from './nav'
export const bubbleData = [
	{id: 1, text: 'JS', position: 'left'},
	{id: 2, text: 'CSS', position: 'left'},
	{id: 3, text: 'Vue', position: 'left'},
	{id: 4, text: 'React', position: 'left'},
	{id: 5, text: 'Data', position: 'left'},
	{id: 1, text: 'GoLang', position: 'right'},
	{id: 2, text: 'Node', position: 'right'},
	{id: 3, text: 'Linux', position: 'right'},
	{id: 4, text: 'SQL', position: 'right'},
	{id: 5, text: 'Net', position: 'right'},
]

export const navData = [
	{id: 'Base', text: 'Base', children: [
		{id: 'BaseOne', text: 'Data'},
		{id: 'BaseTwo', text: 'Net'},
		{id: 'BaseTwo', text: 'Design'}
	]},
	{id: 'FrontEnd', text: 'FrontEnd', children: [
		{id: 'FrontEndOne', text: 'JavaScript'},
		{id: 'FrontEndTwo', text: 'CSS'},
		{id: 'FrontEndThree', text: 'TypeScript'},
		{id: 'FrontEndFour', text: 'Vue'},
		{id: 'FrontEndFive', text: 'React'},
		{id: 'FrontEndSix', text: 'Webpack'},
	]},
	{id: 'MobileEnd', text: 'MobileEnd', children: [
		{id: 'MobileEndOne', text: 'Flutter'},
	]},
	{id: 'ServerEnd', text: 'ServerEnd', children: [
		{id: 'ServerEndOne', text: 'Node'},
		{id: 'ServerEndTwo', text: 'Socket'},
		{id: 'ServerEndThree', text: 'SQL'},
		{id: 'ServerEndFour', text: 'Golang'},
		{id: 'ServerEndFive', text: 'Docker'}
	]}
]

const JavaScript = {
	time: [
		{ id: 14, text: '完成异步解决方案', date: '2019-12-27', color: 'green', icon: '' },
		{ id: 13, text: '手写reduce', date: '2019-12-26', color: 'red', icon: '' },
		{ id: 12, text: 'new添加', date: '2019-12-24', color: 'red', icon: '' },
		{ id: 11, text: 'Reflect添加', date: '2019-12-23', color: 'green', icon: '' },
		{ id: 10, text: 'Proxy添加', date: '2019-12-20', color: 'green', icon: '' },
		{ id: 9, text: 'type添加', date: '2019-12-19', color: 'yellow', icon: '' },
		{ id: 8, text: '完善this', date: '2019-12-18', color: 'green', icon: '' },
		{ id: 7, text: '手写深拷贝', date: '2019-12-16', color: 'yellow', icon: '' },
		{ id: 6, text: '添加this解析', date: '2019-12-15', color: 'red', icon: '' },
		{ id: 5, text: '对象特性添加', date: '2019-12-14', color: 'yellow', icon: '' },
		{ id: 4, text: '手写call', date: '2019-12-12', color: 'green', icon: '' },
		{ id: 3, text: '手写promise', date: '2019-12-11', color: 'yellow', icon: '' },
		{ id: 2, text: '添加array文档', date: '2019-12-09', color: 'green', icon: '' },
		{ id: 1, text: '博客生成', date: '2019-12-08', color: 'green', icon: '' },
	],
	children: [
		{
			name: "Type",
			menu: 'JavaScript0',
			children: [
				{
					name: "介绍",
					menu: 'javascript/type/type.md'
				},
				{
					name: "类型判断",
					menu: 'javascript/type/judge.md'
				},
				{
					name: "强制类型转化",
					menu: 'javascript/type/transfer.md'
				}
			]
		},
		{
			name: "Array",
			menu: 'JavaScript1',
			children: [
				{
					name: "介绍",
					menu: 'javascript/array/intro.md'
				},
				{
					name: "ES5",
					menu: 'javascript/array/ES5.md'
				},
				{
					name: "使用拓展",
					menu: 'javascript/array/use.md'
				}
			]
		},
		{
			name: "Function",
			menu: 'JavaScript3',
			children: [
				{ name: "this", menu: 'javascript/function/this.md' },
				{ name: "apply()&call()", menu: 'javascript/function/apply.md' },
				{ name: "bind()", menu: 'javascript/function/bind.md' },
				{ name: "闭包&高阶函数", menu: 'javascript/function/high_func.md' },
				{ name: "generator", menu: 'javascript/function/generator.md' }
			]
		},
		{
			name: "Object",
			menu: 'JavaScript4',
			children: [
				{ name: "对象特性", menu: 'javascript/object/attr.md' },
				{ name: "拷贝", menu: 'javascript/object/copy.md' },
				{ name: "new()", menu: 'javascript/object/new.md' },
				{ name: "原型&原型链", menu: 'javascript/object/prototype.md'},
				{ name: "Proxy", menu: 'javascript/object/proxy.md' },
				{ name: "Reflect", menu: 'javascript/object/reflect.md' },
				{ name: "Class", menu: 'javascript/object/class.md' },
				{ name: "装饰器", menu: 'javascript/object/subci.md' }
			]
		},
		{
			name: "异步解决方案",
			menu: 'JavaScript5',
			children: [
				{ name: "介绍", menu: 'javascript/async/open.md' },
				{ name: "发布订阅", menu: 'javascript/async/emit.md' },
				{ name: "观察者", menu: 'javascript/async/observe.md' },
				{ name: "Promise", menu: 'javascript/async/promise.md' },
				{ name: "generator+co", menu: 'javascript/async/generator.md' },
				{ name: "async&await", menu: 'javascript/async/async.md' }
			]
		}
	]
};
const Flutter = {
	time: [
		{ id: 14, text: '完成异步解决方案', date: '2019-12-27', color: 'green', icon: '' },
		{ id: 13, text: '手写reduce', date: '2019-12-26', color: 'red', icon: '' },
		{ id: 12, text: 'new添加', date: '2019-12-24', color: 'red', icon: '' },
		{ id: 11, text: 'Reflect添加', date: '2019-12-23', color: 'green', icon: '' },
		{ id: 10, text: 'Proxy添加', date: '2019-12-20', color: 'green', icon: '' },
		{ id: 9, text: 'type添加', date: '2019-12-19', color: 'yellow', icon: '' },
		{ id: 8, text: '完善this', date: '2019-12-18', color: 'green', icon: '' },
		{ id: 7, text: '手写深拷贝', date: '2019-12-16', color: 'yellow', icon: '' },
		{ id: 6, text: '添加this解析', date: '2019-12-15', color: 'red', icon: '' },
		{ id: 5, text: '对象特性添加', date: '2019-12-14', color: 'yellow', icon: '' },
		{ id: 4, text: '手写call', date: '2019-12-12', color: 'green', icon: '' },
		{ id: 3, text: '手写promise', date: '2019-12-11', color: 'yellow', icon: '' },
		{ id: 2, text: '添加array文档', date: '2019-12-09', color: 'green', icon: '' },
		{ id: 1, text: '博客生成', date: '2019-12-08', color: 'green', icon: '' },
	],
	children: [
		{
			name: "Dart",
			menu: 'Flutter0',
			children: [
				{
					name: "介绍",
					menu: 'flutter/dart/intro.md'
				},
				{
					name: "类型判断",
					menu: 'javascript/type/judge.md'
				},
				{
					name: "强制类型转化",
					menu: 'javascript/type/transfer.md'
				}
			]
		},
		{
			name: "组件",
			menu: 'Flutter1',
			children: [
				{
					name: "介绍",
					menu: 'flutter/component/intro.md'
				},
				{
					name: "类型判断",
					menu: 'javascript/type/judge.md'
				},
				{
					name: "强制类型转化",
					menu: 'javascript/type/transfer.md'
				}
			]
		},
	]
};
const CSS = {
	children: [
		{
			name: "元素",
			menu: "Css1",
			children: [
				{ name: "行内元素", menu: 'css/element/inline.md' },
				{ name: "块级元素", menu: 'css/element/block.md' },
				{ name: "BFC&IFC", menu: 'css/element/FC.md' },
			]
		},
		{
			name: "定位",
			menu: "Css2",
			children: [
				{ name: "float", menu: 'css/pos/float.md' },
				{
					name: "position",
					menu: 'css/pos/position.md'
				}
			]
		},
		{
			name: "CSS3",
			menu: "Css3",
			children: [{ name: "box-shadow", menu: 'css/pos/box_shadow.md'}]
		},
		{
			name: "布局",
			menu: "Css4",
			children: [
				{ name: "居中", menu: 'css/design/middle.md' },
				{ name: "瀑布", menu: 'css/design/design_one.md' }
			]
		},
	]
};
const Node = {
	time: [
		{ id: 14, text: '完成异步解决方案', date: '2019-12-27', color: 'green', icon: '' },
		{ id: 13, text: '手写reduce', date: '2019-12-26', color: 'red', icon: '' },
		{ id: 12, text: 'new添加', date: '2019-12-24', color: 'red', icon: '' },
		{ id: 11, text: 'Reflect添加', date: '2019-12-23', color: 'green', icon: '' },
		{ id: 10, text: 'Proxy添加', date: '2019-12-20', color: 'green', icon: '' },
		{ id: 9, text: 'type添加', date: '2019-12-19', color: 'yellow', icon: '' },
		{ id: 8, text: '完善this', date: '2019-12-18', color: 'green', icon: '' },
		{ id: 7, text: '手写深拷贝', date: '2019-12-16', color: 'yellow', icon: '' },
		{ id: 6, text: '添加this解析', date: '2019-12-15', color: 'red', icon: '' },
		{ id: 5, text: '对象特性添加', date: '2019-12-14', color: 'yellow', icon: '' },
		{ id: 4, text: '手写call', date: '2019-12-12', color: 'green', icon: '' },
		{ id: 3, text: '手写promise', date: '2019-12-11', color: 'yellow', icon: '' },
		{ id: 2, text: '添加array文档', date: '2019-12-09', color: 'green', icon: '' },
		{ id: 1, text: '博客生成', date: '2019-12-08', color: 'green', icon: '' },
	],
	children: [
		{
			name: "基础概念",
			menu: 'node0',
			children: [{ name: "进程与线程", menu: 'node/base/progress.md' }, 
			{ name: "同异步&阻塞", menu: 'node/base/async.md' },
			{ name: "事件环", menu: 'node/base/loop.md' },
			{ name: "基础概念", menu: 'node/base/base.md' }]
		},
		{
			name: "常用模块",
			menu: 'node1.1',
			children: [ 
				{ name: "path", menu: 'node/use/path.md' }, 
				{ name: "module", menu: 'node/use/module.md' },
				{ name: "event", menu: 'node/use/event.md' },
				{ name: "buffer", menu: 'node/use/buffer.md' },
				{ name: "stream", menu: 'node/use/stream.md' },
				{ name: "http", menu: 'node/use/http.md' }
			]
		},
		{
			name: "koa",
			menu: 'node5',
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "egg",
			menu: 'node6',
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		}
	]
};

const Data = {
	time: [
		{ id: 14, text: '完成异步解决方案', date: '2019-12-27', color: 'green', icon: '' },
		{ id: 13, text: '手写reduce', date: '2019-12-26', color: 'red', icon: '' },
		{ id: 12, text: 'new添加', date: '2019-12-24', color: 'red', icon: '' },
		{ id: 11, text: 'Reflect添加', date: '2019-12-23', color: 'green', icon: '' },
		{ id: 10, text: 'Proxy添加', date: '2019-12-20', color: 'green', icon: '' },
		{ id: 9, text: 'type添加', date: '2019-12-19', color: 'yellow', icon: '' },
		{ id: 8, text: '完善this', date: '2019-12-18', color: 'green', icon: '' },
		{ id: 7, text: '手写深拷贝', date: '2019-12-16', color: 'yellow', icon: '' },
		{ id: 6, text: '添加this解析', date: '2019-12-15', color: 'red', icon: '' },
		{ id: 5, text: '对象特性添加', date: '2019-12-14', color: 'yellow', icon: '' },
		{ id: 4, text: '手写call', date: '2019-12-12', color: 'green', icon: '' },
		{ id: 3, text: '手写promise', date: '2019-12-11', color: 'yellow', icon: '' },
		{ id: 2, text: '添加递归概念', date: '2019-12-09', color: 'yellow', icon: '' },
		{ id: 1, text: '添加时间复杂度', date: '2020-12-08', color: 'green', icon: '' },
	],
	children: [
		{
			name: "基础",
			menu: 'base',
			children: [
				{ name: "介绍", menu: 'struct/base/intro.md' },
				{ name: "位运算", menu: 'struct/base/byte.md' },
				{ name: "正则表达式", menu: 'struct/base/reg.md' },
				{ name: "递归", menu: 'struct/base/loop.md' },
			]
		},
		{
			name: "数组",
			menu: 'array',
			children: [
				{ name: "介绍", menu: 'struct/array/intro.md' },
				{ name: "练习", menu: 'struct/array/example.md' }
			]
		},
		{
			name: "线性表",
			menu: 'linear',
			children: [
				{ name: "基础", menu: 'struct/linear/base.md' },
				{ name: "练习", menu: 'struct/linear/example.md' }
			]
		},
		{
			name: "树",
			menu: 'tree',
			children: [{ name: "介绍", menu: 'struct/tree/intro.md' },
				{ name: "练习", menu: 'struct/tree/example.md' }
			]
		},
		{
			name: "堆",
			menu: 'heap',
			children: [{ name: "IScaleMap", menu: 'struct/sort/bubble.md'}]
		},
		{
			name: "位运算",
			menu: 'byte',
			children: [{ name: "DirtySprite", menu: 'struct/sort/bubble.md' }]
		},
		{
			name: "排序",
			menu: 'sort',
			children: [{ name: "冒泡排序", menu: 'struct/sort/bubble.md' },
			{ name: "选择排序", menu: 'struct/sort/select.md' },
			{ name: "插入排序", menu: 'struct/sort/insert.md' },
			{ name: "归并排序", menu: 'struct/sort/merge.md' },
			{ name: "快速排序", menu: 'struct/sort/quick.md' },
			{ name: "堆排序", menu: 'struct/sort/heap.md' }
		]
		},
		{
			name: "查找",
			menu: 'search',
			children: [{ name: "DirtySprite", menu: 'JavaScript4' }]
		},
		{
			name: "动态规划",
			menu: 'dynamic',
			children: [{ name: "DirtySprite", menu: 'JavaScript5' }]
		}
	]
}
const TypeScript = {
	time: [
		{ id: 14, text: '完成异步解决方案', date: '2019-12-27', color: 'green', icon: '' },
		{ id: 13, text: '手写reduce', date: '2019-12-26', color: 'red', icon: '' },
		{ id: 12, text: 'new添加', date: '2019-12-24', color: 'red', icon: '' },
		{ id: 11, text: 'Reflect添加', date: '2019-12-23', color: 'green', icon: '' },
		{ id: 10, text: 'Proxy添加', date: '2019-12-20', color: 'green', icon: '' },
		{ id: 9, text: 'type添加', date: '2019-12-19', color: 'yellow', icon: '' },
		{ id: 8, text: '完善this', date: '2019-12-18', color: 'green', icon: '' },
		{ id: 7, text: '手写深拷贝', date: '2019-12-16', color: 'yellow', icon: '' },
		{ id: 6, text: '添加this解析', date: '2019-12-15', color: 'red', icon: '' },
		{ id: 5, text: '对象特性添加', date: '2019-12-14', color: 'yellow', icon: '' },
		{ id: 4, text: '手写call', date: '2019-12-12', color: 'green', icon: '' },
		{ id: 3, text: '手写promise', date: '2019-12-11', color: 'yellow', icon: '' },
		{ id: 2, text: '添加array文档', date: '2019-12-09', color: 'green', icon: '' },
		{ id: 1, text: '博客生成', date: '2019-12-08', color: 'green', icon: '' },
	],
	children: [
		{
			name: "类型",
			menu: "TS1",
			children: [
				{ name: "基本类型", menu: 'typescript/type/intro.md' },
				{ name: "函数", menu: 'typescript/type/function.md' },
				{ name: "接口", menu: 'typescript/type/interface.md' },
				{ name: "类", menu: 'typescript/type/class.md' },
				{ name: "泛型", menu: 'typescript/type/generic.md' }
			]
		},
		{
			name: "Class",
			menu: "TS4",
			children: [{ name: "介绍", menu: 'typescript/class/intro.md' }, 
			{ name: "装饰器", menu: 'typescript/generic/disc.md' }]
		},
		{
			name: "使用拓展",
			menu: "TS5",
			children: [
				{ name: "Mixin", menu: 'typescript/extend/mixin.md' },
				{ name: "TS + React", menu: 'typescript/extend/react.md' },
				{ name: "TS + Vue", menu: 'typescript/extend/vue.md' }
			]
		}
	]
};
const React = {
	time: [
		{ id: 14, text: '完成异步解决方案', date: '2019-12-27', color: 'green', icon: '' },
		{ id: 13, text: '手写reduce', date: '2019-12-26', color: 'red', icon: '' },
		{ id: 12, text: 'new添加', date: '2019-12-24', color: 'red', icon: '' },
		{ id: 11, text: 'Reflect添加', date: '2019-12-23', color: 'green', icon: '' },
		{ id: 10, text: 'Proxy添加', date: '2019-12-20', color: 'green', icon: '' },
		{ id: 9, text: 'type添加', date: '2019-12-19', color: 'yellow', icon: '' },
		{ id: 8, text: '完善this', date: '2019-12-18', color: 'green', icon: '' },
		{ id: 7, text: '手写深拷贝', date: '2019-12-16', color: 'yellow', icon: '' },
		{ id: 6, text: '添加this解析', date: '2019-12-15', color: 'red', icon: '' },
		{ id: 5, text: '对象特性添加', date: '2019-12-14', color: 'yellow', icon: '' },
		{ id: 4, text: '手写call', date: '2019-12-12', color: 'green', icon: '' },
		{ id: 3, text: '手写promise', date: '2019-12-11', color: 'yellow', icon: '' },
		{ id: 2, text: '添加array文档', date: '2019-12-09', color: 'green', icon: '' },
		{ id: 1, text: '博客生成', date: '2019-12-08', color: 'green', icon: '' },
	],
	children: [
		{
			name: "JSX",
			menu: "react1",
			children: [
				{ name: "createElement()", menu: 'react/jsx/element.md'},
				{ name: "render()", menu: 'react/jsx/render.md'}
			]
		},
		{
			name: "组件",
			menu: "react2",
			children: [
				{ name: "Component", menu: 'react/component/component.md'},
				{ name: "Function", menu: 'react/component/function.md' },
				{ name: "render()", menu: 'react/component/render.md'},
			]
		},
		{
			name: "声明周期",
			menu: "react3",
			children: [
				{ name: "initialization", menu: 'react/lifecycle/init.md' },
				{ name: "mount", menu: 'react/lifecycle/mount.md'  },
				{ name: "update", menu: 'react/lifecycle/update.md' },
				{ name: "unMount", menu: 'react/lifecycle/unMount.md'  }
			]
		},
		{
			name: "事件处理",
			menu: "react4",
			children: [{ name: "介绍", menu: 'react/event/intro.md' }]
		},
		{
			name: "Context",
			menu: "react5",
			children: [{ name: "介绍", menu: 'react/context/intro.md' }]
		},
		{
			name: "Portals",
			menu: "react6",
			children: [{ name: "介绍", menu: 'react/portals/intro.md' }]
		},
		{
			name: "Hooks",
			menu: "react7",
			children: [
				{ name: "介绍", menu: 'react/hooks/intro.md' },
				{ name: "useState()", menu: 'react/hooks/state.md' },
				{ name: "useContext()", menu: 'react/hooks/context.md' },
				{ name: "useReducer()", menu: 'react/hooks/reducer.md' },
				{ name: "useEffect()", menu: 'react/hooks/effect.md' }
			]
		},
		{
			name: "DomDiff",
			menu: "react8",
			children: [
				{ name: "useState()", menu: 'react/diff/one.md' },
				{ name: "useEffect()", menu: 'react/diff/two.md' }
			]
		},
		{
			name: "Router",
			menu: "react9",
			children: [
				{ name: "history模式", menu: 'react/router/history.md' },
				{ name: "hash模式", menu: 'react/router/hash.md' },
				{ name: "常用API", menu: 'react/router/api.md' }
			]
		},
		{
			name: "Redux",
			menu: "react10",
			children: [
				{ name: "源码", menu: 'react/redux/source.md' },
				{ name: "react-redux", menu: 'react/redux/react.md' },
				{ name: "redux-thunk", menu: 'react/redux/thunk.md' },
				{ name: "redux-saga", menu: 'react/redux/saga.md' }
			]
		}
	]
};

const Vue = {
	time: [
		{ id: 14, text: '完成异步解决方案', date: '2019-12-27', color: 'green', icon: '' },
		{ id: 13, text: '手写reduce', date: '2019-12-26', color: 'red', icon: '' },
		{ id: 12, text: 'new添加', date: '2019-12-24', color: 'red', icon: '' },
		{ id: 11, text: 'Reflect添加', date: '2019-12-23', color: 'green', icon: '' },
		{ id: 10, text: 'Proxy添加', date: '2019-12-20', color: 'green', icon: '' },
		{ id: 9, text: 'type添加', date: '2019-12-19', color: 'yellow', icon: '' },
		{ id: 8, text: '完善this', date: '2019-12-18', color: 'green', icon: '' },
		{ id: 7, text: '手写深拷贝', date: '2019-12-16', color: 'yellow', icon: '' },
		{ id: 6, text: '添加this解析', date: '2019-12-15', color: 'red', icon: '' },
		{ id: 5, text: '对象特性添加', date: '2019-12-14', color: 'yellow', icon: '' },
		{ id: 4, text: '理解自定义指令', date: '2020-01-11', color: 'red', icon: '' },
		{ id: 3, text: '编写指令相关', date: '2020-01-11', color: 'green', icon: '' },
		{ id: 2, text: '添加数组拓展', date: '2020-01-09', color: 'yellow', icon: '' },
		{ id: 1, text: '添加数据劫持', date: '2020-01-08', color: 'green', icon: '' },
	],
	children: [
		{
			name: "数据驱动",
			menu: 'Vue0',
			children: [
				{ name: "模板解析", menu: 'vue/template/data.md' },
				{ name: "虚拟DOM", menu: 'vue/template/vdom.md' },
				{ name: "标签判断", menu: 'vue/template/judge.md' }
			]
		},
		{
			name: "响应式原理",
			menu: 'Vue1',
			children: [{ name: "数据劫持", menu: 'vue/design/define.md' },
				{ name: "数组拓展", menu: 'vue/design/array.md' },
				{ name: "Proxy拓展", menu: 'vue/design/proxy.md' }
			]
		},
		{
			name: "指令",
			menu: 'Vue2',
			children: [
				{ name: "官方指令", menu: 'vue/directive/intro.md' },
				{ name: "自定义指令", menu: 'vue/directive/v_directive.md', children: [{ name: "LifeCycle", value: 4116 }] }
			]
		},
		{
			name: "组件",
			menu: 'Vue3',
			children: [
				{ name: "LifeCycle", menu: 'vue/component/life.md' },
				{ name: "函数式组件", menu: 'vue/component/func.md' },
				{ name: "通信", menu: 'vue/component/trans.md' }
			]
		},
		{
			name: "插件",
			menu: 'Vue4',
			children: [
				{ name: "mixin", menu: 'vue/plugins/mixin.md' }
			]
		},
		{
			name: "Router",
			menu: 'Vue5',
			children: [{ name: "介绍", menu: 'vue/router/router.md' }, 
			{ name: "源码", menu: 'vue/router/resource.md' }]
		},
		{
			name: "Vuex",
			menu: 'Vue6',
			children: [
				{ name: "使用", menu: 'vue/vuex/use.md' },
				{ name: "源码", menu: 'vue/vuex/source.md' }
			]
		},
		{
			name: "Vue3.0",
			menu: 'Vue7',
			children: [
				{ name: "state", menu: 'vue/version/state.md' },
				{ name: "getter", menu: 'vue/version/getter.md' },
				{ name: "action", menu: 'vue/version/action.md' },
				{ name: "mutation", menu: 'vue/version/mutation.md' }
			]
		},
		{
			name: "使用拓展",
			menu: 'Vue8',
			children: [
				{ name: "使用拓展1", menu: 'vue/extend/one.md' },
				{ name: "使用拓展2", menu: 'vue/extend/two.md' }
			]
		}
	]
};

const GoLang = {
	children: [
		{
			name: "类型",
			menu: 'go1',
			children: [
				{ name: "数组", menu: 'go/type/array.md' },
				{ name: "指针", menu: 'go/type/pointer.md'},
				{
					name: "结构体",
					menu: 'go/type/struct.md'
				}
			]
		},
		{
			name: "函数",
			menu: 'go2',
			children: [{ name: "闭包", menu: 'go/type/struct.md' }]
		},
		{
			name: "指针",
			menu: 'go3',
			children: [{ name: "数据劫持+观察者模式", menu: 'go/three/one.md' }]
		},
		{
			name: "协程",
			menu: 'go4',
			children: [
				{ name: "打点器", menu: 'go/four/one.md' },
				{ name: "状态协程", menu: 'go/four/two.md' }
			]
		},
		{
			name: "通道",
			menu: 'go5',
			children: [
				{ name: "缓冲", menu: 'go/five/one.md' },
				{ name: "方向", menu: 'go/five/two.md' },
				{ name: "同步", menu: 'go/five/three.md' },
				{ name: "选择器", menu: 'go/five/four.md' },
				{ name: "超时处理", menu: 'go/five/five.md' },
				{ name: "阻塞与非阻塞", menu: 'go/five/six.md' }
			]
		},
		{
			name: "文件操作",
			menu: 'go6',
			children: [{ name: "DirtySprite", menu: 'go/six/one.md' }]
		},
		{
			name: "网络",
			menu: 'go7',
			children: [{ name: "DirtySprite", menu: 'go/seven/five.md' }]
		},
		{
			name: "Beego",
			menu: 'go8',
			children: [
				{ name: "state", menu: 'go/eight/one.md' },
				{ name: "getter", menu: 'go/eight/two.md'},
				{ name: "action", menu: 'go/eight/three.md' },
				{ name: "mutation", menu: 'go/eight/four.md' }
			]
		}
	]
};

const Webpack = {
	children: [
		{
			name: "Entry",
			menu: 'webpack1',
			children: [
				{ name: "单入口", menu: 'webpack/entry/one.md' },
				{ name: "多入口", menu: 'webpack/entry/two.md' }
			]
		},
		{
			name: "Output",
			menu: 'webpack2',
			children: [
				{ name: "Component", value: 4116 },
				{
					name: "LifeCycle",
					children: [
						{ name: "initialization", value: 4116 },
						{ name: "mount", value: 4116 },
						{ name: "update", value: 4116 },
						{ name: "unMount", value: 4116 },
						{ name: "slot", value: 4116 }
					]
				}
			]
		},
		{
			name: "Loaders",
			menu: 'webpack3',
			children: [
				{ name: "数据劫持+观察者模式", value: 4116 },
				{ name: "数据劫持+观察者模式", value: 4116 },
				{ name: "数据劫持+观察者模式", value: 4116 },
				{ name: "数据劫持+观察者模式", value: 4116 }
			]
		},
		{
			name: "Plugins",
			menu: 'webpack4',
			children: [{ name: "IScaleMap", value: 2105 }]
		},
		{
			name: "hot-server",
			menu: 'webpack5',
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "打包优化",
			menu: 'webpack6',
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "手写",
			menu: 'webpack7',
			children: [
				{ name: "state", children: [{ name: "mapState()", menu: 'JavaScript1' }] },
				{ name: "getter", children: [{ name: "mapGetters()", menu: 'JavaScript1' }] },
				{ name: "action", children: [{ name: "mapAction()", menu: 'JavaScript1' }] },
				{ name: "mutation", children: [{ name: "mapMutation", menu: 'JavaScript1' }] }
			]
		}
	]
};

const SQL = {
	children: [
		{
			name: "MySQL",
			menu: 'SQL1',
			children: [
				{ name: "单入口", menu: 'Sql/mySQL/one.md' },
				{ name: "多入口", menu: 'Sql/mySQL/two.md' }
			]
		},
		{
			name: "MongoDB",
			menu: 'SQL2',
			children: [
				{ name: "Component", value: 4116 },
				{
					name: "LifeCycle",
					children: [
						{ name: "initialization", value: 4116 },
						{ name: "mount", value: 4116 },
						{ name: "update", value: 4116 },
						{ name: "unMount", value: 4116 },
						{ name: "slot", value: 4116 }
					]
				}
			]
		},
		{
			name: "Redis",
			menu: 'SQL3',
			children: [
				{ name: "数据劫持+观察者模式", value: 4116 },
				{ name: "数据劫持+观察者模式", value: 4116 },
				{ name: "数据劫持+观察者模式", value: 4116 },
				{ name: "数据劫持+观察者模式", value: 4116 }
			]
		}
	]
};
export const treeData = {
	JavaScript,
	CSS,
	Node,
	Data,
	TypeScript,
	React,
	Vue,
	GoLang,
	Webpack,
	Flutter,
	SQL
};