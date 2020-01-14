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
	{id: 1, text: 'JavaScript'},
	{id: 2, text: 'CSS'},
	{id: 3, text: 'Vue'},
	{id: 4, text: 'React'},
	{id: 5, text: 'Data'},
	{id: 6, text: 'GoLang'},
	{id: 7, text: 'Node'},
	{id: 8, text: 'Linux'},
	{id: 9, text: 'SQL'},
	{id: 10, text: 'Net'},
]

const JavaScript = {
	children: [
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
					name: "ES6",
					menu: 'javascript/array/ES6.md'
				}
			]
		},
		{
			name: "String",
			menu: 'JavaScript2',
			children: [
				{
					name: "正则表达式",
					menu: 'JavaScript21',
					children: [
						{ name: "match()", menu: 'JavaScript211' },
						{ name: "replace()", menu: 'JavaScript212' }
					]
				}
			]
		},
		{
			name: "Function",
			menu: 'JavaScript3',
			children: [
				{ name: "this", menu: 'JavaScript31' },
				{ name: "apply()&call()", menu: 'JavaScript32' },
				{ name: "bind()", menu: 'JavaScript33' },
				{
					name: "闭包&高阶函数",
					menu: 'JavaScript34',
					children: [{ name: "函数柯里化", menu: 'JavaScript341'}]
				},
				{ name: "原型&原型链", menu: 'JavaScript35'},
				{ name: "generator", menu: 'JavaScript36' }
			]
		},
		{
			name: "Object",
			menu: 'JavaScript4',
			children: [
				{
					name: "对象特性",
					menu: 'JavaScript41',
					children: [
						{ name: "new()", menu: 'JavaScript411' },
						{ name: "Proxy", menu: 'JavaScript412' },
						{ name: "Reflect", menu: 'JavaScript413' }
					]
				},
				{
					name: "Class",
					menu: 'JavaScript42',
					children: [
						{ name: "构造函数与普通函数", menu: 'JavaScript421' },
						{ name: "静态属性", menu: 'JavaScript422' },
						{ name: "继承", menu: 'JavaScript423' },
						{ name: "装饰器", menu: 'JavaScript424' }
					]
				}
			]
		},
		{
			name: "异步解决方案",
			menu: 'JavaScript5',
			children: [
				{ name: "介绍", menu: 'javascript/async/open.md' },
				{ name: "发布订阅", menu: 'javascript/async/emit.md' },
				{ name: "观察者", menu: 'javascript/async/observe.md' },
				{
					name: "Promise",
					menu: 'javascript/async/promise.md',
					children: [
						{ name: "then()&catch()", menu: 'JavaScript531' },
						{ name: "all()", menu: 'JavaScript532' },
						{ name: "race()", menu: 'JavaScript533' }
					]
				},
				{ name: "async&await", menu: 'JavaScript54' }
			]
		}
	]
};

const Node = {
	name: "Node",
	children: [
		{
			name: "buffer",
			children: [{ name: "FlareVis", value: 4116 }]
		},
		{
			name: "fs",
			children: [{ name: "FlareVis", value: 4116 }]
		},
		{
			name: "stream",
			children: [{ name: "IScaleMap", value: 2105 }]
		},
		{
			name: "http",
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "koa",
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "egg",
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		}
	]
};

const TypeScript = {
	name: "TypeScript",
	children: [
		{
			name: "类型",
			children: [
				{ name: "类型检查", value: 4116 },
				{ name: "类型推论", value: 4116 }
			]
		},
		{
			name: "接口",
			children: [{ name: "FlareVis", value: 4116 }]
		},
		{
			name: "泛型",
			children: [{ name: "IScaleMap", value: 2105 }]
		},
		{
			name: "Class",
			children: [{ name: "装饰器", menu: 'JavaScript1' }]
		},
		{
			name: "TS+React",
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "Mixins",
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		}
	]
};
const React = {
	name: "React",
	children: [
		{
			name: "JSX",
			children: [{ name: "createElement()", value: 4116 }]
		},
		{
			name: "组件",
			children: [
				{ name: "Component", value: 4116 },
				{ name: "Function", value: 4116 },
				{ name: "render()", value: 4116 },
				{
					name: "LifeCycle",
					children: [
						{ name: "initialization", value: 4116 },
						{ name: "mount", value: 4116 },
						{ name: "update", value: 4116 },
						{ name: "unMount", value: 4116 }
					]
				}
			]
		},
		{
			name: "事件处理",
			children: [{ name: "IScaleMap", value: 2105 }]
		},
		{
			name: "Context",
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "Portals",
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "Hooks",
			children: [
				{ name: "useState()", menu: 'JavaScript1' },
				{ name: "useEffect()", menu: 'JavaScript1' }
			]
		},
		{
			name: "DomDiff",
			children: [
				{ name: "useState()", menu: 'JavaScript1' },
				{ name: "useEffect()", menu: 'JavaScript1' }
			]
		},
		{
			name: "Router",
			children: [
				{ name: "history模式", menu: 'JavaScript1' },
				{ name: "hash模式", menu: 'JavaScript1' }
			]
		},
		{
			name: "Redux",
			children: [
				{ name: "react-redux", menu: 'JavaScript1' },
				{ name: "redux-thunk", menu: 'JavaScript1' },
				{ name: "redux-saga", menu: 'JavaScript1' }
			]
		}
	]
};

