<template>
  <div
    class="nav-item"
    :class="['nav-item', { 'nav-current': index === tabIndex }]"
    @click="changeTabIndex(index)"
  >
    {{ item }}
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "NavItem",
  props: {
    item: String,
    index: Number,
    curIdx: Number
  },
  computed: {
    ...mapState(["tabIndex"])
  },
  methods: {
    ...mapMutations(["changeTabIndex"])
  }
};
</script>

<style>
.nav-item {
  float: left;
  width: 25%;
  line-height: 50px;
  text-align: center;
}

.nav-item.nav-current {
  background-color: #000;
  color: #fff;
}
</style>
