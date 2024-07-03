import { getCategories, getHotRequests, gethouselist } from "@/services";
import { defineStore } from "pinia"


const useHomeStore = defineStore("home", {
  state: () => ({
      currentCity: "成都",
      HotRequestsCity: {},
      categories: {},
      houselist: []
  }),
  actions: {
    async getHotRequests() {
      const res = await getHotRequests();
      this.HotRequestsCity = res.data;
    },

    async getCategories() {
      const res = await getCategories();
      this.categories = res.data;
    },
    
    async gethouselist() {
      const res = await gethouselist();
      this.houselist.push(...res.data)
    }
  }
})

export default useHomeStore;