<script setup>
import useHomeStore from "@/stores/modules/home";
import HomeSearchBox from "./cpns/Home-searchbox.vue"
import HomeCategories from "./cpns/Home-categories.vue";
import HomeContent from "./cpns/Home-content.vue";
import SearchBarHome from "@/components/search-bar/search-bar-home.vue"
import watchWindowScroll from "@/hooks/watchWindowScroll";
import { computed, onActivated, ref, watch } from "vue";



// 获取categories的数据
const homeStore = useHomeStore();
homeStore.getCategories();

// 获取houselist的数据
homeStore.gethouselist();

// 监听window的滚动
const home = ref();
const { isReachBottom, scrollTop } = watchWindowScroll(home);

// 监听是否到达底部
watch(isReachBottom, (newValue) => {
  if(newValue) {
    homeStore.gethouselist().then(() => {
      isReachBottom.value = false;
    })
  }
})

// 是否显示顶部搜索栏
const isShowSearch = computed(() => {
  return scrollTop.value >= 360;
})
 
// 跳转回home时, 保留原来的位置
onActivated(() => {
  home.value?.scrollTo({
    top: scrollTop.value
  })
})

</script>


<script>
  export default { name: "home" }
</script>



<template>

<div class="home top-page" ref="home">
  <div class="head"><span>悦途心迹</span></div>

  <div class="img"><img src="../../assets/img/home/banner.webp" alt=""></div>

  <div class="wrapper01">
    <!-- 搜索的组件封装 -->
    <home-search-box></home-search-box>

    <!-- 小图标的展示 -->
    <home-categories></home-categories>
    
    <div class="search-bar" v-show ="isShowSearch">
      <search-bar-home></search-bar-home>
    </div>
    
  </div>

  <div class="wrapper02">
    <!-- 主要内容显示 -->
    <home-content></home-content>
  </div>
</div>

</template>


<style lang="less"scoped>
  .home {
    .head {
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
      color:var(--primary-color);
    }

    .img{
      img{
        width: 100%;
      }
    }

    .search-bar {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      right: 0;
      height: 45px;
      padding: 16px 16px 10px;
      background-color: #fff;
    }
  }
</style>
