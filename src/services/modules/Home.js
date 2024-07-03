import { ref } from "vue"
import FranklyRequest from "../request/index"

const currentPage = ref(1);


export function getHotRequests() {
  return FranklyRequest.get({
    url: "/home/hotSuggests" 
  })
}

export function getCategories() {
  return FranklyRequest.get({
    url: "/home/categories"
  })
}

export function gethouselist() {
  return FranklyRequest.get({
    url: `/home/houselist`,
    params: {
      page: currentPage.value ++
    },
  })
}
