import styled, { css } from "styled-components";

const isOpen = (props) => {
  if (!props.open) {
    return css`
      display: none;
    `;
  }
};

export const ProductModalContainer = styled.div`
  backdrop-filter: blur(1em);
  border: 1px solid black;
  position: fixed;
  z-index: 11;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  ${isOpen}
`;

export const CheckboxContainer = styled.div`
  margin: 6px 12px;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
