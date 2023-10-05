import Slider from 'react-slick';
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledSlider = styled(Slider)`
  .slick-slide {
    > div {
      ${tw`h-full`}
    }
  }
`;
