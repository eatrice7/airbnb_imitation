import React, { memo, useRef, useState } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const AppHeader = memo((props) => {
  const { isTopDisplay = false } = props;

  /* 控制 search-detail 显示隐藏 */
  const [isBigSearch, setIsBigSearch] = useState(false);
  /* 滚动控制搜索的显示  */
  const { scrollY } = useScrollPosition();
  /* 记录滚动的前一个位置 */
  const recordY = useRef(0);

  if (!isBigSearch) recordY.current = scrollY;
  if (isBigSearch && Math.abs(scrollY - recordY.current) > 20)
    setIsBigSearch(false);

  /* 滚动到顶部时显示大收索框 */
  const isTop = isTopDisplay && scrollY === 0;

  return (
    <HeaderWrapper $isBigSearch={isBigSearch || isTop}>
      <div className="top">
        <HeaderLeft />
        <HeaderCenter
          isBigSearch={isBigSearch || isTop}
          // 点击 search-bar 显示 search-betail
          centerClick={(e) => setIsBigSearch(true)}
        />
        <HeaderRight />
      </div>
      <div className="extend"></div>
    </HeaderWrapper>
  );
});

export default AppHeader;
