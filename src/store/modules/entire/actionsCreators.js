import { getEntireListData } from "@/services/modules/entire";
import * as actionTypes from "./constants";
export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

export const changeIsLoadingCoverAction = (isLoadingCover) => ({
  type: actionTypes.CHANGE_IS_LOADING_COVER,
  isLoadingCover
})

export const fetchEntireListDataAction = (page = 0) => {
  return async (dispatch, getState) => {
    /* 0..修改 currentPage */
    dispatch(changeCurrentPageAction(page));

    /* 1..根据页码获取最新的数据 */
    // const currentPage = getState().entire.currentPage
    // 偏移量:从哪开始偏移。页码*size (0: 0-19, 20: 20-39 )
    dispatch(changeIsLoadingCoverAction(true)) // 加载蒙版
    const res = await getEntireListData(page * 20);
    dispatch(changeIsLoadingCoverAction(false)) // 取消蒙版

    /* 2..修改state */
    dispatch(changeRoomListAction(res.list));
    dispatch(changeTotalCountAction(res.totalCount));
  };
};
