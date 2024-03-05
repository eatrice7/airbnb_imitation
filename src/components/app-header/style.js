import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;
  background-color: #fff;

  .top {
    display: flex;
    align-items: center;
    height: 80px;
    font-size: 14px;
  }
  .extend {
    height: ${(props) => (props.$isBigSearch ? "100px" : "0")};
    transition: height 250ms ease;
  }
`;
