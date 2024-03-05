import React, { memo, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/svg/icon-search-bar";
import searchData from "@/assets/data/header_search-data.json";
import SearchTabs from "./c-cpns/search-tabs";
import SearchInfo from "./c-cpns/search-info";

const HeaderCenter = memo((props) => {
  const titleTabs = searchData.map((item) => item.title);
  const { isBigSearch, centerClick } = props;
  const order = useRef(undefined);

  const bars = useRef([
    { name: "任何地方", order: 0 },
    { name: "任意一周", order: 1 },
    { name: "添加人数", order: 3 },
  ]);
  /* 记录索引，确定是哪个titleTab */
  const [currentIndex, setCurrentIndex] = useState(0);

  function tabClickHandle(index) {
    setCurrentIndex(index);
  }

  // 点击bar, 显示 detail
  function barClickHandle() {
    if (centerClick) centerClick();
  }

  /* 判断 searchInfo 里的元素, 实现点击 bar 显示 detail后默认选中某个item*/
  function itemClickHandle(itemOrder) {
    order.current = itemOrder;
    console.log(order.current);
  }
  return (
    <CenterWrapper>
      {/* 0.没有动画，通过变量控制组件显示 */}
      {/* {!isBigSearch ? (
        <div className="search-bar" onClick={barClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      ) : (
        <div className="search-detail">
          <SearchTabs titleTabs={titleTabs} tabClickHandle={tabClickHandle} />
          <SearchInfo titleInfo={searchData[currentIndex]?.searchInfo} />
        </div>
      )} */}

      {/* 1.动画 */}
      <CSSTransition
        in={!isBigSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={barClickHandle}>
          <div className="text">
            {bars.current.map((item) => {
              return (
                <div
                  className="item"
                  key={item.order}
                  onClick={(e) => itemClickHandle(item.order)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>

          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isBigSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titleTabs={titleTabs} tabClickHandle={tabClickHandle} />
          <SearchInfo
            titleInfo={searchData[currentIndex]?.searchInfo}
            order={order.current}
          />
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
