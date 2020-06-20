<template>
  <div>
    <counter-result :result="result" />

    <!-- 按钮 -->
    <div>
      <counter-button @compute="compute" innerText="+" action="PLUS" />
      <counter-button @compute="compute" innerText="-" action="MINUS" />
    </div>
  </div>
</template>

<script>
/**
 * @summary
 * 功能组件 入口 提供数据 以及完整功能
 *
 * @summary
 * CounterResult 子组件 提供事件返回父组件触发业务功能
 * 子组件仅接受功能组件 输入属性数据
 */

import CounterResult from "./result";
import CounterButton from "./button";
import { Counter } from "./Counter";
// 导入 业务模型
const CounterModel = new Counter();

export default {
  name: "Counter",
  components: {
    CounterResult,
    CounterButton
  },
  data() {
    return {
      result: 0
    };
  },
  methods: {
    compute(action) {
      //   console.log(action);
      CounterModel.service(this)(action);
    }
  }
};
</script>

<style></style>
