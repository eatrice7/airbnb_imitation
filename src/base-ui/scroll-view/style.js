import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;

  .scroll {
    overflow-x: hidden;
    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }
  .control {
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 9;
    justify-content: center;
    width: 28px;
    height: 28px;
    text-align: center;
    border: 0.5px solid rgb(0 0 0 / 0.3);
    border-radius: 50%;
    background-color: #fff;
    transform-origin: center;
    cursor: pointer;

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%) scale(1);
      transition: box-shadow 0.2s ease;
      &:hover {
        transform: translate(50%, -50%) scale(1.04);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
      }
    }
    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
      transition: box-shadow 0.2s ease;
      &:hover {
        transform: translate(-50%, -50%) scale(1.04);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
      }
    }
  }
`;
