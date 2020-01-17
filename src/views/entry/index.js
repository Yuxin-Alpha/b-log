import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { navData, treeData } from '../../data/index'
import introMD from './javascript/array/intro.md'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../utils/CodeBlock'
import './styles/index.scss'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Entry extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			content: introMD,
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
		this.setState({
			leftMenu: treeData[text],
			openKeys: [treeData[text].children[0].menu],
			defaultChecked: [treeData[text].children[0].children[0].menu]
		}, () => {
			document.getElementsByClassName('ant-layout')[2].scrollTop = 0
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
	render() {
		return (
		<div className="entry">
			<Layout>
    		<Header className="entry--header">
					<div className="entry--header_logo" />
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={['JavaScript']}
						style={{ lineHeight: '64px' }}
					>
						{ navData.map(item => {
							return <Menu.Item key={item.text} onClick={() => {
								this.changeHeaderMenu(item.text)
							}}>{item.text}</Menu.Item>
						}) }
					</Menu>
    		</Header>
			<Layout >
				<Sider width={300} style={{ background: '#fff', overflowX: 'hidden', overflowY:'auto' }}>
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
				<Layout style={{ borderLeft: '1px solid #eee' }}>
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
				</Layout>
  		</Layout>
		</div>
		);
	}	
}

export default Entry;
