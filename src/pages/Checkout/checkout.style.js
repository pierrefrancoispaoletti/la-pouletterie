import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const CheckoutTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  h2 {
    width: 50%;
  }
  span {
    display: inline-block;
    font-weight: bold;
    font-size: 1.3em;
  }
`;

export const NoItemMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
