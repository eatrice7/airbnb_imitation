import styled from "styled-components";

export const InfoWrapper = styled.div`
  .content {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 65px;
    right: 0;
    left: 0;
    /* margin-top: 20px; */
    border: 1px solid #ddd;
    border-radius: 32px;
    cursor: pointer;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    ${(props) => props.theme.boxShadow};
    overflow: hidden;

    &.cover {
      background-color: #ebebeb;

      .item.active {
        background-color: #fff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
      }
    }
  }

  .item {
    width: 25%;
    padding: 14px 24px;
    font-size: 12px;
    border-radius: 32px;

    &:hover {
      background-color: #ddd;
    }

    .text {
      color: #222;
      font-weight: 600;
    }

    .desc {
      margin-top: 3px;
      color: #717171;
    }
  }
`;
