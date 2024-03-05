import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";
import Indicator from "@/base-ui/indicator";

const Demo = memo(() => {
  const [selectIndex, setSelectIndex] = useState(0);
  const tanNames = ["cab", "adc", "nba", "uba", "lab", "lpl", "lck"];

  // 拿到索引
  function toggleClickHandle(isNext) {
    let recordIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    // 越界判断
    if (recordIndex < 0) {
      recordIndex = tanNames.length - 1;
    }
    if (recordIndex > tanNames.length - 1) {
      recordIndex = 0;
    }
    console.log(recordIndex);
    setSelectIndex(recordIndex);
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button className="left" onClick={(e) => toggleClickHandle(false)}>
          上一个
        </button>
        <button className="right" onClick={(e) => toggleClickHandle(true)}>
          下一个
        </button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {tanNames.map((item) => {
            return <button key={item}>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
