import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 50px 80px;
  color: #222;
  font-size: 14px;
  border-top: 1px solid #ddd;
  .top {
    display: flex;
    margin-bottom: 40px;
  }

  .service {
    display: flex;
    padding: 20px 0 10px 0;
    border-top: 1px solid #ddd;
    .left {
      display: flex;
      flex: 1;
      .copy-right {
        color: rgb(34, 34, 34);
      }
      .other {
        .item {
          padding: 0 5px;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .text {
        position: relative;
        display: flex;
        font-weight: 600;

        .global {
          position: absolute;
          top: 1px;
          left: -25px;
        }
        .money {
          margin: 0px 25px;
        }
      }

      .icon {
        .icon-list {
          display: flex;

          .weibo {
            margin: 0 15px 0 0px;
          }
        }
      }
    }
  }

  .bottom {
    padding-top: 5px;
    font-size: 12px;
    color: #717171;
    border-top: 1px solid #ddd;
  }
`;
