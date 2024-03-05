import styled from "styled-components";

export const LeftWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 0 24px;
  color: ${(props) => props.theme.color.primaryColor};

  svg {
    cursor: pointer;
  }
`;
