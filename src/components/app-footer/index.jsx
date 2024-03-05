import React, { memo, useState } from "react";
import FooterItem from "./c-cpns/footer-item";
import rowFooterData from "@/assets/data/footer_data.json";
import { FooterWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconWeobo from "@/assets/svg/icon_weobo";
import IconWeixin from "@/assets/svg/icon_weixin";

const AppFooter = memo(() => {
  // 不要直接使用 footerdata
  const [footerDate] = useState(rowFooterData);

  return (
    <FooterWrapper>
      <div className="top">
        {footerDate.map((item, index) => {
          return <FooterItem name={item.name} list={item.list} key={index} />;
        })}
      </div>

      <div className="service">
        <div className="left">
          <div className="copy-right">© 2024 Airbnb, Inc.</div>
          <div className="other">
            <span className="item">·</span>
            <span className="item">隐私</span>
            <span className="item">·</span>
            <span className="item">条款</span>
            <span className="item">·</span>
            <span className="item">网站地图</span>
          </div>
        </div>
        <div className="right">
          <div className="text">
            <span className="global">
              <IconGlobal />
            </span>
            <span className="chinese">简体中文 (CN)</span>
            <span className="money">￥&nbsp;CNY</span>
          </div>
          <div className="icon">
            <ul className="icon-list">
              <li className="weibo">
                <a href="http://www.weibo.com/airbnb" target="blank">
                  <IconWeobo />
                </a>
              </li>
              <li className="weixin">
                <IconWeixin />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom">
        京ICP备16017121号·京ICP证·160773号·京公网安备
        11010502032345号·安彼迎网络（北京）有限公司·营业执照·全国旅游投诉渠道12345·违法和不良信息举报邮箱
        jubao@airbnb.com
      </div>
    </FooterWrapper>
  );
});

export default AppFooter;
