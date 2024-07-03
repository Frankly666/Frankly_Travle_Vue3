<script setup>
import { GridItem } from 'vant';
import { defineProps } from 'vue';

const props = defineProps({
  houseData: Object
})


</script>


<template>
  <div class="content-type9">
    <div class="inner">
      <img :src=" props.houseData?.image?.url " alt="">
      <div class="desc">
        <div class="summaryText">{{ props.houseData.summaryText }}</div>
        <div class="houseName">{{ props.houseData.houseName }}</div>
        <div class="rate">
          <van-rate :model-value="parseFloat(props.houseData.commentScore)"
                    readonly 
                    allow-half
                    color="#fff"
                    :size="15"
                    />
          <span>￥{{ props.houseData.productPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
  .content-type9 {
    width: 175px;
    .inner {
      position: relative;
      width: 170px;
      height: 226px;
      padding: 6px 2px;

      color: #fff;

      img {
        display: block;
        width: 170px;
        height: 226px;
        border-radius: 7px;
        padding: 0 3px;
      }

      .desc {
        position: absolute;
        display: flex;
        flex-direction: column;
        bottom: 15px;
        left: 10px;
        text-align: center;

        .summaryText {
          margin-bottom: 5px;
        }

        .houseName {
          width: 150px;
          height: 33px;
          margin-bottom: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          display:-webkit-box; //作为弹性伸缩盒子模型显示。
          -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
          -webkit-line-clamp:2; //显示的行

        }

        .rate {
          display: flex;
          justify-content: space-between
        }

      }
    }
  }

</style>
