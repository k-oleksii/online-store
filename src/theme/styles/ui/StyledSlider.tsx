import Slider from 'react-slick';
import styled from 'styled-components';
import tw from 'twin.macro';
import { StyledCard } from '../components/StyledCard';

export const StyledSlider = styled(Slider)`
  .slick-slide {
    // @media (max-width: 1000px) {

    // }

    > div {
      ${tw`h-full`}
    }
  }

  // ${StyledCard} {
  //   ${tw`min-w-[220px]`}
  // }

  .button {
    ${tw`hidden lg:inline-flex`}

    &:hover,
    &:active {
      svg {
        ${tw`stroke-main-red`}
      }
    }
  }
`;
