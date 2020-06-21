<template>
  <div class="nav-bar">
    <nav-item
      v-for="(item, index) in FirstData"
      :key="index"
      :index="index"
    />
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    FirstData: Array
  },
  components: {
    NavItem
  }
};
</script>

<style></style>
