import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .i-content {
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    transition: transform 200ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`;
