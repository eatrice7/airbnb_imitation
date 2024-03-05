import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: #333;

  .top {
    position: relative;
    height: 86px;
    .close {
      position: absolute;
      z-index: 99;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;

    .control {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        color: #fff;

        .left,
        .right {
          cursor: pointer;
        }
      }
    }

    .picture {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      max-width: 105vh;

      img {
        position: absolute;
        top: 40px;
        right: 0;
        left: 0;
        margin: 0 auto;
        user-select: none;
        object-fit: cover;
      }

      /* 切换图片动画设置 */
      .pic-enter {
        transform: translateX(${(props) => (props.isNext ? "100%" : "-100%")});
        opacity: 0;
      }
      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 150ms ease;
      }
      .pic-exit {
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
        transition: all 150ms ease;
      }
    }
  }

  .preview {
    position: relative;
    display: flex;
    justify-content: center;
    height: 100px;
    margin-bottom: 10px;

    .info {
      /* list-item 宽度从底部变化 --> 绝对定位,buttom  */
      position: absolute;
      bottom: 0;
      max-width: 105vh; //设置一个最大宽度
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;
      }
      .toggle {
        cursor: pointer;
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        height: ${(props) => (props.isShowList ? "67px" : "0")};
          transition: height 200ms ease;

        .item {
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
