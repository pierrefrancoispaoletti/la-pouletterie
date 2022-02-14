import styled from "styled-components";

export const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-size: 1.6em;
    text-decoration: underline;
  }
`;

export const SuggestionsListUl = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: space-between;
`;

export const SuggestionsListLi = styled.li`
  line-height: 1.5;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
  align-items: center;
  .suggestion-name {
    display: block;
    font-weight: bold;
    text-decoration: underline;
    font-size: 1.3em;
  }
  .suggestion-price {
    font-weight: bold;
    font-size: 1.5em;
  }
`;
