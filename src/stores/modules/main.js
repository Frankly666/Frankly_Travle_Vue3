import { defineStore } from "pinia"
import dayjs from "dayjs"

const startDate = dayjs();
const endDate = dayjs().add(1 , "day");


const useMainStore = defineStore("main", {
  state: () => ({
    startDate: startDate,
    endDate: endDate,
    isloading: false,
  }),
  getters: {
      duringTime : (state) => {
        let s = dayjs(state.startDate);
        let e = dayjs( state.endDate);
        return e.diff(s, "day");
      }
  }
})

export default useMainStore;