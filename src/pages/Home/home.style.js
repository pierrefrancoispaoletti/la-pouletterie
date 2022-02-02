import styled, { css } from "styled-components";

const horizontalScroll = (props) => {
  if (props.horizontal) {
    return css`
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      overflow: auto;
      & > div {
        display: flex;
        max-width: 100%;
        flex-direction: column;
        & img {
          width: 200px;
          height: 200px;
        }
      }
    `;
  }
};

const verticalScroll = (props) => {
  if (props.vertical) {
    return css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      @media (min-width: 600px) {
        box-sizing: content-box;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-around;
        width: 100%;
        & > div {
          min-height: 485px;
          margin: 12px auto;
          display: flex;
          max-width: 30%;
          height: auto;
          flex-direction: column;
          align-items: stretch;
          justify-content: space-between;
          & img {
            width: 200px;
            height: 200px;
          }
        }
      }
    `;
  }
};
export const ProductsContainer = styled.div`
  ${verticalScroll}
  ${horizontalScroll}
`;
