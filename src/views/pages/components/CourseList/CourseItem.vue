<template>
  <div class="course-item">
    <div class="cover">
      <a
        :href="`https://www.baidu.com?${id}`"
        target="_blank"
        class="course-lk"
      >
        <img :src="item.img" :alt="item.name" />
      </a>
    </div>
    <h1 class="course-tt">
      {{ item.name }}
    </h1>
    <div :class="['price', { free: item.price === '0' }]">
      {{ item.price === "0" ? "免费" : `￥${item.price}.00` }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseItem",
  props: {
    item: Object
  }
};
</script>

<style></style>
