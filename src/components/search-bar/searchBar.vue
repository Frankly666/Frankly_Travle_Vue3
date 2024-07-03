<script setup>
  import { ref } from 'vue';
  import { useRouter } from "vue-router"
  
  const value = ref("")
  const router = useRouter();

  function backHome() { 
    router.back(1);
  }
</script>


<template>
  <div class="search-bar">
    <van-search v-model="value" placeholder="城市/区域/位置" :show-action="true" @cancel="backHome"/>
  </div>
</template>


<style lang="less"scoped>

</style>
