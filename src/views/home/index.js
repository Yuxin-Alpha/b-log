import React, { useState } from 'react';
import HomeModel from './components/HomeModel'
import Bubble from './components/Bubble'
import Person from './components/Person'
import Cookie from './components/Cookie'
import DocTree from './components/DocTree'
import TreeList from './components/TreeList'
import { treeList } from '../../data/doc_tree'
import './index.scss'

const Home = () => {
	const [list] = useState(treeList)
	const [activeLi, setActiveLi] = useState('JavaScript')
	// useEffect(() => {
	// 	console.log();
	// 	setActiveTree(treeData[activeLi])
	// }, [activeLi])
	function changeActiveItem(text) {
		setActiveLi(text)
	}

	return (
		<div className="home">
			<div className="home--left">
				<div className="home--person">
					<HomeModel title={'个人信息'}>
						<div className="home--person_container">
							<Person></Person>
						</div>
					</HomeModel>
				</div>
				<div className="home--list">
					<HomeModel title={'生活随笔'}>
					</HomeModel>
				</div>
			</div>
			<div className="home--main">
				<div className="home--main_top">
					<HomeModel title={'文档概览'}>
						<div className="tree--container">
							<DocTree activeLi={activeLi}></DocTree>
							<div className="tree--container_list">
								<TreeList list={list} activeLi={activeLi} changeActiveItem={changeActiveItem}></TreeList>
							</div>
						</div>
					</HomeModel>
				</div>
				<div className="home--main_bottom">
					<HomeModel title={'技术栈分布'}>
						<div className="cookie--container">
							<Cookie></Cookie>
						</div>
					</HomeModel>
				</div>
			</div>
			<div className="home--right">
				<div className="home--bubble">
					<HomeModel title={'文档包含'}>
						<div className="home--bubble_container">
							<Bubble></Bubble>
						</div>
					</HomeModel>
				</div>
				<div className="home--link">
					<HomeModel title={'联系我'}>
					</HomeModel>
				</div>
			</div>
		</div>
	);
}

export default Home;
