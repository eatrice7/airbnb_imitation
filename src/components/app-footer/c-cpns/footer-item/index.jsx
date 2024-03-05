import React, { memo } from "react";
import { ItemWrapper } from "./style";

const FooterItem = memo((props) => {
  const { name, list } = props;
  return (
    <ItemWrapper>
      <div className="title item">{name}</div>
      <ul className="list">
        {list.map((item, index) => {
          return (
            <li className="item" key={index}>
              <a href={item.href} target="blank">{item.title}</a>
            </li>
          );
        })}
      </ul>
    </ItemWrapper>
  );
});

export default FooterItem;