const Vue = {
	name: "Vue",
	children: [
		{
			name: "指令",
			children: [
				{ name: "v-bind", value: 4116 },
				{ name: "v-if&v-show", value: 4116 },
				{ name: "v-model", value: 4116 },
				{ name: "v-html", value: 4116 },
				{ name: "v-for", value: 4116 },
				{ name: "自定义指令", children: [{ name: "LifeCycle", value: 4116 }] }
			]
		},
		{
			name: "组件",
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
			name: "MVVM",
			children: [{ name: "数据劫持+观察者模式", value: 4116 }]
		},
		{
			name: "事件处理",
			children: [{ name: "IScaleMap", value: 2105 }]
		},
		{
			name: "Mixins",
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "Router",
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "Vuex",
			children: [
				{ name: "state", children: [{ name: "mapState()", menu: 'JavaScript1' }] },
				{ name: "getter", children: [{ name: "mapGetters()", menu: 'JavaScript1' }] },
				{ name: "action", children: [{ name: "mapAction()", menu: 'JavaScript1' }] },
				{ name: "mutation", children: [{ name: "mapMutation()", menu: 'JavaScript1' }] }
			]
		},
		{
			name: "DomDiff",
			children: [
				{ name: "useState()", menu: 'JavaScript1' },
				{ name: "useEffect()", menu: 'JavaScript1' }
			]
		},
		{
			name: "Router",
			children: [
				{ name: "history模式", menu: 'JavaScript1' },
				{ name: "hash模式", menu: 'JavaScript1' }
			]
		},
		{
			name: "Redux",
			children: [
				{ name: "react-redux", menu: 'JavaScript1' },
				{ name: "redux-thunk", menu: 'JavaScript1' },
				{ name: "redux-saga", menu: 'JavaScript1' }
			]
		}
	]
};

const Golang = {
	name: "Golang",
	children: [
		{
			name: "类型",
			children: [
				{ name: "数组", value: 4116 },
				{ name: "指针", value: 4116 },
				{
					name: "结构体",
					children: [
						{ name: "属性", value: 4116 },
						{ name: "方法", value: 4116 },
						{ name: "接口", value: 4116 }
					]
				}
			]
		},
		{
			name: "函数",
			children: [{ name: "闭包", value: 4116 }]
		},
		{
			name: "指针",
			children: [{ name: "数据劫持+观察者模式", value: 4116 }]
		},
		{
			name: "协程",
			children: [
				{ name: "打点器", value: 4116 },
				{ name: "状态协程", value: 4116 }
			]
		},
		{
			name: "通道",
			children: [
				{ name: "缓冲", value: 2105 },
				{ name: "方向", value: 2105 },
				{ name: "同步", value: 2105 },
				{ name: "选择器", value: 2105 },
				{ name: "超时处理", value: 2105 },
				{ name: "阻塞与非阻塞", value: 2105 }
			]
		},
		{
			name: "文件操作",
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "网络",
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "Beggo",
			children: [
				{ name: "state", children: [{ name: "mapState()", menu: 'JavaScript1' }] },
				{ name: "getter", children: [{ name: "mapGetters()", menu: 'JavaScript1' }] },
				{ name: "action", children: [{ name: "mapAction()", menu: 'JavaScript1' }] },
				{ name: "mutation", children: [{ name: "mapMutation", menu: 'JavaScript1' }] }
			]
		}
	]
};

const Webpack = {
	name: "Webpack",
	children: [
		{
			name: "Entry",
			children: [
				{ name: "单入口", value: 4116 },
				{ name: "多入口", value: 4116 }
			]
		},
		{
			name: "Output",
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
			children: [
				{ name: "数据劫持+观察者模式", value: 4116 },
				{ name: "数据劫持+观察者模式", value: 4116 },
				{ name: "数据劫持+观察者模式", value: 4116 },
				{ name: "数据劫持+观察者模式", value: 4116 }
			]
		},
		{
			name: "Plugins",
			children: [{ name: "IScaleMap", value: 2105 }]
		},
		{
			name: "hot-server",
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "打包优化",
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "源码",
			children: [
				{ name: "state", children: [{ name: "mapState()", menu: 'JavaScript1' }] },
				{ name: "getter", children: [{ name: "mapGetters()", menu: 'JavaScript1' }] },
				{ name: "action", children: [{ name: "mapAction()", menu: 'JavaScript1' }] },
				{ name: "mutation", children: [{ name: "mapMutation", menu: 'JavaScript1' }] }
			]
		},
		{
			name: "DomDiff",
			children: [
				{ name: "useState()", menu: 'JavaScript1' },
				{ name: "useEffect()", menu: 'JavaScript1' }
			]
		},
		{
			name: "Router",
			children: [
				{ name: "history模式", menu: 'JavaScript1' },
				{ name: "hash模式", menu: 'JavaScript1' }
			]
		},
		{
			name: "Redux",
			children: [
				{ name: "react-redux", menu: 'JavaScript1' },
				{ name: "redux-thunk", menu: 'JavaScript1' },
				{ name: "redux-saga", menu: 'JavaScript1' }
			]
		}
	]
};

const SQL = {
	name: "SQL",
	children: [
		{
			name: "MySQL",
			children: [
				{ name: "单入口", value: 4116 },
				{ name: "多入口", value: 4116 }
			]
		},
		{
			name: "MongoDB",
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
	Node,
	TypeScript,
	React,
	Vue,
	Golang,
	Webpack,
	SQL
};