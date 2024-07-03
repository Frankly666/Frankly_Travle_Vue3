<script setup>
import useDetailStore from '@/stores/modules/details';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { watch } from 'vue';

// 得到需要展示的图片
const { housePics } = storeToRefs(useDetailStore());

// 接下来对图片数据进行分组操作
const titleMap = ref({});
const classifyPics = ref({});
const classifyPicsList = ref([]);

watch(housePics, newValue => {
  if(newValue.length){
    for(let i = 0; i < newValue.length; i ++ ){
      let item = newValue[i];
      let key = item.enumPictureCategory;
      let valueArray = classifyPics.value[key];

      if(!valueArray) {
        valueArray = [];
        classifyPics.value[key] = valueArray;
      }

      valueArray.push(item);
    }

    const regex =/\【(.*?)\】/;  // 使用正则表达式取除文字中括号
    Object.keys(classifyPics.value).forEach(key => {
      // 得到指示器的映射值
      titleMap.value[key] = classifyPics.value[key][0].title.match(regex)[1];

      // 得到聚集后的图片列表(我是担心后端不按照顺序来)
      classifyPics.value[key].forEach(element => {
        classifyPicsList.value.push(element);
      });
    })
  }
})



</script>


<template>
  <div class="swipper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in classifyPicsList" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="">
        </van-swipe-item> 
      </template>

      <template #indicator="{ active }">
        <div class="custom-indicator">
          <div v-for="(value, key, index) in classifyPics"
               :key="index"
               :class="{active: key == classifyPicsList[active]?.enumPictureCategory}"
               class="item"
               >
            {{ titleMap[key] }}
            <span v-if="key == classifyPicsList[active]?.enumPictureCategory">
              {{  value.findIndex(item => item === classifyPicsList[active]) + 1 }} / {{ value.length }}
            </span>
          </div>
        </div>
      </template>
    </van-swipe>


  </div>
</template>


<style lang="less" scoped>
.swipper {
  img {
    width: 100%;
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.8);
    color: aliceblue;

    .item {
      display: inline-block;
      margin: 1px 5px;
      padding: 0 5px;

      &.active {
        background: aliceblue;
        color: black;
        border-radius: 4px;
      }
    }
  }
}

</style>
