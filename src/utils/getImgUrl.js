export default function getImgUrl(img) {
  return new URL(`../assets/img/${img}`, import.meta.url).href
}