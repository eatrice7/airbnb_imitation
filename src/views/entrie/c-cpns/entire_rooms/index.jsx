// import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { RoomsWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";
import { changeRoomDataAction } from "@/store/modules/detail";

const EntireRooms = memo((props) => {
  const { totalCount, roomList, isLoadingCover } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      roomList: state.entire.roomList,
      isLoadingCover: state.entire.isLoadingCover,
    }),
    shallowEqual
  );
  const navigate = useNavigate()
  const dispatch = useDispatch()

  /* 1.拿到 全部页面中点击的单个room-item数据 */
  const entireRoomClickHandle = useCallback((item) => {
    console.log(item)
    // 2.修改 detail state
    dispatch(changeRoomDataAction(item))
    // 3.跳转 详情页面
    navigate("/detail")
  }, [navigate, dispatch])

  return (
    <RoomsWrapper>
      <div className="content">
        <div className="total">{totalCount}多处住所</div>
        <div className="room-list">
          {roomList?.map((item) => {
            return <RoomItem 
            itemData={item} 
            itemWidth={"20%"} key={item._id}
            entireRoomClick={entireRoomClickHandle}
          />;
          })}
          {/* 分页请求时的蒙版 */}
          {isLoadingCover && <div className="loading-cover"></div>}
        </div>
      </div>
    </RoomsWrapper>
  );
});

// EntireRooms.propTypes = {};

export default EntireRooms;
