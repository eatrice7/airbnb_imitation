// import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/entire_filter_data.json";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);

  function filterItemClickHandle(item) {
    const newItems = [...selectItems];
    // 点击 已选中 的item, 需要从数组中删除
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex(findItem => findItem === item)
      newItems.splice(itemIndex, 1)
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }
  return (
    <FilterWrapper>
      <div className="filter-content">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("filter-item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={(e) => filterItemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

// EntireFilter.propTypes = {};

export default EntireFilter;
