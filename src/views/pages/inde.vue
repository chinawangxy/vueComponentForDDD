<template>
  <div>
    <NavBar :FirstData="FirstData" :curIdx="curIdx"></NavBar>
    <CourseList :courseData="courseData" />
  </div>
</template>

<script>
import { indexModel } from "./indexModel";
import NavBar from "./components/NavBar";
import CourseList from "./components/CourseList";

const defaultOpt = { code: -1, name: "全部" };
export default {
  name: "pageIndex",
  components: {
    NavBar,
    CourseList
  },
  data() {
    return {
      firstData: [],
      secondData: [],
      curIdx: 0
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
