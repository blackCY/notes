## 显示操作菜单
​```
uni.showActionSheet(OBJECT)
	uni.showActionSheet({
		itemList: ['A', 'B', 'C'],
		success: function (res) {
			console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
		},
		fail: function (res) {
			console.log(res.errMsg);
		}
	});
```