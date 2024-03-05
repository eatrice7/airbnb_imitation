import styled from "styled-components";

export const CenterWrapper = styled.div`
  /* 定位，防止bar, detail两个元素挤压 */
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-bar {
    /* 定位，防止bar, detail两个元素挤压 */
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 48px;
    padding: 0 8px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

    ${(props) => props.theme.boxShadow};

    .text {
      display: flex;
      margin: 0 auto;
      padding: 0 16px;
      color: ${(props) => props.theme.text.primaryColor};
      font-weight: 600;

      .item {
        padding: 6px 8px;
      }
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      color: #fff;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.primaryColor};
    }
  }

  .search-detail {
    position: relative;
    width: 800px;
  }

  /* detail 过渡动画 */
  .detail-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35) translateY(-58px);
    opacity: 0;
  }
  .detail-enter-active {
    transition: all 250ms ease;
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  /* bar 过渡动画 */
  .bar-enter {
    transform: scale(2.85714, 1.35) translateX(58px);
    opacity: 0;
  }
  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`;
