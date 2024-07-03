<script setup>
import TapBar from "@/components/bars/tabBar.vue";
import {useRoute} from "vue-router";
import Loading from "./components/loading-icon/loading.vue";
import useMainStore from "./stores/modules/main";

const route = useRoute();

const mainStore = useMainStore();



</script>


<template>

<div class="App">
  <router-view v-slot="props">
    <keep-alive include="home">
      <component :is="props.Component"></component>
    </keep-alive>
  </router-view>
  <tap-bar v-show="!route.meta.isHideTabBar"></tap-bar>

  <!-- 加载中的图片显示 -->
  <loading v-if="mainStore.isloading"></loading>
</div>

</template>


<style lang="less"scoped>

</style>
