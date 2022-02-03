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
        width: 100%;
        flex-direction: column;
        & img {
          width: 200px;
          height: 200px;
        }
      }
      @media (min-width: 600px) {
        box-sizing: content-box;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        & > div {
          margin: 12px 12px;
          display: flex;
          width: 30%;
          height: auto;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          & img {
            width: 200px;
            height: 200px;
          }
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
        justify-content: center;
        width: 100%;
        & > div {
          margin: 12px 12px;
          display: flex;
          width: 30%;
          height: auto;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
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
