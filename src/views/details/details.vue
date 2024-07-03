<script setup>
import { useRoute, useRouter } from 'vue-router';
import useDetailStore from '@/stores/modules/details';
import swipper from "./cpns/details-01-swipper.vue";
import describe from './cpns/details-02-describe.vue';
import facility from './cpns/details-03-facility.vue';
import landlord from './cpns/details-04-landlord.vue';
import HotCommend from './cpns/details-05-hot-recommend.vue';
import Notice from './cpns/details-06-notice.vue';
import Map from "./cpns/details-07-map.vue"
import introuduce from "./cpns/details-08-info.vue"
import { computed, onMounted, ref, watchEffect } from 'vue';
import watchWindowScroll from '@/hooks/watchWindowScroll';
import { watch } from 'vue';




// 顶部返回点击函数
const router = useRouter();
function onClickLeft() {
  router.back();
}

const route = useRoute();
const detailStore = useDetailStore()
detailStore.getDetails(route.params.id);


// topbar操作部分
const currentIndex = ref(0);
const isShowTopBar = ref(false);
const topBar = ref();

const { scrollTop } = watchWindowScroll(topBar)
isShowTopBar.value = computed(() => {
  return scrollTop.value >= 500
})



// 下面是获得这五个组件距离顶部的位置然后进行一系列操作
const sections = ref({});  // 用来记录
const sectionNames = computed(() => {
  return Object.keys(sections.value)  // 得到各个位置的名字
})
const fixedTopbar = ref();
const sectionPosition = computed(() => {
  let list = [];
  for(let i = 0; i < sectionNames.value.length; i ++) {
    let key = sectionNames.value[i];
    list.push(sections.value[key]?.offsetTop);
  }
  return list;
})


// 绑定的这个函数在每次组件更新时都会调用,传入的参数是元素的引用
function getTabSectionRef(value) {
  if(!value) return;
  const key = value.$el.getAttribute("name");
  sections.value[key] = value.$el;
}



// 监听点击操作
let isClick = false;
let targetDistance = -1;
function onClickTab() {
  targetDistance = sectionPosition.value[currentIndex.value] - fixedTopbar.value.offsetHeight;
  
  isClick = true;

  topBar.value.scrollTo({
    top: targetDistance,
    behavior: "smooth"
  })
}



// 监听滚动
watch(scrollTop, (newTop) =>  {
  if (newTop === targetDistance) {
    isClick = false
  }
  if (isClick) return


  let length = sectionPosition.value.length;
  let index = length - 1;
  for(let i = 0; i < length; i ++) {
    if(newTop < sectionPosition.value[i] - fixedTopbar.value.offsetHeight) {
      index = i - 1;
      break;
    }
  }
  currentIndex.value = index;
  
})
</script>


<template>
  <div class="details top-page" ref="topBar">
    <!-- 顶部介绍以及返回 -->
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 轮播图组件 -->
    <swipper></swipper>

    <div class="wrapper02">
      <!-- 信息描述部分 -->
       
      <describe></describe>

      <!-- 房屋设施部分 -->
      <facility name="设施" :ref="getTabSectionRef"></facility>

      <!-- 房东介绍部分 -->
       <landlord name="房东" :ref="getTabSectionRef"></landlord>

       <!-- 热门评论部分 -->
      <hot-commend name="评论" :ref="getTabSectionRef"></hot-commend>

      <!-- 入住须知 -->
      <notice name="须知" :ref="getTabSectionRef"></notice>

      <!-- 地图展示是 -->
      <Map name="位置" :ref="getTabSectionRef"></Map>

      <!-- 价格说明 -->
      <introuduce></introuduce>

      <!-- 底部图标 -->
      <div class="footer">
        <img src="../../assets/img/detail/icon_ensure.png" alt="">
        <div class="text">悦途心迹,永无止境!</div>
      </div>
    </div>


    <!-- 顶部bar -->
    <div class="top-bar" v-show="isShowTopBar.value" ref="fixedTopbar">
      <van-tabs v-model:active="currentIndex" @click-tab="onClickTab">
        <template v-for="(item, index) in sectionNames" :key="index">
          <van-tab :title="item" ></van-tab>
        </template>   
      </van-tabs>
    </div>

    

  </div>
</template>


<style lang="less" scoped>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.footer {
  margin: 2.5rem 0;
  width: 100%;
  text-align: center;

  img {
    width: 7.75rem;
  }

  .text {
    font-size: .75rem;
    color: #666;
    margin-top: .5rem;
  }
}

</style>
