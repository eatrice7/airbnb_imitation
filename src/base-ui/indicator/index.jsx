import PropTypes from "prop-types";
import React, { memo, useRef, useEffect } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex } = props;
  const indicatorRef = useRef();

  useEffect(() => {
    // 1.获取 selectIndex 对应的 item
    const selectItem = indicatorRef.current.children[selectIndex];
    // 拿到 item 的 offsetLeft
    const selectItemtLeft = selectItem.offsetLeft;
    // item 的宽度
    const selectItemWidth = selectItem.clientWidth;

    // 2.拿到 i-content的宽度和可滚动宽度
    const contentWidth = indicatorRef.current.clientWidth;
    const contentScrollWidth = indicatorRef.current.scrollWidth

    // 3.计算 selectIndex 对应 item 要滚动的距离，对应 item 居中显示
    let distance =
      selectItemtLeft + selectItemWidth * 0.5 - contentWidth * 0.5;

    // 计算一共可移动的距离
    let totalDistance = contentScrollWidth - contentWidth
    // 4.两边特殊情况判断
    if (distance < 0) distance = 0
    if (distance > totalDistance) distance = totalDistance
    
    // 5.进行滚动
    indicatorRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={indicatorRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
