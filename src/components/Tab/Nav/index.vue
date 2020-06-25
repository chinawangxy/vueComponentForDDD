<template>
  <div class="tab-nav">
    <Item
      v-for="(item, index) of navData"
      :key="index"
      :index="index"
      :item="item"
      :curIdx="curIdx"
    />
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "TabNav",
  props: {
    navData: Array,
    curIdx: Number
  },
  components: {
    Item
  }
};
</script>

<style>
.tab-nav {
  height: 50px;
  border: 1px solid #ccc;
}
</style>
