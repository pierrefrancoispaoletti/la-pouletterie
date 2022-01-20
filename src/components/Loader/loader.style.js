import styled, { css } from "styled-components";
import { colors } from "../../_consts/colors/colors";

const isLoading = (props) => {
  if (props.loading) {
    return css`
      backdrop-filter: blur(15px);
    `;
  }
};
export const ChickenLoaderContainer = styled.div`
  height: 100%;
  width: 100vw;
  position: fixed;
  z-index: 20;
  top: 0;
  ${isLoading}
  .chicken-loader {
    /* Bird Wattle */
    z-index: 20;
    animation: birdWattle 4s linear infinite;
    border: 1.2rem solid transparent;
    border-left: 1.2rem solid ${colors.red};
    border-bottom: 1.2rem solid ${colors.red};
    border-radius: 50%;
    position: fixed;
    width: 10rem;
    height: 10rem;
    left: 50%;
    top: 50%;

    &::before,
    &::after {
      border-radius: 50%;
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &::before {
      /* Large beak with head */
      animation: birdBeak 4s linear infinite;
    }

    &::after {
      /* Small beak */
      animation: birdBottomBeak 4s linear infinite;
      border: 2.4rem solid transparent;
      border-right: 2.4rem solid darken(orange, 10);
    }

    span {
      /* Eye */
      animation: birdEye 4s linear infinite;
      background: black;
      border-radius: 50%;
      height: 1.6rem;
      left: 1.6rem;
      position: absolute;
      top: 3.1rem;
      width: 1.6rem;
    }
  }

  @keyframes birdWattle {
    0%,
    20%,
    100% {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    40%,
    80% {
      transform: translate(-50%, -50%) rotate(225deg);
    }
  }

  @keyframes birdBeak {
    0%,
    20%,
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
      border: 4rem solid transparent;
      border-top: 4rem solid orange;
      border-left: 4rem solid white;
      border-bottom: 4rem solid lightgray;
    }

    40%,
    80% {
      border-top: 4rem solid lightgray;
      border-left: 4rem solid white;
      border-bottom: 4rem solid orange;
      transform: translate(-50%, -50%) rotate(-90deg);
    }
  }

  @keyframes birdBottomBeak {
    0%,
    20%,
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    40%,
    80% {
      transform: translate(-50%, -50%) rotate(-90deg);
    }
  }

  @keyframes birdEye {
    0%,
    20%,
    100% {
      transform: translate(0, 0);
    }

    40%,
    80% {
      transform: translate(1.5rem, 1.5rem);
    }
  }
`;
