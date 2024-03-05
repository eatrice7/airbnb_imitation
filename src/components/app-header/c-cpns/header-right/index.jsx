import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./styled";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenus from "@/assets/svg/icon_menus";
import IconProfile from "@/assets/svg/icon_profile";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  // 副作用函数
  useEffect(() => {
    function windowClickHandle() {
      setShowPanel(false);
    }

    window.addEventListener("click", windowClickHandle, true); // 事件捕获：防止事件冒泡，点击profile后冒泡到window，又将showPanel设为false

    return () => {
      window.removeEventListener("click", windowClickHandle, true);
    };
  }, []);

  // 事件处理函数
  function profileClickHandle() {
    setShowPanel(true);
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <div>
          <IconMenus />
        </div>
        <div className="avatar">
          <IconProfile />
        </div>
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item login">登录</div>
              <div className="item register">注册</div>
            </div>
            <div className="bottom">
              <div className="item register">出租房源</div>
              <div className="item register">开展体验</div>
              <div className="item register">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
