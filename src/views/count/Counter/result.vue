<template>
  <div>{{ result }}</div>
</template>

<script>
/**
 * @summary
 * 子组件 提供 视图 与 事件触发 返回父级
 *
 * @summary
 * 属性：props 视图内找不到没有默认定义 都是属性
 * 数据：data 有默认数据 能在组件内找到
 * 外部获取为属性 ，内部定义为数据
 */

export default {
  name: "CounterResult",
  props: {
    result: Number
  }
};
</script>

<style></style>
