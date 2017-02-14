# Creabine-Timeline
## 介绍
一款响应式时间轴插件
## 使用
1 引用文件：

`<link rel="stylesheet" href="../dist/Creabine-Timeline.css">`

`<script src="../src/Creabine-Timeline.js"></script>`
    
2 添加标签：

`<div id="timeLine"></div>`

3 js调用：

```
var timeLineItemList = [
		{
  			time:'2010',
  			contentList:[
	  			'《钢铁侠1》',
	  			'托尼·史塔克在恐怖分子追捕中受伤，在山洞中造出了第一副盔甲之后回到美国。',
  			]
  		},
];

new CreabineTimeline({
		root:'timeLine',
		itemList:timeLineItemList,
		startDirectionLeft: true,
		endWords:'持续更新中',
})
```

### Options
| name          	| type         | default         | required   |
| --------      	| ---------    |:----------:     | ----------:| 
| root         	    | String       | NaN             |  yes       |
| itemList     	    | Object array | NaN             |  yes       |
| startDirectionLeft| Boolean 	   | true            |  no        |
| endWords      	| String       | NaN             |  no        |
