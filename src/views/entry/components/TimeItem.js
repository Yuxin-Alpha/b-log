import React, { Fragment } from 'react';
import { Timeline } from 'antd';
const TimeItem = (props) => {
	const times = props.activeTimes
	return (
		<Fragment>
			<Timeline mode="alternate">
				{
					times.map(item => {
						return (<Timeline.Item 
							key={item.id}
							color={item.color} 
							>
								<h5>{item.date}</h5>
								<p>{item.text}</p>
							</Timeline.Item>)
					})
				}
			</Timeline>
		</Fragment>
	);
}

export default TimeItem;
