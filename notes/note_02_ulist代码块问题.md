## ulist代码块问题
	在uniapp项目文件里输入ulist生成的是
```
	<uni-list>
		<uni-list-item title="" note=""></uni-list-item>
		<uni-list-item title="" note=""></uni-list-item>
	</uni-list>	
```
	我们需要修改为
	在菜单栏工具代码块设置 - vue代码块 - 
```
	"uListCY": {
		"body": [
			"<view class=\"uni-list\">",
				"\t<view class=\"uni-list-cell\">",
					"\t\t<view class=\"uni-list-cell-navigator uni-navigator-right\">",
						"",
					"\t\t</view>",
				"\t</view>",
			"</view>"
		],
		"prefix": "ulistcy",
		"project": "uni-app",
		"scope": "source.vue.html"
	}
```
	