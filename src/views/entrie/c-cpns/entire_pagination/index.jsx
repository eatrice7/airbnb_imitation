// import PropTypes from 'prop-types'
import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import Pagination from "@mui/material/Pagination";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchEntireListDataAction } from "@/store/modules/entire/actionsCreators";

const EntirePagination = memo((props) => {
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  // 305/20 或 299/20 向上取整
  const pageCount = Math.ceil(totalCount / 20);

  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  function changePageHandle(event, value) {
    /* 下一页后，滚动回到顶部 */
    window.scroll(0, 0);
    // dispatch(changeCurrentPageAction(value - 1))
    dispatch(fetchEntireListDataAction(value - 1));
  }

  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination
            // 分多少页
            count={pageCount}
            // 获取点击的页码
            onChange={changePageHandle}
          />
          <div className="desc">
            第 {startCount} - {endCount} 个房源,共超过 {totalCount} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

// EntirePagination.propTypes = {}

export default EntirePagination;
