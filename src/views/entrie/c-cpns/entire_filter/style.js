import styled from "styled-components";

export const FilterWrapper = styled.div`
  padding: 0 24px;
  border-bottom: 1px solid #eee;
  background-color: #fff;

  .filter-content {
    display: flex;
    align-items: center;
    height: 48px;

    .filter-item {
      margin-right: 10px;
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 4px;
      color: #484848;
      cursor: pointer;

      &.active {
        background-color: #008489;
        border: 1px solid #008489;
        color: #fff;
      }
    }
  }
`;
