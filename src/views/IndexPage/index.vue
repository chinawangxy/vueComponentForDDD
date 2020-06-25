<template>
  <div class="container">
    <tab />
  </div>
</template>

<script>
/* 
    页面组件：承载多个组件的容器
    页面组件尽量不要放任何数据、方法
*/
import Tab from "@/components/Tab";
export default {
  name: "IndexPage",
  components: {
    Tab
  }
};
</script>
<style></style>
