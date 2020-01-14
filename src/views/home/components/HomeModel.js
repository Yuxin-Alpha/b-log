import React from 'react';
import '../style/model.scss'
const HomeModel = (props) => {
	const {title, children} = props
	return (
		<div className="model">
			<div className="model--header">
				{ title }
			</div>
			<div className="model--body">
				{children}
			</div>
		</div>
	);
}

export default HomeModel;
