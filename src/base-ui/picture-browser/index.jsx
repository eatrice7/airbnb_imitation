import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import {
  CloseOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import { BrowserWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import Indicator from "../indicator";
import classNames from "classnames";

const PictureBrowser = memo((props) => {
  const { pictureList, closePictures } = props;
  /* 根据index 判断图片 */
  const [currentIndex, setCurrentIndex] = useState(0);
  /* 判断图片位移的方向 translateX */
  const [isPictureNext, setIsPictureNext] = useState(true);
  /* 判断显示或隐藏底部list -> 设置 hight */
  const [isShowList, setIsShowList] = useState(true);
  /* 副作用 */
  useEffect(() => {
    // 渲染该组件时, 取消滚动和滚动条
    document.body.style.overflow = "hidden";
    return () => {
      // 销毁组件后，可以滚动并显示滚动条
      document.body.style.overflow = "auto";
    };
  }, []);

  /* 关闭按钮功能 */
  function closeBtnClickHanle() {
    if (closePictures) closePictures();
  }

  /* 切换图片 */
  function controlClickhandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex > pictureList.length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = pictureList.length - 1;
    setCurrentIndex(newIndex);
    setIsPictureNext(isNext);
  }
  /* 底部list item点击事件处理 */
  function listItemClickHandle(index) {
    // 重新设置设置currentIndex
    setCurrentIndex(index);
    // 判断图片位移方向 translateX
    setIsPictureNext(index > currentIndex);
  }
  return (
    <BrowserWrapper isNext={isPictureNext} isShowList={isShowList}>
      <div className="top">
        <div className="close" onClick={closeBtnClickHanle}>
          <CloseOutlined style={{ color: "#fff", fontSize: "35px" }} />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn">
            <div className="left" onClick={(e) => controlClickhandle(false)}>
              <IconArrowLeft height={77} width={77} />
            </div>
          </div>
          <div className="btn">
            <div className="right" onClick={(e) => controlClickhandle(true)}>
              <IconArrowRight height={77} width={77} />
            </div>
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={pictureList[currentIndex]}
              classNames="pic"
              timeout={150}
            >
              <img src={pictureList[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureList.length}:
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => setIsShowList(!isShowList)}>
              <span>{isShowList ? "显示" : "隐藏"}照片列表</span>
              {isShowList ? <CaretDownOutlined /> : <CaretUpOutlined />}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureList.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currentIndex === index,
                    })}
                    key={item}
                    onClick={(e) => listItemClickHandle(index)}
                  >
                    <img src={item} className="item" alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureList: PropTypes.array,
};

export default PictureBrowser;
