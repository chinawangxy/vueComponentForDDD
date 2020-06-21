<template>
  <div class="nav-bar">
    <nav-item
      v-for="(item, index) in FirstData"
      :key="index"
      :index="index"
      :curIdx="curIdx"
    />
  </div>
</template>

<script>
import { NavItem } from "./NavItem";
export default {
  name: "NavBar",
  props: {
    FirstData: Array,
    curIdx: Number
  },
  components: {
    NavItem
  }
};
</script>

<style></style>
