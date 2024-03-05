import styled from "styled-components";

export const EntireWrapper = styled.div`
  background-color: #fff;

  .header {
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    left: 0;
  }
  .filter {
    position: sticky;
    z-index: 9;
    top: 80px;
    right: 0;
    left: 0;
    margin-bottom: 75px;
  }
`;
