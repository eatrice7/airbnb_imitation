import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { FooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";

const SectionFooter = memo((props) => {
  const { name } = props;
  let showName = "查看全部";
  if (name) {
    showName = `查看更多${name}房源`;
  }

  const navigate = useNavigate();

  function moreClickHandle() {
    navigate("/entire");
  }

  return (
    <FooterWrapper color={name ? "#008489" : "#000"}>
      <div className="info" onClick={moreClickHandle}>
        <div className="text">{showName}</div>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
