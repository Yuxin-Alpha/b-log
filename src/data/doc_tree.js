export const treeList = [
	{ id: "0001", text: "JavaScript" },
	{ id: "0002", text: "Node" },
	{ id: "0003", text: "TypeScript" },
	{ id: "0004", text: "React" },
	{ id: "0005", text: "Vue" },
	{ id: "0006", text: "Golang" },
	{ id: "0007", text: "Webpack" },
	{ id: "0008", text: "SQL" }
];

const JavaScript = {
	name: "JavaScript",
	children: [
		{
			name: "Array",
			children: [
				{
					name: "slice()",
					value: 3322
				},
				{
					name: "splice()",
					value: 3322
				},
				{
					name: "ES6",
					children: [
						{ name: "map()", value: 3322 },
						{ name: "filter()", value: 3322 },
						{ name: "every()", value: 3322 },
						{ name: "some()", value: 3322 }
					]
				}
			]
		},
		{
			name: "String",
			children: [
				{
					name: "正则表达式",
					children: [
						{ name: "match()", value: 8833 },
						{ name: "replace()", value: 1732 }
					]
				}
			]
		},
		{
			name: "Function",
			children: [
				{ name: "this", value: 8833 },
				{ name: "apply()&call()", value: 8833 },
				{ name: "bind()", value: 8833 },
				{
					name: "闭包&高阶函数",
					children: [{ name: "函数柯里化", value: 1732 }]
				},
				{ name: "原型&原型链", value: 3623 },
				{ name: "generator", value: 8833 }
			]
		},
		{
			name: "Object",
			children: [
				{
					name: "对象特性",
					children: [
						{ name: "new()", value: 8833 },
						{ name: "Proxy", value: 1732 },
						{ name: "Reflect", value: 3623 }
					]
				},
				{
					name: "Class",
					children: [
						{ name: "构造函数与普通函数", value: 8833 },
						{ name: "静态属性", value: 1732 },
						{ name: "继承", value: 3623 },
						{ name: "装饰器", value: 3623 }
					]
				}
			]
		},
		{
			name: "异步解决方案",
			children: [
				{
					name: "回调函数",
					children: [
						{ name: "this", value: 8833 },
						{ name: "闭包&高阶函数", value: 1732 },
						{ name: "原型&原型链", value: 3623 }
					]
				},
				{ name: "发布订阅&观察者", value: 1316 },
				{
					name: "Promise",
					children: [
						{ name: "then()&catch()", value: 8833 },
						{ name: "all()", value: 1732 },
						{ name: "race()", value: 3623 }
					]
				},
				{ name: "async&await", value: 3770 }
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
			children: [{ name: "DirtySprite", value: 8833 }]
		},
		{
			name: "koa",
			children: [{ name: "DirtySprite", value: 8833 }]
		},
		{
			name: "egg",
			children: [{ name: "DirtySprite", value: 8833 }]
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
			children: [{ name: "装饰器", value: 8833 }]
		},
		{
			name: "TS+React",
			children: [{ name: "DirtySprite", value: 8833 }]
		},
		{
			name: "Mixins",
			children: [{ name: "DirtySprite", value: 8833 }]
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
			children: [{ name: "DirtySprite", value: 8833 }]
		},
		{
			name: "Portals",
			children: [{ name: "DirtySprite", value: 8833 }]
		},
		{
			name: "Hooks",
			children: [
				{ name: "useState()", value: 8833 },
				{ name: "useEffect()", value: 8833 }
			]
		},
		{
			name: "DomDiff",
			children: [
				{ name: "useState()", value: 8833 },
				{ name: "useEffect()", value: 8833 }
			]
		},
		{
			name: "Router",
			children: [
				{ name: "history模式", value: 8833 },
				{ name: "hash模式", value: 8833 }
			]
		},
		{
			name: "Redux",
			children: [
				{ name: "react-redux", value: 8833 },
				{ name: "redux-thunk", value: 8833 },
				{ name: "redux-saga", value: 8833 }
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
			children: [{ name: "DirtySprite", value: 8833 }]
		},
		{
			name: "Router",
			children: [{ name: "DirtySprite", value: 8833 }]
		},
		{
			name: "Vuex",
			children: [
				{ name: "state", children: [{ name: "mapState()", value: 8833 }] },
				{ name: "getter", children: [{ name: "mapGetters()", value: 8833 }] },
				{ name: "action", children: [{ name: "mapAction()", value: 8833 }] },
				{ name: "mutation", children: [{ name: "mapMutation()", value: 8833 }] }
			]
		},
		{
			name: "DomDiff",
			children: [
				{ name: "useState()", value: 8833 },
				{ name: "useEffect()", value: 8833 }
			]
		},
		{
			name: "Router",
			children: [
				{ name: "history模式", value: 8833 },
				{ name: "hash模式", value: 8833 }
			]
		},
		{
			name: "Redux",
			children: [
				{ name: "react-redux", value: 8833 },
				{ name: "redux-thunk", value: 8833 },
				{ name: "redux-saga", value: 8833 }
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
			children: [{ name: "DirtySprite", value: 8833 }]
		},
		{
			name: "网络",
			children: [{ name: "DirtySprite", value: 8833 }]
		},
		{
			name: "Beggo",
			children: [
				{ name: "state", children: [{ name: "mapState()", value: 8833 }] },
				{ name: "getter", children: [{ name: "mapGetters()", value: 8833 }] },
				{ name: "action", children: [{ name: "mapAction()", value: 8833 }] },
				{ name: "mutation", children: [{ name: "mapMutation", value: 8833 }] }
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
			children: [{ name: "DirtySprite", value: 8833 }]
		},
		{
			name: "打包优化",
			children: [{ name: "DirtySprite", value: 8833 }]
		},
		{
			name: "源码",
			children: [
				{ name: "state", children: [{ name: "mapState()", value: 8833 }] },
				{ name: "getter", children: [{ name: "mapGetters()", value: 8833 }] },
				{ name: "action", children: [{ name: "mapAction()", value: 8833 }] },
				{ name: "mutation", children: [{ name: "mapMutation", value: 8833 }] }
			]
		},
		{
			name: "DomDiff",
			children: [
				{ name: "useState()", value: 8833 },
				{ name: "useEffect()", value: 8833 }
			]
		},
		{
			name: "Router",
			children: [
				{ name: "history模式", value: 8833 },
				{ name: "hash模式", value: 8833 }
			]
		},
		{
			name: "Redux",
			children: [
				{ name: "react-redux", value: 8833 },
				{ name: "redux-thunk", value: 8833 },
				{ name: "redux-saga", value: 8833 }
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
