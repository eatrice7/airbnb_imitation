import React, { memo } from "react";
import { DetailWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import DetailPicture from "./c-cpns/detail-picture";
import AppHeader from "@/components/app-header";

const Detail = memo(() => {
  const { roomData } = useSelector(
    (state) => ({
      roomData: state.detail.roomData,
    }),
    shallowEqual
  );

  return (
    <DetailWrapper>
      <AppHeader/>
      <DetailPicture pictureList={roomData.picture_urls} />
    </DetailWrapper>
  );
});

export default Detail;
