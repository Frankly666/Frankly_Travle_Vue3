import { defineStore } from "pinia"
import { getAllCitys } from "@/services/index"


const useCityStore = defineStore("city", {
  state: () => ({
      allCity: {},
  }),
  actions: {
    async getAllCityData() {
      const res = await getAllCitys();
      this.allCity = res.data;
    }
  }
})

export default useCityStore;