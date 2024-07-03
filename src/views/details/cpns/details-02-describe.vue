<script setup>
import useDetailStore from '@/stores/modules/details';
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';



// 目的是找到这个长的标题
const { houseName, houseTags, commentBrief, nearByPosition } = storeToRefs(useDetailStore() ) 


</script>


<template>
  <div class="describe">
    <h2 class="house-name">
      {{ houseName }}
    </h2>

    <div class="tips">
      <template v-for="(item, index) in houseTags" :key="index">
        <span :style="{color: item.tagText?.color,
                       background: item.tagText?.background?.color
                      }"
              v-if="item.tagText"
              >
           {{ item.tagText?.text }} 
        </span>
      </template>
    </div>

    <div class="commend">
      <div class="left">
        <span class="one">{{ commentBrief?.overall+commentBrief?.scoreTitle }}</span>
        <span class="two">{{ commentBrief?.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="one">{{ commentBrief?.totalCountStr + "条评论" }}</span>
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="location">
      <div class="left">
        <span class="one">{{nearByPosition?.address }}</span>
      </div>
      <div class="right">
        <span class="one">  地图·周边  </span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.describe {
  margin-top: 10px;

  .house-name {
    line-height: 30px;
  }

  .tips {
    margin-top: 5px;
    font-size: 12px;

    span {
      display: inline-block;
      margin-right: 5px;
      margin-top: 5px;
      padding: 2px 3px;
    }
  }

  .commend,
  .location
   {
    display: flex;
    justify-content: space-between;
    padding: 3px 15px;
    height: 38px;
    line-height: 38px;
    margin-top: 15px;
    font-size: 12px;
    background: #f5f7fa;

    .left {
      .one {
        font-size: 14px;
        font-weight: bold;
        margin-right: 5px;
      }

      .two {
        color: #666666;
      }

    }

    .right {
      color: var(--primary-color);

      .one {
        margin-right: 2px;
      }
    }
  }
}

</style>
