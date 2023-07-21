import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledOutsideContainer = styled.div`
  ${tw`absolute inset-x-0 inset-y-0 z-[1] hidden`}

  &.show {
    ${tw`block`}
  }
`;
