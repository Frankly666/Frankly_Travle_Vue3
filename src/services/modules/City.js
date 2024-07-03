import franklyRequest from "../request"

export function getAllCitys( ) {
  return franklyRequest.get({
    url: "/city/all"
  })
}