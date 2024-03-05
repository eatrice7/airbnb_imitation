import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { InfoWrapper } from "./style";
import classNames from "classnames";

const SearchInfo = memo((props) => {
  const { titleInfo, order } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCoverBg, setIsCoverBg] = useState(false);

  useEffect(() => {
    // 实现点击bar中的某个item显示detail后,默认选中searchInfo中的某个item
    if (typeof order === "number") itemClickHandle(order);
  }, [order]);

  function itemClickHandle(index) {
    setCurrentIndex(index);
    // 点击 item 实现 下层背景颜色变化
    setIsCoverBg(true);
  }

  return (
    <InfoWrapper>
      <div className={classNames("content", { cover: isCoverBg })}>
        {titleInfo?.map((item, index) => {
          return (
            <div
              className={classNames("item", { active: currentIndex === index })}
              key={item.text}
              onClick={(e) => itemClickHandle(index)}
            >
              <div className="text">{item.text}</div>
              <div className="desc">{item.desc}</div>
            </div>
          );
        })}
      </div>
    </InfoWrapper>
  );
});

SearchInfo.propTypes = {
  titleInfo: PropTypes.array,
};

export default SearchInfo;
