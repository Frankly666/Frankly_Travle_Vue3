<script setup>
  import { computed } from 'vue';
  import MonthDayFormate from '@/utils/MonthDayFormate';
  import useMainStore from "@/stores/modules/main"

  const mainStore = useMainStore();
  
  const startDateStr = computed(() => {
    return MonthDayFormate(mainStore.startDate.value)
  });
  const endDateStr = computed(() => {
    return MonthDayFormate(mainStore.endDate.value)
  })
  

</script>


<template>
  <div class="home-search">
    <h1>当前城市名: {{ $route.query.currentCity }}</h1>
    <h2>开始时间: {{ startDateStr }}</h2>
    <h2>结束时间: {{ endDateStr }}</h2>
  </div>
</template>


<style lang="less"scoped>

</style>
