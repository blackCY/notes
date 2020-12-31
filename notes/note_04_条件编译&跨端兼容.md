## 跨端兼容
	uni-app 已将常用的组件、JS API 封装到框架中，开发者按照 uni-app 规范开发即可保证多平台兼容，大部分业务均可直接满足。
	
	但每个平台有自己的一些特性，因此会存在一些无法跨平台的情况。
	
	大量写 if else，会造成代码执行性能低下和管理混乱。
	编译到不同的工程后二次修改，会让后续升级变的很麻烦。
	在 C 语言中，通过 #ifdef、#ifndef 的方式，为 windows、mac 等不同 os 编译不同的代码。 uni-app 参考这个思路，为 uni-app 提供了条件编译手段，在一个工程里优雅的完成了平台个性化实现。
## 条件编译
	条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。
	
	写法：以 #ifdef 或 #ifndef 加 %PLATFORM% 开头，以 #endif 结尾。
	
	#ifdef：if defined 仅在某平台存在
	#ifndef：if not defined 除了某平台均存在
	%PLATFORM%：平台名称
	条件编译写法	说明
	#ifdef APP-PLUS
	需条件编译的代码
	#endif
	仅出现在 5+App 平台下的代码
	#ifndef H5
	需条件编译的代码
	#endif
	除了 H5 平台，其它平台均存在的代码
	#ifdef H5 || MP-WEIXIN
	需条件编译的代码
	#endif
	仅在 H5 平台或微信小程序平台存在的代码
	%PLATFORM% 可取值如下：
	
	值	平台	参考文档
	APP-PLUS	5+App	HTML5+ 规范
	APP-PLUS-NVUE	5+App nvue	Weex 规范
	H5	H5	
	MP-WEIXIN	微信小程序	微信小程序
	MP-ALIPAY	支付宝小程序	支付宝小程序
	MP-BAIDU	百度小程序	百度小程序
	MP-TOUTIAO	头条小程序	头条小程序
	MP-QQ	QQ小程序	（目前仅cli版支持）
	MP	微信小程序/支付宝小程序/百度小程序/头条小程序/QQ小程序	 
	支持的文件
	
	.vue
	.js
	.css
	pages.json
	各预编译语言文件，如：.scss、.less、.stylus、.ts、.pug
	注意： 条件编译是利用注释实现的，在不同语法里注释写法不一样，js使用 // 注释、css 使用 /* 注释 */、vue/nvue 模板里使用 <!-- 注释 -->；
	
	API 的条件编译
	// #ifdef  %PLATFORM%
	平台特有的API实现
	// #endif
	
	除了支持单个平台的条件编译外，还支持多平台同时编译，使用 || 来分隔平台名称。
	
	示例，如下代码会在 5+App 和 H5 平台上出现：
	
	
	
	组件的条件编译
	<!--  #ifdef  %PLATFORM% -->
	平台特有的组件
	<!--  #endif -->
	示例，如下广告组件仅会在微信小程序中出现：
	
	uniapp
	
	样式的条件编译
	/*  #ifdef  %PLATFORM%  */
	平台特有样式
	/*  #endif  */
	注意： 样式的条件编译，无论是 css 还是 sass/scss/less/stylus 等预编译语言中，必须使用 /*注释*/ 的写法。
	
	pages.json 的条件编译
	下面的页面，只有运行至 5+App 时才会编译进去。
	
	
	不同平台下的特有功能，以及小程序平台的分包，都可以通过 pages.json 的条件编译来更好地实现。这样，就不会在其它平台产生多余的资源，进而减小包体积。
	
	json的条件编译，如不同平台的key名称相同，cli项目下开发者自己安装的校验器会报错，需自行关闭这些校验器对json相同key的校验规则。如果使用HBuilderX的校验器，无需在意此问题，HBuilderX的语法校验器为此优化过。
	
	static 目录的条件编译
	在不同平台，引用的静态资源可能也存在差异，通过 static 的的条件编译可以解决此问题，static 目录下新建不同平台的专有目录（目录名称同 %PLATFORM% 值域,但字母均为小写），专有目录下的静态资源只有在特定平台才会编译进去。
	
	如以下目录结构，a.png 只有在微信小程序平台才会编译进去，b.png 在所有平台都会被编译。
	

	┌─static                
	│  ├─mp-weixin
	│  │  └─a.png     
	│  └─b.png
	├─main.js        
	├─App.vue      
	├─manifest.json 
	└─pages.json     
	    
	
	整体目录条件编译
	如果想把各平台的页面文件更彻底的分开，也可以在uni-app项目根目录创建platforms目录，然后在下面进一步创建APP-PLUS、MP-WEIXIN等子目录，存放不同平台的文件。
	
	HBuilderX 支持
	HBuilderX 为 uni-app 的条件编译提供了丰富的支持:
	
	代码块支持
	
	在 HBuilderX 中开发 uni-app 时，通过输入 ifdef 可快速生成条件编译的代码片段
	
	语法高亮
	
	在 HBuilderX 中对条件编译的代码注释部分提供了语法高亮，可分辨出写法是否正确，使得代码更加清晰（独立js文件需在编辑器右下角切换javascript es6+编辑器，独立css文件暂不支持高亮，但不高亮不影响使用）
	
	正确注释和快速选中
	
	在 HBuilderX 中，ctrl+alt+/ 即可生成正确注释（js：// 注释、css：/* 注释 */、vue/nvue模板： <!-- 注释 -->）。
	
	点击 ifdef 或 endif 可快速选中条件编译部分；点击左侧的折叠图标，可折叠条件编译部分代码。
	
	注意
	Android 和 iOS 平台不支持通过条件编译来区分，如果需要区分 Android、iOS 平台，请通过调用 uni.getSystemInfo 来获取平台信息。在HBuilderX1.9.10起，支持ifios、ifAndroid代码块，可方便编写判断。
	有些跨端工具可以提供js的条件编译或多态，但这对于实际开发远远不够。uni-app不止是处理js，任何代码都可以多端条件编译，才能真正解决实际项目的跨端问题。另外所谓多态在实际开发中会造成大量冗余代码，很不利于复用和维护。举例，微信小程序主题色是绿色，而百度支付宝小程序是蓝色，你的应用想分平台适配颜色，只有条件编译是代码量最低、最容易维护的。
	有些公司的产品运营总是给不同平台提不同需求，但这不是拒绝uni-app的理由。关键在于项目里，复用的代码多还是个性的代码多，正常都是复用的代码多，所以仍然应该多端。而个性的代码放到不同平台的目录下，差异化维护。
