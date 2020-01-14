import React, { Component } from 'react';
import echarts from 'echarts'
export class Cookie extends Component {
	componentDidMount() {
		var myChart = echarts.init(document.getElementById('main'));
		var option = {
			tooltip: {
					trigger: 'item',
					formatter: '{a} <br/>{b} :  {d}% '
			},
			legend: {
				orient: 'vertical',
				right: 50,
				top: 35,
				textStyle: {
					color: '#ccc'
				},
				data: ['React', 'Sql', 'Vue', 'Docker', 'JavaScript', 'Golang', 'TypeScript', 'Node']
			},
			toolbox: {
					show: true,
					feature: {
							mark: {show: true},
							dataView: {show: true, readOnly: false},
							magicType: {
									show: true,
									type: ['pie', 'funnel']
							},
					}
			},
			series: [
					{
							name: '技术占比',
							type: 'pie',
							radius: [30, 110],
							center: ['40%', '45%'],
							roseType: 'area',
							data: [
								{value: 25, name: 'React'},
								{value: 10, name: 'Sql'},
								{value: 35, name: 'Vue'},
								{value: 5, name: 'Docker'},
								{value: 40, name: 'JavaScript'},
								{value: 15, name: 'Golang'},
								{value: 20, name: 'TypeScript'},
								{value: 30, name: 'Node'},
							]
					}
			]
	};
		// 指定图表的配置项和数据
	// 	var option = {
	// 		title: {
	// 				text: '技术栈分布',
	// 				left: 'center',
	// 				top: 10,
	// 				textStyle: {
	// 						color: '#ccc'
	// 				}
	// 		},
	
	// 		tooltip: {
	// 				trigger: 'item',
	// 				formatter: '{a} <br/>{b} : {c} ({d}%)'
	// 		},
	
	// 		visualMap: {
	// 				show: false,
	// 				min: 80,
	// 				max: 600,
	// 				inRange: {
	// 						colorLightness: [0, 1]
	// 				}
	// 		},
	// 		series: [
	// 				{
	// 						name: '访问来源',
	// 						type: 'pie',
	// 						radius: '55%',
	// 						center: ['50%', '50%'],
	// 						data: [
	// 								{value: 310, name: 'Node'},
	// 								{value: 250, name: 'Go'},
	// 								{value: 210, name: 'TypeScript'},
	// 								{value: 235, name: 'React'},
	// 								{value: 340, name: 'Vue'},
	// 								{value: 210, name: 'Docker'},
	// 								{value: 350, name: 'JavaScript'},
	// 						],
	// 						roseType: 'radius',
	// 						label: {
	// 								color: 'rgba(255, 255, 255, 0.3)'
	// 						},
	// 						labelLine: {
	// 								lineStyle: {
	// 										color: 'rgba(255, 255, 255, 0.3)'
	// 								},
	// 								smooth: 0.2,
	// 								length: 10,
	// 								length2: 20
	// 						},
	// 						itemStyle: {
	// 								color: '#c23531',
	// 								shadowBlur: 200,
	// 								shadowColor: 'rgba(0, 0, 0, 0.5)'
	// 						},	
	// 						animationType: 'scale',
	// 						animationEasing: 'elasticOut',
	// 						animationDelay: function (idx) {
	// 								return Math.random() * 200;
	// 						}
	// 				}
	// 		]
	// };

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	}
	render() {
		return (
			<div id="main" style={{width: '100%', height:'100%', minHeight: '300px'}}>

			</div>
		);
	}
}

export default Cookie;
