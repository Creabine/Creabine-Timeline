# Creabine-Timeline
## 介绍
一款响应式时间轴插件。 [example](http://creabine.info/mywebsite/demo/Creabine-Timeline.html)
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
| root         	    | string       | NaN             |  yes       |
| itemList     	    | object array | NaN             |  yes       |
| startDirectionLeft| boolean 	   | true            |  no        |
| endWords      	| string       | NaN             |  no        |
