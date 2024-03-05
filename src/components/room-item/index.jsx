import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { Carousel } from "antd";
import Rating from "@mui/material/Rating";
import { ItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", entireRoomClick } = props;

  const swiperRef = useRef();
  const [selectIndex, setSelectIndex] = useState(0);

  /* 只在 全部页面存在点击事件, 跳转详情页面 */
  function roomClickHandle(itemData) {
    if (entireRoomClick) entireRoomClick(itemData);
  }

  /* 判断切换按钮 */
  function btnClickgHandle(e, isRight = true) {
    // 阻止事件冒泡
    e.stopPropagation();

    if (isRight) {
      swiperRef.current.next();
    } else {
      swiperRef.current.prev();
    }
    // 对索引进行处理
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    const length = itemData.picture_urls.length;
    if (newIndex > length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = length - 1;
    setSelectIndex(newIndex);
  }

  // 首页图片
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );
  // 全部页面 图片轮播
  const swiperElement = (
    <div className="swiper">
      {/* 1.1.切换按钮 */}
      <div className="control">
        <div className="btn left" onClick={(e) => btnClickgHandle(e, false)}>
          <IconArrowLeft height={30} width={30} />
        </div>
        <div className="btn right" onClick={(e) => btnClickgHandle(e, true)}>
          <IconArrowRight height={30} width={30} />
        </div>
      </div>
      {/* 1.2.轮播图片 */}
      <Carousel dots={false} ref={swiperRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
      {/* 1.3.指示器 */}
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
    </div>
  );

  return (
    <ItemWrapper
      $verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      $bottonTextColor={itemData?.bottom_info?.content_color || "#767676"}
      $itemWidth={itemWidth}
      onClick={(e) => roomClickHandle(itemData)}
    >
      <div className="inner">
        {/* 0.判断home 和 entire 页面展示图片效果 */}
        {itemData.picture_urls ? swiperElement : pictureElement}
        {/* 2.图片下面描述 */}
        <div className="desc">{itemData.verify_info.messages?.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            value={itemData.reviews_count ?? 5}
            precision={0.1}
            readOnly
            sx={{ color: "#00848a", fontSize: "12px" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData?.bottom_info?.content && (
            <span className="info">·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
