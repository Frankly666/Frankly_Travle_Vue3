<script setup>
  import { ref, watch } from 'vue';
  import tabbarData from '@/assets/data/tabbar';
  import getImgUrl from '@/utils/getImgUrl';
  import { useRoute } from 'vue-router';

  const currentActiveIndex = ref(0)

  // 解决手动切换路由时不显示icon的激活图片的问题
  const route = useRoute();
  watch(route, (newValue) => {
    let index = tabbarData.findIndex((item) => (item.path === newValue.path))
    currentActiveIndex.value = index
  })


</script>


<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentActiveIndex" route>
      <template v-for="(item, index) in tabbarData" :key="index" >
        <van-tabbar-item replace :to="item.path" >
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentActiveIndex !== index" :src="getImgUrl(item.image)" alt="">
            <img v-else :src="getImgUrl(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>


<style lang="less" scoped>

  :deep(.van-tabbar-item--active) {
    color: var(--primary-color);
  }

  :deep(.van-tabbar-item__icon img){
    height: 25px;
  }

  :deep(.van-tabbar){
    z-index: 1;
  }
  
</style>
