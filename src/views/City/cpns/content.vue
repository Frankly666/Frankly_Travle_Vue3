<script setup>
  import { computed, defineProps } from 'vue';
  import useHomeStore from '@/stores/modules/home';
  import { useRouter } from 'vue-router';

  const props = defineProps({
    allCity: Object,
    currntCityData: Object,
  })

  const indexList = computed(() => {
    let res = props.currntCityData?.cities.map(item => {
      return item.group;
    })
    res?.unshift("#");  // 在最前面加上一个热门的位置
    return res;
  })

  // 处理城市点击函数
  const homeStore = useHomeStore();
  const router = useRouter();
  function selectCity(cityName) {
    homeStore.currentCity = cityName;
    router.back();
  }
</script>


<template>
  <div class="content">
    <van-index-bar :index-list="indexList">
      <!-- 热门城市展示部分 -->
      <div class="hotCities">
        <van-index-anchor index="热门" />
        <div class="container">
          <template v-for="(item, index) in props.currntCityData?.hotCities" :key="index">
            <div class="item" @click="selectCity(item.cityName)">{{ item.cityName }}</div>
          </template>
        </div>

      </div>

      <!-- 所有城市展示部分 -->
      <template v-for="(item, index) in props.currntCityData?.cities" :key="index">
        <van-index-anchor :index="item.group" />

        <template v-for="(city, indey) in item.cities" :key="indey">
          <van-cell :title="city.cityName" @click="selectCity(city.cityName)" />        
        </template>
      </template>
    </van-index-bar>
  </div>
</template>


<style lang="less" scoped>  
  .content{
    .hotCities {
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 10px 25px 10px 10px;
        font-size: 12px;

      .item {
        width: 70px;
        height: 28px;
        line-height: 28px;
        margin: 6px 0;
        text-align: center;
        background-color: #fff4ec;
        border-radius: 10px;
      }
    }
   }
  }
</style>
