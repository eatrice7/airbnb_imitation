import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin-top: 25px;
  color: ${(props) => props.theme.text.primaryColor};
  background-color: #fff;

  .title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .subtitle {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;
