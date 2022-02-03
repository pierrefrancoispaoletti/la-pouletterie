import styled from "styled-components";

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: red;
  color: white;
  border-radius: 100%;
  padding: 3px 6px;
  position: absolute;
  right: ${(props) => (props.right ? "8px" : "")};
  left: ${(props) => (props.left ? "12px" : "")};
  font-weight: 700;
`;
