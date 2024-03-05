import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [currentIndx, setCurrentIndex] = useState(0);

  function itemClickHandle(index, item) {
    setCurrentIndex(index);
    /* 把 name 传出去,卡片效果,根据城市渲染数据 */
    tabClick(index, item);
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames?.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames("item", { active: currentIndx === index })}
              onClick={(e) => itemClickHandle(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
