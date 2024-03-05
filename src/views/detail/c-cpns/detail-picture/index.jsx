import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { PictureWrapper } from "./style";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPicture = memo((props) => {
  const { pictureList } = props;
  /* 控制 PictureBrowser 的显示和隐藏 */
  const [showPicBrowser, setShowPicBrowser] = useState(false);

  function showBtnClickHandle() {
    setShowPicBrowser(true);
  }

  return (
    <PictureWrapper>
      <div className="picture">
        <div className="left">
          <div className="item" onClick={showBtnClickHandle}>
            <img src={pictureList[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {pictureList.slice(1, 5).map((item) => {
            return (
              <div className="item" onClick={showBtnClickHandle}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
        <div className="show-btn" onClick={showBtnClickHandle}>
          查看所有照片
        </div>
      </div>

      {showPicBrowser && (
        <PictureBrowser
          pictureList={pictureList}
          // 实现 PictureBrowser 里的关闭按钮功能
          closePictures={(e) => setShowPicBrowser(false)}
        />
      )}
    </PictureWrapper>
  );
});

DetailPicture.PropTypes = {
  pictureList: PropTypes.array,
};

export default DetailPicture;
