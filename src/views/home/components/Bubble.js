/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import tagCloud from '../../../packages/bubble';
import '../style/bubble.scss'
import { bubbleData } from '../../../data'
import { mapClasses } from '../../../utils/tool'
class Bubble extends Component {
	constructor(props) {
		super(props)
		this.state = {
			linkList: bubbleData
		}
	}
	componentDidMount() {
		const bubble = tagCloud(window, document)
    bubble({
      selector: '.bubble--tagcloud', // 元素选择器
      fontsize: 12, // 基本字体大小, 单位px
      radius: 60, // 滚动半径, 单位px 页面宽度和高度的五分之一
      mspeed: 'slow', // 滚动最大速度, 取值: slow, normal(默认), fast
      ispeed: 'slow', // 滚动初速度, 取值: slow, normal(默认), fast
      direction: 135, // 初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
      keep: false // 鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
		})
	}
	render() {
		const { linkList } = this.state
		return (
			<div className="bubble">
				<div className="bubble--tagcloud">
					{
						linkList.map((item, index) => {
							return <a key={index} className={mapClasses(item.id)(item.position).join(' ')}>{ item.text }</a>
						})
					}
				</div>
			</div>
		)
	}
}

export default Bubble;
