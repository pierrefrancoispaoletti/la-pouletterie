import styled from "styled-components";
import { colors } from "../../_consts/colors/colors";

export const UpdatePasswordContainer = styled.div`
  display: flex;
  z-index: 6;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 12px;
  position: fixed;
  right: 0;
  left: 0;
  top: ${(props) => (props.open ? "30%" : "-500%")};
  background: ${colors.red};
  border: 1px solid black;
  border-radius: 8px;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
  label {
    color: white;
    font-weight: bold;
  }
  input {
    border-bottom: 1px solid white;
  }
  button {
    margin-bottom: 12px;
  }
`;
