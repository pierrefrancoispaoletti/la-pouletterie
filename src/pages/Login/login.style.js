import styled from "styled-components";
import { colors } from "../../_consts/colors/colors";

export const LoginContainer = styled.div`
  width: 100%;
  margin: 24px auto;
  text-align: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  margin-bottom: 12px;
  padding: 8px;
  border-bottom: 2px solid ${colors.grey};
`;
