import axios from "axios";
import {BASE_URL, TIMEOUT} from "./config"
import useMainStore from "@/stores/modules/main";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { isloading } = storeToRefs(mainStore);


class FranklyRequest {
  constructor(baseURL, timeout = 10000) {
    // 在对象中创造一个axios实例
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 请求拦截后进行展示加载的动画
    this.instance.interceptors.request.use(config => {
      isloading.value = true;
      return config;
    }, error => {
      return error;
    })

    //  无论返回结果如何都取消动画 
    this.instance.interceptors.response.use(res => {
      isloading.value = false;
      return res;
    }, error => {
      isloading.value = false;
      return error;
    })
  };

  request(config) {
    // 返回的是一个promise:因为本质上使用的是axios,我们只是对其进行了一层封装
    return new Promise((resolve, reject) => {
      this.instance.request(config).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      })
    })
  };


  get(config) {
    return this.request({...config, method: "get"});
  };

  post(config) {
    return this.request({...config, method: "post"})
  }
}

export default new FranklyRequest(BASE_URL, TIMEOUT);