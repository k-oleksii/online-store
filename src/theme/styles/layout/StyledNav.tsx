import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledNav = styled.nav`
  .list {
    ${tw`flex items-center gap-x-8`}
  }

  a {
    ${tw`relative`}

    &::after {
      ${tw`content-[""] absolute top-[calc(100% + 4px)]  right-0 left-0 h-[1px] bg-main-red opacity-0	transition-all duration-300`}
    }

    &:hover,
    &:active {
      &::after {
        ${tw`opacity-50`}
      }
    }

    &.active {
      &::after {
        ${tw`opacity-100`}
      }
    }
  }
`;
