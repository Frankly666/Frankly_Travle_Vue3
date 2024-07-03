<script setup>

import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import contentType3 from '../../../components/img-box/content-type3.vue';
import contentType9 from '../../../components/img-box/content-type9.vue';
import { useRouter } from 'vue-router';
import useDetailStore from '@/stores/modules/details';

const { houselist } = storeToRefs(useHomeStore());

// 进行监听进入详情页的点击, 在点击的同时就请求所有的数据
const router = useRouter();
function enterDetail(id) {
  router.push("/detail/" + id)
}


</script>


<template>
  <div class="home-content">
    <div class="hot-select">热门精选</div>
    <div class="content">
      <template v-for="(item, index) in houselist" :key="item.data.houseId">
        <contentType3 v-if="item.discoveryContentType === 3" :itemData="item.data" @click="enterDetail(item.data.houseId)"></contentType3>
        <contentType9 v-else-if="item.discoveryContentType === 9" :houseData="item.data" @click="enterDetail(item.data.houseId)"></contentType9>
      </template>
    </div>
  </div>
</template>


<style lang="less" scoped>
  .home-content{
    .hot-select {
      padding: 10px;
      font-size: 22px;
      font-weight: bold;
      
    }
    .content {
      display: flex;
      flex-wrap: wrap;
    }
  }

</style>
