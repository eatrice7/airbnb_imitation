import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon_logo";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  function logoClickHandle() {
    navigate("/home");
  }
  return (
    <LeftWrapper>
      {/* <img src={require("@/assets/img/logo.svg").default} alt="" /> */}
      <div className="logo" onClick={logoClickHandle}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
