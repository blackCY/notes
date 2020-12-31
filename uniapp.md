# uniapp

## 注册组件的方式

- kebab-case(短横线命名)
- PascalCase(驼峰命名)

## main.js 文件全局注册组件

```js
import Vue from "vue";
import pageHead from "./components/page-head.vue";
Vue.component("page-head", pageHead);
```

## easycom

传统 vue 组件，需要安装、引用、注册，三个步骤后才能使用组件。easycom 将其精简为一步。 只要组件安装在项目的 components 目录下，并符合 components/组件名称(目录)/组件名称.vue 目录结构(**注意这里一定要目录名和文件名相同才可以**)。就可以不用引用、注册，直接在页面中使用。 如下

```vue
<template>
  <view class="container">
    <uni-list>
      <uni-list-item title="第一行"></uni-list-item>
      <uni-list-item title="第二行"></uni-list-item>
    </uni-list>
  </view>
</template>
<script>
// 这里不用import引入，也不需要在components内注册uni-list组件。template里就可以直接用
export default {
  data() {
    return {};
  },
};
</script>
```

**不管 components 目录下安装了多少组件，easycom 打包后会自动剔除没有使用的组件，类似 tree shaking, 对组件库的使用尤为友好**

**组件库批量安装，随意使用，自动按需打包**

可以通过 v-bind 动态赋值

```vue
<!-- 动态赋予一个变量的值 -->

<blog-post v-bind:title="post.title"></blog-post>

<!-- 包含该 prop 没有值的情况在内，都意味着 `true`。-->
<blog-post is-published></blog-post>

<blog-post v-bind:is-published="post.isPublished"></blog-post>
```

## 单向数据流

所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

**每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。**

## 自定义事件

<https://uniapp.dcloud.io/vue-components?id=%e8%87%aa%e5%ae%9a%e4%b9%89%e4%ba%8b%e4%bb%b6>
