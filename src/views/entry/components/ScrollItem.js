import React from 'react';
const ScrollItem = (props) => {
	const { text, author } = props.issue
	return (
			<div className="entry--issue_item">
				<div className="entry--issue_left">
					<h4>{author}</h4>
					<p>{text}</p>
				</div>
				<div className="entry--issue_right"></div>
			</div>
	);
}

export default ScrollItem;
