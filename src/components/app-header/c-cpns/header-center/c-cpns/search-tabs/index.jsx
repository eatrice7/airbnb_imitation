import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";

const SearchTabs = memo((props) => {
  const { titleTabs, tabClickHandle } = props;
  const [currentIndex, setCurrentIndex] = useState(0);


  function itemClickHandle(index) {
    setCurrentIndex(index)
    if (tabClickHandle) tabClickHandle(index)
  }

  return (
    <TabsWrapper>
      {titleTabs?.map((item, index) => {
        return (
          <div
            className={classNames("tab", { active: currentIndex === index })}
            key={item}
            onClick={(e) => itemClickHandle(index)}
          >
            {item}
          </div>
        );
      })}
    </TabsWrapper>
  );
});

SearchTabs.propTypes = {
  titleTabs: PropTypes.array,
};

export default SearchTabs;
