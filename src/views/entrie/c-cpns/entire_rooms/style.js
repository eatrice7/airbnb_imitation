import styled from "styled-components";

export const RoomsWrapper = styled.div`
  padding: 30px 20px;
  .content {
    .total {
      margin-left: 15px;
      font-size: 20px;
      font-weight: 700;
      color: #000;
    }

    .room-list {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;

      .loading-cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #fff;
        opacity: 60%;
      }
    }
  }
`;
