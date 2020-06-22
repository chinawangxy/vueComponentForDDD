## 组件化 思维构建

> [支持] es6 支持模块化 + 数据的双向绑定

> JS 设计模式 优化项目

组件 依赖数据 改变 显示内容

组件 内部减少逻辑

组件 导入 业务建模，将所有逻辑处理 委托给业务模型

type -> 事件 -> 模型 （-> 调度 -> 逻辑） -> 数据更改

写组件 要从外 往 里 写

组件 页面布局组件 + 内容组件

内容组件 = 组件出口[数据获取] + 子组件[显示]

页面组件 -> 内容组件的容器 [尽量不要写逻辑]

内容组件 -> 数据保存 + 逻辑处理

子组件 -> 视图 数据[从属性获取，方法通过事件传递到内容组件]

## 组件化实现

组件内部 应该 封装 一类事情 的 完整逻辑

组件通过 外放接口 与 外界沟通

行为 触发 模型功能

函数式 -> 模块化 -> 组件化
功能函数封装 -> js 文件独立功能 -> 组件具有自己的结构 与视图

## 我的组件化思想理解

- 组件 是一个高度内聚 低耦合的存在
- 组件 有自己的视图逻辑 是能解决问题的存在
- 组件 有自身的 数据 视图 行为 没有 具体实现 实现应该由领域模型提供
- 组件 不应该知道 业务或者数据的具体 实现
- 父组件 应该告诉子组件 你的行为 要执行 什么 事件(抽象预取发生的事件)
- 子组件 应该只提供行为+事件 告诉父组件 我触发行为 要执行的 事件(抽象预取发生的事件)
- 若父组件 并不知道或无法执行该事件 当前事件就应作为行为 向上层父组件继续提供 行为+事件
- 所有 组件内无法 找到的数据 都是属性， 属性全部由父组件传递。
- 所有 组件内能找到 的数据 都是 组件自己定义的 默认数据 默认数据 是组件自身提供的数据 作为最顶层 可以向子组件 传递。
- 父组件不能提供的数据 就应该 请求模型拿取数据 作为组件的默认数据
- 模型 与 现实进行 映射 提供 真实 的业务流程 数据处理

```
子组件 -> 数据+事件 -> 触发行为 -> 向上层提交事件 -> 父组件监听行为 -> 匹配事件 ->
领域模型 -> 匹配事件 -> 执行业务 -> 返回数据 -> 父组件 ->
数据 + 事件 -> 子组件 -> 触发行为
```
