<script setup>
import DetailSection from '@/components/detail-section/detail -section.vue';
import useDetailStore from '@/stores/modules/details';
import { storeToRefs } from 'pinia';

const {facilitySort, houseFacilitys} = storeToRefs(useDetailStore()) 

</script>


<template>
  <div class="facility">
    <detail-section  header="房屋设施" footer="查看全部设施">
      <template #header></template>

      <template #main>
        <div class="whole">
          <template v-for="(item, index) in facilitySort" :key="index">
            <div class="item">
              <div class="left">
                <img :src="houseFacilitys[item].icon" alt="">
                <span>{{ houseFacilitys[item].groupName }}</span>
              </div>

              <div class="list">
                <template v-for="(element, indey) in houseFacilitys[item]?.facilitys" :key="indey" >
                  <div class="element" v-if="indey < 4">
                    <van-icon name="passed" color="green"/>
                    <span>{{ element.name }}</span>
                  </div>
                  
                </template>
              </div>
            </div>
          </template>
        </div>

      </template>

      <template #footer></template> 
    </detail-section>
    
  </div>
</template>


<style lang="less" scoped>

.facility {
  .whole {
    padding: 10px  ;
    background-color: #f7f9fb;
    
    .item {
      display: flex;
      margin: 25px 0;

      .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90px;
        height: 45px;
        font-size: 12px;

        img{
          width: 20px;
          height: 20px;
          margin-bottom: 2px;
        }
      }

      .list {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 12px;

        .element {
          display: flex;
          align-items: center;
          width: 50%;
          margin: 1.06667vw 0;

          span {
            margin-left: 3px;
          }
        }
      }
    }
  }
}

</style>
