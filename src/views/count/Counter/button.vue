<template>
  <button :action="action" @click="compute">
    {{ innerText }}
  </button>
</template>

<script>
export default {
  name: "CounterButton",
  props: {
    action: String,
    innerText: String
  },
  methods: {
    compute() {
      this.$emit("compute", this.action);
    }
  }
};
</script>

<style></style>
