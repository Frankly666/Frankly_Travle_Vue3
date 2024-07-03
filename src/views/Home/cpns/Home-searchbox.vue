<script setup>
  import { computed, ref } from 'vue';
  import {useRouter} from 'vue-router'
  import { storeToRefs } from 'pinia';
  import useHomeStore from '@/stores/modules/home';
  import useMainStore from "@/stores/modules/main"
  import MonthDayFormate from '@/utils/MonthDayFormate';
  import dayjs from 'dayjs';
  
  
  

  // 选择当前城市信息
  const router = useRouter();
  const homeStore = useHomeStore();
  const mainStore = useMainStore();

  function changeCity() {
    router.push("/City")
  };
  
  function getCurrentPositon() {
    navigator.geolocation.getCurrentPosition((res) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    })
  }
  
  
  // 日历选择日期操作逻辑.
  const { startDate, endDate, duringTime } = storeToRefs(mainStore)

  const starFormateDate = computed(() => {
    return MonthDayFormate(startDate.value, "MM月DD日");
  });
  const endFormateDate = computed(() => {
    return MonthDayFormate( endDate.value, "MM月DD日");
  });

  const show = ref(false)
  // 确认选择的时间间隔
  function onConfirm(dates) {
    startDate.value = dates[0];
    endDate.value = dates[1];
    show.value = false
  }

  // 是否展示日历组件
  function selectDate() {
    show.value = true;
  }


  // 获取热门地区推荐的数据
  homeStore.getHotRequests();

  // 开始搜索的点击,并传递参数
  function startSearch() {
    router.push({
      path:"/search",
      query: {
        currentCity: homeStore.currentCity,
        startTime: mainStore.startDate,
        endTime: mainStore.endDate,
      }
    })
  }


</script>


<template>
  <div class="search-box">
    <!-- 选择位置信息 -->
    <div class="location uederline">
      <div class="left" @click="changeCity"><span>{{ homeStore.currentCity }}</span></div>
      <div class="right" @click="getCurrentPositon">
        <span>我的位置</span>
        <img  src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 旅游时间 -->
    <div class="travel-plan uederline" @click="selectDate">
      <div class="start">
        <span>入住</span>
        <div class="time">{{ starFormateDate }}</div>
      </div>
      <div class="center">共{{ duringTime }}晚</div>
      <div class="end">
        <span>离店</span>
        <div class="time">{{ endFormateDate }}</div>
      </div>
    </div>

    <!-- 日历 -->
    <van-calendar v-model:show="show"
                  switch-mode="year-month"
                  type="range"
                  color="#ff9854"
                  :round="false"
                  @confirm="onConfirm"
                />

    <div class="desc uederline">
      <div class="left">价格不限</div>
      <div class="right">人数不限</div>
    </div>

    <div class="tips uederline">关键字/位置/民宿名</div>

    <div class="hot-suggests">
      <template v-for="(item, index) in homeStore.HotRequestsCity" :key="index">
        <div class="item" :style="{color: item.tagText.color, 
                                  background: item.tagText.background.color}" >
          {{ item.tagText.text }}
        </div>
      </template>

    </div>
    <div class="search-btn" @click="startSearch">
      <span>开始搜索</span>
    </div>
  </div>
</template>


<style lang="less" scoped>
  .search-box {
      .uederline {
        border-bottom: .0625rem solid #faf8f9;
      }

      .location {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2.75rem;
        font-size: .9375rem;

        .right {
          font-size: .75rem;
          color: #666;

          img {
            position: relative;
            bottom: .125rem;
            width: 1.125rem;
            margin-left: .3125rem;
          }
        }
      }

      .travel-plan {
        display: flex;
        justify-content: space-between;
        font-size: .9375rem;
        margin-top: .3125rem;
        height: 2.8125rem;


        .start {
          flex: 2;
          display: flex;
          flex-direction: column;
          
          span {
            margin-bottom: .3125rem;
            font-size: .75rem;
            color: #999;
          }
        }

        .center {
          flex: 2;
          line-height: 2.0625rem;
          font-size: .75rem;
          padding-left: .5rem;
        }

        .end {
          flex: 2;
          display: flex;
          flex-direction: column;

          span {
            margin-bottom: .3125rem;
            font-size: .75rem;
            color: #999;
          }
        }
      }

      :deep( .van-calendar__popup.van-popup--bottom){
        height: 100%;
      }

      .desc {
        display: flex;
        height: 40px;
        margin-top: .625rem;
        line-height: 30px;
        color:#999;


        .left {
          flex: 2;
        }

        .right {
          flex: 1
        }
      }

      .tips {
        height: 2.8125rem;
        line-height: 2.8125rem;
        
        color:#999;

      }

      .hot-suggests {
        display: flex;
        flex-wrap: wrap;
        margin-top: .625rem;
        font-size: .75rem;

        .item {
          margin: .3125rem .25rem;
          border-radius: .625rem;
          padding: .125rem .5rem;
        }
      }

      .search-btn {
        height: 2.375rem;
        width: 100%;
        text-align: center;
        line-height: 2.375rem;
        margin-top: 15px;
        font-size: 18px;
        background: var(--theme-linear-gradient);
        border-radius: 20px;
        color: #FFF;
      }
    }
</style>
