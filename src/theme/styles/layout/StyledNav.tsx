import { EnumBreakpoints } from '@/types';
import { IconButton } from '@mui/material';
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledNav = styled.nav`
  margin: 0 auto;

  @media (max-width: ${EnumBreakpoints.tabletPortrait}) {
    ${tw`hidden`}
  }

  .list {
    ${tw`flex items-center gap-x-8`}
  }

  a {
    ${tw`relative block`}

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

export const StyledNavButton = styled(IconButton)`
  ${tw`cursor-pointer`}
`;
