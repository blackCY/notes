## 顶部滑动导航栏
#### 全局css样式: 
	.uni-tab-bar
		.uni-swiper-tab
			.swiper-tab-list
```
	<scroll-view scroll-x class="uni-swiper-tab" scroll-with-animation="true">
		<block v-for="(tab, tabIdx) in tabBars" :key="tab.id">
			<view class="swiper-tab-list" :class="{'active': tabIdx === tabIndex}" @tap="tabtap(tabIdx)">{{tab.name}}
				<view class="swiper-tab-line"></view>
			</view>
		</block>
	</scroll-view>
```