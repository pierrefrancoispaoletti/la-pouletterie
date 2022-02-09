import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid black;
  background: black;
  font-size: 0.8em;
  color: white;
  & h2 {
    text-align: center;
  }
  & a {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding-bottom: 14px;
  }
  & .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
  }
`;
