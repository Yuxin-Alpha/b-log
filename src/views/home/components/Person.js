import React from 'react';
import '../style/person.scss'
const Person = () => {
	return (
		<div className="person">
			<div className="person--left">
				<p className="person--left_item">姓名： 张宇心</p>
				<p className="person--left_item">年龄： 24</p>
				<p className="person--left_item">毕业院校： 大连理工大学</p>
				<p className="person--left_item">工作年限： 1年+</p>
				<p className="person--left_item">职位： 前端工程师</p>
			</div>
			<div className="person--right"></div>
		</div>
	);
}

export default Person;
