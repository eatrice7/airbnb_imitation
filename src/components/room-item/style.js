import styled from "styled-components";

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${(props) => props.$itemWidth};
  padding: 8px;
  margin-bottom: 30px;

  .inner {
    width: 100%;

    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 5px;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        /* 防止图片压缩 */
        object-fit: cover;
      }
    }

    .swiper {
      position: relative;
      cursor: pointer;

      &:hover {
        .control {
          display: flex;
        }
      }

      .control {
        position: absolute;
        z-index: 1;
        display: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        justify-content: space-between;
        color: #fff;

        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 83px;
          height: 100%;
          background: linear-gradient(
            to left,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );

          &.right {
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
        }
      }

      .indicator {
        position: absolute;
        bottom: 10px;
        right: 0;
        left: 0;
        z-index: 9;
        margin: 0 auto;
        width: 30%;

        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20%;

          .dot {
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;
            opacity: 70%;

            &.active {
              width: 8px;
              height: 8px;
              opacity: 1;
            }
          }
        }
      }
    }

    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.$verifyColor};
    }
    .name {
      font-size: 16px;
      font-weight: 700;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .price {
      margin: 8px 0;
    }
    .bottom {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      color: ${(props) => props.$bottonTextColor};

      .MuiRating-icon {
        margin-right: -2px;
      }
      .count {
        margin: 0 4px 0 4px;
      }
      .info {
      }
    }
  }
`;
