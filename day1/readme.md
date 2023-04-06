

### vue 基础语法
- vue 语法及配置属性
    - {{}} 渲染模版使用变量（响应式变量）/简单的js表达式 如：message.split('').reverse().join('')
    - : v-bind 的缩写 将属性转换可以去支持使用变量
    - data 定义局部组建中的响应式数据
    - methods 定义局部组建中的方法
- 合成事件
    - 监听dom二级事件 直接给元素绑定事件 onclick=“方法”
    - @ v-on 简写绑定事件的语法全称是v-on进行处理合成事件
    - @click
    - @change
    - @input
    - @keydown
- 内置指令
    - v-model 双向绑定原理 监听input/change事件和对应的value属性进行实时更新
    - v-html 富文本渲染（解析html 等价于js中的innerHTML）渲染到绑定的元素中
    - v-show 通过控制样式进行隐藏元素 元素不会消失
    - v-if 通过控制dom进行隐藏元素 元素根据条件去控制是否渲染到html结构中
    - v-for 实现dom元素的循环遍历渲染