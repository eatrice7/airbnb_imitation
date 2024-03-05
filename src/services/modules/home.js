import { airRequest } from "../request";

export function getHighCostEffectiveData() {
  return airRequest.get({
    url: "/home/goodprice"
  })
}

export function getHignScoreData() {
  return airRequest.get({
    url: "home/highscore"
  })
}

export function getDiscountData() {
  return airRequest.get({
    url: "/home/discount"
  })
}

export function getHotRecommendData() {
  return airRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getWantToGodData() {
  return airRequest.get({
    url: "/home/longfor"
  })
}

export function getPlusData() {
  return airRequest.get({
    url: "/home/plus"
  })
}