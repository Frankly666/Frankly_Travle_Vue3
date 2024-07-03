<script setup>
  import useCityStore from '@/stores/modules/city';
  import searchBar from '@/components/search-bar/searchBar.vue';
  import content from './cpns/content.vue';
  import { ref } from 'vue';

  const cityStore = useCityStore();
  cityStore.getAllCityData();  // 他妈滴你要调用才会得到数据啊,真服了

  const currntCityData = ref() // 用来绑定tab的显示, 默认是数字
  
</script>


<template>
  <div class="City">
    <div class="top">
      <!-- 搜索栏组件 -->
      <searchBar></searchBar>

      <!-- tab组件 -->
      <div class="tab">
        <van-tabs v-model:active="currntCityData" color="#ff9854">
          <template v-for="(value, key, index) in cityStore.allCity" :key="index">
            <van-tab :title="value.title" :name="key">
            </van-tab>
          </template>
        </van-tabs>
      </div>
    </div>
    
    <!-- 内容部分 组件 -->
    <div class="content-cover">
      <content :currntCityData="cityStore.allCity.cityGroup" v-show="currntCityData === 'cityGroup'"></content> 
      <content :currntCityData="cityStore.allCity.cityGroupOverSea" v-show="currntCityData === 'cityGroupOverSea'"></content> 
    </div>
  </div>
</template>


<style lang="less"scoped>
  .top {
    position: fixed;
    top: 0;
    width: 100%;
    height: 98px;
    z-index: 9;
    margin:0 auto;
  }

  .content-cover {
      margin-top: 99px;
      height: calc(100vh - 98px);
      overflow: auto;
  }
</style>
