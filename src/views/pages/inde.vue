<template>
  <div>
    <NavBar :FirstData="FirstData"></NavBar>
  </div>
</template>

<script>
import { indexModel } from "./indexModel";
import { NavBar } from "./components/NavBar";
const defaultOpt = { code: -1, name: "全部" };
export default {
  name: "pageIndex",
  components: {
    NavBar
  },
  data() {
    return {
      firstData: [],
      secondData: []
    };
  },
  mounted() {
    this.getDatas();
  },
  methods: {
    async getDatas() {
      const firstData = (await indexModel.getFirstData()) || [];
      const secondData = (await indexModel.getSecondData()) || [];

      this.firstData = [defaultOpt, ...firstData];
      this.secondData = secondData;
    }
  }
};
</script>

<style></style>
