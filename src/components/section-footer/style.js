import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: -8px;
  .info {
    display: flex;
    align-items: center;
    cursor: pointer;

    font-weight: 17px;
    font-weight: 700;
    color: ${props => props.color};
    &:hover {
      text-decoration: underline;
    }
    .text {
      position: relative;
      bottom: 1px;
      margin-right: 6px;
    }
  }
`;
