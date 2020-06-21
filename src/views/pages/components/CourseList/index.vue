<template>
  <div class="course-list-wrap">
    <div class="course-list">
      <course-item
        v-for="(item, index) in courseData"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import CourseItem from "./CourseItem";

export default {
  name: "CourseList",
  components: {
    CourseItem
  },
  props: {
    courseData: Array
  }
};
</script>

<style></style>
