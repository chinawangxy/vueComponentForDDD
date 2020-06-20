<template>
  <div>
    <!-- 功能组件 -->
    <Counter />
  </div>
</template>

<script>
/**
 * @summary
 * 页面组件 只负责加载拼装 功能组件 禁止书写业务逻辑
 */
import Counter from "./Counter";
export default {
  name: "IndexPage",
  components: {
    Counter
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
