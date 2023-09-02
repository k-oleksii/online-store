import { styled } from 'styled-components';

export const StyledLike = styled.div`

  .icon {
    fill: transparent;
    stroke: black;
    stroke-width: 30;
    transition: all 0.5s;

    &.active {
      animation: like 0.5s 1;
      fill: red;
      stroke: none;
    }
  }
  @-webkit-keyframes like {
    0% {
      transform: scale(1);
    }
    90% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;
