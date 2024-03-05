import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop() {
  // 检测到 路由变化 , 页面滚动到顶部
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
}