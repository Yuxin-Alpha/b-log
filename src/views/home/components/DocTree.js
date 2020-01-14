import React, { Component } from 'react';
import echarts from 'echarts'
import {treeData} from '../../../data/doc_tree'
export class DocTree extends Component {
	componentDidMount() {
		const { activeLi } = this.props
		// const myChart = echarts.init(document.getElementById('doc'));
		// console.log(this);
		this.showChat(activeLi)
	}
	showChat=(activeLi)=> {
		const myChart = echarts.init(document.getElementById('doc'));
		myChart.showLoading();
		var option = {
			tooltip: {
					trigger: 'item',
					triggerOn: 'mousemove'
			},
			series:[
					{
							type: 'tree',
	
							name: 'tree1',
	
							data: [treeData[activeLi]],
	
							top: '5%',
							left: '12%',
							bottom: '2%',
							right: '40%',
							symbolSize: 7,
	
							label: {
								position: 'left',
								verticalAlign: 'bottom',
								align: 'right',
								color: '#ffffff'
							},
							leaves: {
								label: {
									position: 'right',
									verticalAlign: 'middle',
									align: 'left'
								}
							},
							expandAndCollapse: true,
							animationDuration: 550,
							animationDurationUpdate: 750
	
					}
			]
		};
		myChart.hideLoading();
		myChart.setOption(option);
	}
	shouldComponentUpdate(next) {
		const { activeLi } = next
		this.showChat(activeLi)
		return true
	}
	render() {
		return (
			<div id="doc" style={{width: '100%', height:'100%', minHeight: '300px'}}>

			</div>
		);
	}
}

export default DocTree;
