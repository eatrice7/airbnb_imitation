import React, { memo, useEffect, useRef } from "react";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
// import SectionHeader from "@/components/section-header";
// import SectionRooms from "@/components/section-rooms";
// import SectionTabs from "@/components/section-tabs";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import isEmptyObj from "@/utils/isEmptyObj";
import HomeWantToGo from "./c-cpns/home-wanttogo";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import AppHeader from "@/components/app-header";

const Home = memo(() => {
  const {
    highCostEffective,
    highScore,
    discount,
    hotRecommend,
    wantToGo,
    plus,
  } = useSelector(
    (state) => ({
      highCostEffective: state.home.highCostEffective,
      highScore: state.home.highScore,
      discount: state.home.discount,
      hotRecommend: state.home.hotRecommend,
      wantToGo: state.home.wantToGo,
      plus: state.home.plus,
    }),
    shallowEqual
  );

  /* 滚动到顶部是否显示大搜索框 */
  const isTopDisplay = useRef(true);

  const dispatch = useDispatch();
  /* 发送网络请求 */
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  // {/* homev2 封装前 */}
  /* tabNames 的数据转换 */
  // const [name, setName] = useState("佛山");
  // const tabNames = discount?.dest_address?.map((item) => item.name);
  // const tabClick = useCallback((index, name) => {
  //   setName(name);
  // }, []);

  return (
    <HomeWrapper>
      <div className="header">
        <AppHeader isTopDisplay={isTopDisplay.current}/>
      </div>
      <div className="banner">
        <HomeBanner />
      </div>
      <div className="content">
        {/* homev2 封装前 */}
        {/* <div className="hot-discount">
          <SectionHeader title={discount.title} subtitle={discount.subtitle} />
          <SectionTabs tabNames={tabNames} tabClick={tabClick} />
          <SectionRooms
            roomList={discount?.dest_list?.[name]}
            itemWidth={"33.333%"}
          />
        </div> */}

        {/* 当 discount 有值时，组件才进行渲染 */}
        {isEmptyObj(discount) && <HomeSectionV2 infoData={discount} />}
        {isEmptyObj(hotRecommend) && <HomeSectionV2 infoData={hotRecommend} />}
        {isEmptyObj(wantToGo) && <HomeWantToGo infoData={wantToGo} />}
        <HomeSectionV1 infoData={highScore} />
        <HomeSectionV1 infoData={highCostEffective} />
        {isEmptyObj(plus) && <HomeSectionV3 infoData={plus} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
