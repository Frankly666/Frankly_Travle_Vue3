<script setup>
  import useHomeStore from '@/stores/modules/home';
  import { storeToRefs } from 'pinia';
  

  const { categories } = storeToRefs(useHomeStore());


</script>


<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="icon-item">
        <img :src="item.pictureUrl" alt="">
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
    
  </div>
</template>


<style lang="less" scoped>
  .categories {
    display: flex;
    overflow-x: auto;
    margin-top: 5px;

    // 去除滑动条
    &::-webkit-scrollbar {
      display: none;  // 重点
    } 
    

    .icon-item {
      flex-shrink: 0;
      width: 70px;
      height: 80px;
      font-size: 12px;
      text-align: center;

      img {
        width: 38px;
        height: 38px;
        margin: 10px auto;

      }

      .text {
        align-self: center;
      }
    }
  }


</style>

