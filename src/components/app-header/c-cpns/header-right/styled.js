import styled from "styled-components";

export const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  color: ${(props) => props.theme.text.primaryColor};

  .btns {
    display: flex;
    align-items: center;
    margin-right: 5px;

    .btn {
      height: 18px;
      line-height: 18px;
      font-size: 14px;
      font-weight: 600;
      padding: 12px 18px;
      border-radius: 22px;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 48px;
    width: 77px;
    margin-right: 24px;
    box-sizing: border-box;
    border-radius: 25px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;

    /* 阴影过渡动画 */
    ${(props) => props.theme.boxShadow}

    .avatar {
      color: #717171;
    }

    .panel {
      position: absolute;
      z-index: 999;
      top: 60px;
      right: 0px;
      width: 250px;
      color: #666;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);

      .top {
        padding: 10px 0;
        border-bottom: 2px solid #ddd;
        .login {
          font-weight: 600;
          color: ${(props) => props.theme.text.primaryColor};
        }
      }
      .bottom {
        padding: 10px 0;
      }
      .item {
        padding: 15px 15px;
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
`;
