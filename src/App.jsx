import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppFooter from "./components/app-footer";
import { useScrollToTop } from "./hooks/useScrollToTop";

const App = memo(() => {
  /* 跳转页面滚动到顶部 */
  useScrollToTop()
  return (
    <div>
      <div className="pages">{useRoutes(routes)}</div>
      <AppFooter></AppFooter>
    </div>
  );
});

export default App;
