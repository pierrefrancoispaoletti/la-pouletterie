import styled from "styled-components";

export const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 12px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
  align-items: center;
  .suggestion-name {
    font-size: 1.3em;
  }
  .suggestion-price {
    font-size: 1.3em;
  }
`;
