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
	{id: 8, text: 'Webpack'},
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
				},
				{ name: "模板字符串", menu: 'JavaScript3109' },
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
	children: [
		{
			name: "buffer",
			menu: 'node1',
			children: [{ name: "FlareVis", menu: 'node/buffer/one.md' }, { name: "FlareVis", menu: 'node/buffer/two.md' }]
		},
		{
			name: "fs",
			menu: 'node2',
			children: [{ name: "FlareVis", value: 4116 }]
		},
		{
			name: "stream",
			menu: 'node3',
			children: [{ name: "IScaleMap", value: 2105 }]
		},
		{
			name: "http",
			menu: 'node4',
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
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
	children: [
		{
			name: "线性表",
			menu: 'data1',
			children: [
				{ name: "栈", menu: 'data/linear/stack.md' },
				{ name: "队列", menu: 'data/linear/queue.md' },
				{ name: "链表", menu: 'data/linear/link.md' },
			]
		},
		{
			name: "树",
			menu: 'data2',
			children: [{ name: "FlareVis", value: 4116 }]
		},
		{
			name: "堆",
			menu: 'data3',
			children: [{ name: "IScaleMap", value: 2105 }]
		},
		{
			name: "位运算",
			menu: 'data4',
			children: [{ name: "DirtySprite", menu: 'JavaScript1' }]
		},
		{
			name: "排序",
			menu: 'data5',
			children: [{ name: "DirtySprite", menu: 'JavaScript2' }]
		},
		{
			name: "查找",
			menu: 'data6',
			children: [{ name: "DirtySprite", menu: 'JavaScript4' }]
		},
		{
			name: "动态规划",
			menu: 'data7',
			children: [{ name: "DirtySprite", menu: 'JavaScript5' }]
		}
	]
}
const TypeScript = {
	children: [
		{
			name: "类型",
			menu: "TS1",
			children: [
				{ name: "类型检查", menu: 'typescript/type/check.md' },
				{ name: "类型推论", menu: 'typescript/type/infer.md' }
			]
		},
		{
			name: "接口",
			menu: "TS2",
			children: [{ name: "介绍", menu: 'typescript/interface/intro.md' }]
		},
		{
			name: "泛型",
			menu: "TS3",
			children: [{ name: "介绍", menu: 'typescript/generic/intro.md' }]
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
	children: [
		{
			name: "JSX",
			menu: "react1",
			children: [{ name: "createElement()", menu: 'react/jsx/element.md'}]
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
				{ name: "useState()", menu: 'react/hooks/state.md' },
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
				{ name: "介绍", menu: 'react/redux/intro.md' },
				{ name: "react-redux", menu: 'react/redux/react.md' },
				{ name: "redux-thunk", menu: 'react/redux/thunk.md' },
				{ name: "redux-saga", menu: 'react/redux/saga.md' }
			]
		}
	]
};

const Vue = {
	name: "Vue",
	children: [
		{
			name: "指令",
			menu: 'Vue1',
			children: [
				{ name: "v-bind", menu: 'vue/directive/v_bind.md' },
				{ name: "v-if&v-show", menu: 'vue/directive/v_if.md'  },
				{ name: "v-model", menu: 'vue/directive/v_model.md'  },
				{ name: "v-html", menu: 'vue/directive/v_html.md'  },
				{ name: "v-for", menu: 'vue/directive/v_for.md'  },
				{ name: "自定义指令", menu: 'vue/directive/v_directive.md', children: [{ name: "LifeCycle", value: 4116 }] }
			]
		},
		{
			name: "组件",
			menu: 'Vue2',
			children: [
				{ name: "介绍", menu: 'vue/component/intro.md' },
				{ name: "LifeCycle", menu: 'vue/component/lifecycle.md' }
			]
		},
		{
			name: "MVVM",
			menu: 'Vue3',
			children: [{ name: "数据劫持+观察者模式", menu: 'vue/design/mvvm.md' }]
		},
		{
			name: "事件处理",
			menu: 'Vue4',
			children: [{ name: "介绍", menu: 'vue/event/event.md' }]
		},
		{
			name: "Mixins",
			menu: 'Vue5',
			children: [{ name: "介绍", menu: 'vue/mixin/mixins.md' }]
		},
		{
			name: "Router",
			menu: 'Vue6',
			children: [{ name: "介绍", menu: 'vue/router/router.md' }, { name: "源码", menu: 'vue/router/resource.md' }]
		},
		{
			name: "Vuex",
			menu: 'Vue7',
			children: [
				{ name: "state", menu: 'vue/store/state.md' },
				{ name: "getter", menu: 'vue/store/getter.md' },
				{ name: "action", menu: 'vue/store/action.md' },
				{ name: "mutation", menu: 'vue/store/mutation.md' }
			]
		},
		{
			name: "Vue3.0",
			menu: 'Vue8',
			children: [
				{ name: "state", menu: 'vue/version/state.md' },
				{ name: "getter", menu: 'vue/version/getter.md' },
				{ name: "action", menu: 'vue/version/action.md' },
				{ name: "mutation", menu: 'vue/version/mutation.md' }
			]
		},
		{
			name: "使用拓展",
			menu: 'Vue9',
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
	SQL
};