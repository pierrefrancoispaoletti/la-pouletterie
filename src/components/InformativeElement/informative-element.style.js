import styled from "styled-components";
import { colors } from "../../_consts/colors/colors";

export const InformativeElementContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 18px;
  width: 70%;
  margin: 18px auto;
  border: 3px solid ${colors.red};
  border-radius: 50px;
`;
