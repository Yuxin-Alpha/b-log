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
			content: ''
		}
	}
	componentDidMount() {
		this.setState({content: introMD})
	}
	handleChangeMark = (item) => {
		import(`./${item.key}`).then(res => {
			console.log(res.default);
			this.setState({content: res.default})
		})	
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
							return <Menu.Item key={item.text}>{item.text}</Menu.Item>
						}) }
					</Menu>
    		</Header>
			<Layout >
				<Sider width={300} style={{ background: '#fff', overflowX: 'hidden', overflowY:'auto' }}>
					<Menu
						mode="inline"
						defaultSelectedKeys={['javascript/array/intro.md']}
						defaultOpenKeys={['JavaScript1']}
						style={{ height: '100%', borderRight: 0 }}
					>
						{ treeData['JavaScript'].children.map(item => {
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
