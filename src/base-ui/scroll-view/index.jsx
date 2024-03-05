import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";

const ScrollView = memo((props) => {
  /* 1.记录变量 */
  /* 控制 右边按钮 是否显示 */
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  /* 记录索引, 根据索引拿到对应props.children中的元素 */
  const positionIndex = useRef(0);
  /* 保存超出的距离 */
  const distanceRef = useRef(0);
  const scrollContentRef = useRef();

  /* 2.副作用 该组件渲染完成后,判断右边按钮是否显示 */
  useEffect(() => {
    // 元素一共可滚动的宽度
    const scrollWidth = scrollContentRef.current.scrollWidth;
    // 元素本身占据的宽度
    const clientWidth = scrollContentRef.current.clientWidth;
    // 超出的距离
    const distance = scrollWidth - clientWidth;
    // 记录下来，判断按钮是否显示，不用 useState，否则改一次距离组件重新渲染
    distanceRef.current = distance;
    setShowRight(distance > 0);
  }, []);

  /* 3.点击事件 */
  function rightClickHandle() {
    /* 点击按钮, 每次移动一个item宽度+间隔的距离, 所以要拿到右边元素的左偏移量 */
    const newIndex = positionIndex.current + 1; // 拿到下一个索引
    const newElement = scrollContentRef.current.children[newIndex]; // 获取下一个元素
    const newOffsetLeft = newElement.offsetLeft; // 获取该元素到左边的偏移量
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`; // 元素的父组件进行位移
    positionIndex.current = newIndex; // 再记录索引
    // 判断右边按钮是否显示
    setShowRight(distanceRef.current > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0);
  }

  function leftClickHandle() {
    const newIndex = positionIndex.current - 1;
    const newElement = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newElement.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    positionIndex.current = newIndex;
    setShowRight(distanceRef.current > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0);
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className="control left" onClick={leftClickHandle}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={rightClickHandle}>
          <IconArrowRight />
        </div>
      )}

      {/* {showLeft && <button onClick={leftClickHandle}>左边按钮</button>} */}
      {/* {showRight && <button onClick={rightClickHandle}>右边按钮</button>} */}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
