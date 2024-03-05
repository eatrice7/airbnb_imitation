import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;

  /* 
     初始化 name, 组件第一次渲染时infoData没有值，所以不能展示房屋数据
     解决：infoData 有值时才渲染组件
   */
  const initName = Object.keys(infoData.dest_list)[0];
  /* 内部state */
  const [name, setName] = useState(initName);

  /* tabNames 的数据转换 */
  const tabNames = infoData?.dest_address?.map((item) => item.name);

  const tabClickHandle = useCallback((index, name) => {
    setName(name);
  }, []);
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms
        roomList={infoData?.dest_list?.[name]}
        itemWidth={"33.333%"}
      />
      <SectionFooter name={name}/>
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
