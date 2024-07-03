import { defineStore } from "pinia"
import { getDetails } from "@/services/modules/details"


const useDetailStore = defineStore("detail", {
  state: () => ({
    detailsAllInfo: {},
  }),

  actions: {
    async getDetails(houseId) {
      const res = await getDetails(houseId);
      this.detailsAllInfo = res.data;
    }
  },
  
  getters: {
    housePics: (state) => state.detailsAllInfo?.mainPart?.topModule?.housePicture?.housePics,
    houseName: (state) => state.detailsAllInfo?.mainPart?.topModule?.houseName,
    houseTags: (state) => state.detailsAllInfo?.mainPart?.topModule?.houseTags,
    commentBrief: (state) => state.detailsAllInfo?.mainPart?.topModule?.commentBrief,
    nearByPosition: (state) => state.detailsAllInfo?.mainPart?.topModule?.nearByPosition,
    facilitySort: (state) => state.detailsAllInfo?.mainPart?.dynamicModule?.facilityModule?.houseFacility?.facilitySort,
    houseFacilitys: (state) => state.detailsAllInfo?.mainPart?.dynamicModule?.facilityModule?.houseFacility?.houseFacilitys,
    landlordModule: (state) => state.detailsAllInfo?.mainPart?.dynamicModule?.landlordModule,
    commentModule: (state) => state.detailsAllInfo?.mainPart?.dynamicModule?.commentModule,
    orderRules: (state) => state.detailsAllInfo?.mainPart?.dynamicModule?.rulesModule?.orderRules,
    positionModule: (state) => state.detailsAllInfo?.mainPart?.dynamicModule?.positionModule,
    introductionModule: (state) => state.detailsAllInfo?.mainPart?.introductionModule
  }
})

export default useDetailStore;