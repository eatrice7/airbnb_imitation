import { airRequest } from "../request";

export function getEntireListData(offset = 0, size = 20) {
  return airRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  });
}
