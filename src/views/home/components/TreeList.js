import React from 'react';
import '../style/list.scss'
const TreeList = (props) => {
	const { list, activeLi, changeActiveItem } = props
	return (
		<div className="tree--list">
			<ul>
				{ list.map(item => {
					return <li key={item.id} className={ activeLi === item.text ? 'active-item' : 'tree--list_item'} onClick={() => changeActiveItem(item.text)}>{item.text}</li>
				}) }
			</ul>
		</div>
	);
}

export default TreeList;
