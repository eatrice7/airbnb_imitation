import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 60px;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-icon {
      font-size: 24px;
    }
    .MuiPaginationItem-page {
      &:hover {
        text-decoration: underline;
      }
    }

    .MuiPaginationItem-page.Mui-selected {
      color: #fff;
      background-color: #000;
    }
    .MuiPaginationItem-ellipsis {
      position: relative;
      bottom: 3px;
    }

    .desc {
      margin-top: 16px;
    }
  }
`;
