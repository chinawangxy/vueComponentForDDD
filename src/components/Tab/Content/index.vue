<template>
  <div class="tab-content">
    {{ contentData[tabIndex] }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Content",
  props: {
    contentData: Array,
    curIdx: Number
  },
  computed: {
    ...mapState(["tabIndex"])
  }
};
</script>

<style>
.tab-content {
  height: 450px;
  font-size: 100px;
  line-height: 450px;
  text-align: center;
}
</style>
