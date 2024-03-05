import styled from "styled-components";

export const PictureWrapper = styled.div`
  position: relative;

  > .picture {
    display: flex;
    height: 600px;
    background-color: #000;
    /* 排他思想：想让全部遮罩不透明，再让个体遮罩透明 */
    &:hover {
      .cover {
        opacity: 1 !important;
      }

      .item:hover {
        .cover {
          opacity: 0 !important;
        }
        img {
          transform: scale(1.07);
        }
      }
    }

    .left,
    .right {
      width: 50%;
      height: 100%;

      .item {
        position: relative;
        overflow: hidden;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 200ms ease;
        }

        .cover {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: opacity 200ms ease;
        }
      }
    }

    .left {
      .item {
        width: 100%;
        height: 100%;
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 50%;
        height: 50%;
        box-sizing: border-box;
        border: 1px solid #000;
      }
    }
  }

  .show-btn {
    position: absolute;
    right: 15px;
    bottom: 15px;
    padding: 6px 10px;
    border: 1px solid #000;
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;
  }
`;
