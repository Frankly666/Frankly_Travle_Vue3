import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";


export default function watchWindowScroll(refer) {
  let tem = window;

  const isReachBottom =  ref(false);
  const scrollTop  = ref(0);
  const scrollHeight = ref(0);
  const clientHeight = ref( 0);

  const foo = throttle(() => {

    if(tem === window){
      scrollTop.value  = document.documentElement.scrollTop;
      scrollHeight.value = document.documentElement.scrollHeight;
      clientHeight.value = document.documentElement.clientHeight;
    }else {
      scrollTop.value  = tem.scrollTop;
      scrollHeight.value = tem.scrollHeight;
      clientHeight.value = tem.clientHeight;
    }
    

    if( scrollTop.value + clientHeight.value >= scrollHeight.value){
      isReachBottom.value = true;
    }

    // console.log('scrollTop.value: ', scrollTop.value);
    // console.log('scrollHeight.value: ', scrollHeight.value);
    // console.log('clientHeight.value: ', clientHeight.value);




  }, 100)

  onMounted(() => {
    if (refer) tem = refer.value;
    tem.addEventListener("scroll", foo);
  })

  onUnmounted(() => {
    tem.removeEventListener("scroll",foo)
  })

  

  return { isReachBottom, scrollTop };
}