<script setup>
import useDetailStore from '@/stores/modules/details';
import { storeToRefs } from 'pinia';


const { introductionModule } = storeToRefs(useDetailStore()) 


</script>


<template>
  <div class="introuduce">
    <h3>{{ introductionModule?.title }}</h3>
    <p>
      {{ introductionModule?.introduction }}
    </p>
  </div>
</template>


<style lang="less" scoped>
.introuduce{
  font-size: 12px;
  margin-top: 10px;
  padding: 15px 1px;
  border-top: 1.33333vw solid #f2f3f4;

  h3{
    font-size: 14px;
  }

  p {
    color: #666;
  }
}

</style>
