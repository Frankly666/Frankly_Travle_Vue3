<script setup>
import DetailSection from '@/components/detail-section/detail -section.vue';
import useDetailStore from '@/stores/modules/details';
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const {positionModule} = storeToRefs(useDetailStore())


watch(positionModule, (newValue => {
  var map = new BMapGL.Map('container'); // 创建Map实例
  map.centerAndZoom(new BMapGL.Point(newValue.longitude, newValue.latitude), 14); // 初始化地图,设置中心点坐标和地图级别
  var marker1 = new BMapGL.Marker(new BMapGL.Point(newValue.longitude, newValue.latitude));
  map.addOverlay(marker1);
}))




</script>


<template>
  <div class="map">
    <detail-section header="位置周边" footer="查看更多周边信息">
      <template #main>
        <div id="container"></div>
      </template>
    </detail-section>
  </div>
</template>


<style lang="less" scoped>
#container {
    overflow: hidden;
    width: 100%;
    height: 280px;
    margin: 0;
    font-family: "微软雅黑";
}
.info {
    z-index: 999;
    width: auto;
    min-width: 22rem;
    padding: .75rem 1.25rem;
    margin-left: 1.25rem;
    position: fixed;
    top: 1rem;
    background-color: #fff;
    border-radius: .25rem;
    font-size: 14px;
    color: #666;
    box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
}
</style>
