import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .tab {
    padding: 8px 16px;
    margin: 0 3px;
    color: #717171;
    font-size: 16px;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }

    &.active {
      color: #222;
      font-weight: 600;
      background-color: #fff;
    }
  }
`;
