import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { navData, treeData } from '../../data/index'
import introMD from './javascript/type/type.md'
import ReactMarkdown from 'react-markdown'
import ScrollItem from './components/ScrollItem'
import TimeItem from './components/TimeItem'
import CodeBlock from '../../utils/CodeBlock'
import { issues } from '../../data/issues'
import './styles/index.scss'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Entry extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			content: introMD,
			issues: issues,
			scrollCount: 0,
			activeModule: 'JavaScript',
			activeTimes: treeData['JavaScript'].time,
			leftMenu: treeData['JavaScript'],
			openKeys: [treeData['JavaScript'].children[0].menu],
			defaultChecked: [treeData['JavaScript'].children[0].children[0].menu]
		}
	}
	handleChangeMark = (item) => {
		import(`./${item.key}`).then(res => {
			this.setState({
				content: res.default,
				defaultChecked: item.key
			})
			document.getElementsByClassName('ant-layout')[2].scrollTop = 0
		})	
	}
	changeHeaderMenu(text) {
		import(`./${treeData[text].children[0].children[0].menu}`).then(res => {
			this.setState({
				content: res.default,
				activeModule: text,
				leftMenu: treeData[text],
				activeTimes: treeData[text].time,
				openKeys: [treeData[text].children[0].menu],
				defaultChecked: [treeData[text].children[0].children[0].menu]
			},() => {
				document.getElementsByClassName('ant-layout')[2].scrollTop = 0
				document.getElementById('timeline-view').scrollTop = 0
			})
		})
	}
	onOpenChange = openKeys => {
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
		if (this.state.leftMenu.children.map(item => {
			return item.menu
		}).indexOf(latestOpenKey) === -1) {
			this.setState({ openKeys });
		} else {
			this.setState({
				openKeys: latestOpenKey ? [latestOpenKey] : [],
			});
		}
	}

	componentDidMount() {
		setInterval(() => {
			let scroll = document.getElementById('issue-view').scrollTop ++
			if(scroll - 150 * this.state.scrollCount > 150) {
				const arr = [...this.state.issues]
				arr.push(arr.shift())
				this.setState({scrollCount: this.state.scrollCount + 1, issues: arr})
			}
		}, 100)
	}
	render() {
		return (
		<div className="entry">
			<Layout>
    		<Header className="entry--header">
					<Menu
						theme="dark"
						mode="horizontal"
						style={{ lineHeight: '64px' }}
					>
						{ navData.map(item => {
							if(item.children) {
								return (<SubMenu
									key={item.id}
									title={
										<span className="submenu-title-wrapper">
											{item.text}
										</span>
									}
								>
									{
										item.children.map(child => {
											return <Menu.Item key={child.text} onClick={() => {
												this.changeHeaderMenu(child.text)
											}}>{ child.text }</Menu.Item>
										})
									}
								</SubMenu>)
							} else {
								return <Menu.Item key={item.text} onClick={() => {
									this.changeHeaderMenu(item.text)
								}}>{item.text}</Menu.Item>
							}
						}) }
					</Menu>
    		</Header>
			<Layout >
				<Sider width={200} style={{ background: '#fff', overflowX: 'hidden', overflowY:'auto' }}>
					<Menu
						mode="inline"
						defaultSelectedKeys={ this.state.defaultChecked }
						selectedKeys={this.state.defaultChecked}
						openKeys={this.state.openKeys}
        		onOpenChange={this.onOpenChange}
						style={{ height: '100%', borderRight: 0 }}
					>
						{ this.state.leftMenu.children.map(item => {
							return (<SubMenu
								key={item.menu}
								title={
									<span>
										<Icon type="form" />
										{ item.name }
									</span>
								}
							>
								{ item.children.map(node => {
									return <Menu.Item key={node.menu} onClick={this.handleChangeMark}>{ node.name }</Menu.Item>
								}) }
							</SubMenu>)
						})}
					</Menu>
				</Sider>
				<Layout style={{ borderLeft: '1px solid #eee', width: '60%' }}>
					<Content
						style={{
							padding: 24,
							margin: 0,
							minHeight: 280,
						}}
					>
						<ReactMarkdown source={this.state.content} escapeHtml={false} renderers={{code: CodeBlock}}></ReactMarkdown>
					</Content>
				</Layout>
				<Layout style={{ borderLeft: '1px solid #aaa', width: '500px' }}>
					<Content
						style={{
							padding: 24,
							margin: 0,
							minHeight: 280
						}}
					>
						<div className="entry--timeline">
							<h3>时间线</h3>
							<div className="entry--timeline_container" id="timeline-view">
								<TimeItem activeTimes={this.state.activeTimes}></TimeItem>
							</div>
						</div>
						<div className="entry--issue">
							<h3>issue更新</h3>
							<div className="entry--issue_container" id='issue-view'>
								{
									this.state.issues.map(issue => {
										return <ScrollItem issue={issue} key={issue.id}></ScrollItem>
									})
								}
							</div>
						</div>
					</Content>
				</Layout>
				</Layout>
				
  		</Layout>
		</div>
		);
	}	
}

export default Entry;
