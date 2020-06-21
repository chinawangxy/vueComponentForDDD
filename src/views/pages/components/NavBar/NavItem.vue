<template>
  <div class="nav-item">
    <a
      href="javascript:;"
      :class="[
        'nav-lk',
        { 'nav-current': index === curIdx }
      ]"
    >
      {{ item.name }}
    </a>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    index: Number,
    curIdx: Number,
    item: Object
  }
};
</script>

<style></style>
