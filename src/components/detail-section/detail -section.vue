<script setup>
import {defineProps} from "vue"
const props = defineProps({
  header:{
    type: String,
  },
  footer: {
    type: String,
  }
})
</script>


<template>
  <div class="detail-section">
    <h2 class="header">
      <slot name="header">{{ header }}</slot>
    </h2>

    <div class="main">
      <slot name="main"></slot>
    </div>

    <div class="footer" v-if="props.footer">
      <slot name="footer">{{ footer }}</slot>
      <van-icon name="arrow" />
    </div>
      
  </div>
</template>


<style lang="less" scoped>
.detail-section {
  border-top: 1.33333vw solid #f2f3f4;
  margin-top: 50px;

  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
  }

  .main {
    margin-top: 10px;
  }

  .footer {
    margin-top: 30px;
    font-weight: bold;
    text-align: right;
    color: var(--primary-color);
  }
}

</style>
