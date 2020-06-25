<template>
  <div class="tab">
    <tab-nav :navData="navData" :curIdx="curIdx" />
    <tab-content :contentData="contentData" :curIdx="curIdx" />
  </div>
</template>

<script>
import TabNav from "./Nav";
import TabContent from "./Content";

import * as HttpData from "@/data/data";

export default {
  name: "Tab",
  components: {
    TabNav,
    TabContent
  },
  data() {
    return {
      navData: HttpData.navs,
      contentData: HttpData.pages,
      curIdx: 0
    };
  }
};
</script>

<style>
.tab {
  width: 500px;
  height: 500px;
  margin: 50px auto;
  border: 1px solid #ccc;
}
</style>
