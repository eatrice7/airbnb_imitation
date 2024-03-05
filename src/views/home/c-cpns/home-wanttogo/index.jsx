import PropTypes from "prop-types";
import React, { memo } from "react";
import { WantWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import WantToGoItem from "@/components/wanttogo-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeWantToGo = memo((props) => {
  const { infoData } = props;
  return (
    <WantWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="want-list">
        <ScrollView>
          {infoData.list.map((item, index) => {
            return <WantToGoItem itemData={item} key={index} />;
          })}
        </ScrollView>
      </div>
    </WantWrapper>
  );
});

HomeWantToGo.propTypes = {
  infoData: PropTypes.object,
};

export default HomeWantToGo;
