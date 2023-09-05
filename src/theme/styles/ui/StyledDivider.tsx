import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledDivider = styled.span`
  ${tw`flex items-center text-base text-secondary-gray`}

  span {
    ${tw`mx-2`}
  }

  &::before,
  &::after {
    ${tw`content-[''] w-full h-px	bg-secondary-gray`}
  }
`;
