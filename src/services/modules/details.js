import FranklyRequest from "../request/index"

export function getDetails(houseId) {
  return FranklyRequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}