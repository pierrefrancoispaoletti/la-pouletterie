import styled, { css } from "styled-components";
import { colors } from "../../_consts/colors/colors";

const isSelected = (props) => {
  if (props.selected) {
    return css`
      text-decoration: underline;
      background: ${colors.grey};
      border-left: 1px solid white;
      border-right: 1px solid white;
      .fa-primary {
        color: white;
      }
      .fa-secondary {
        color: black;
      }
    `;
  }
};

export const UserBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: black;
  min-height: 45px;
`;

export const LinkButtonStyled = styled.button`
  width: 30%;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 12px;
  background: black;
  color: white;
  border: none;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  .icon {
    margin-bottom: 15px;
  }
  :active {
    background: ${colors.grey};
    border-left: 1px solid white;
    border-right: 1px solid white;
    .fa-primary {
      color: white;
    }
    .fa-secondary {
      color: black;
    }
  }
  ${isSelected}
`;
