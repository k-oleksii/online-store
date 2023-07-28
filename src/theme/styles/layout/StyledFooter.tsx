import bg from '@/assets/footer-bg.jpg';
import { EnumBreakpoints } from '@/types';
import { styled } from 'styled-components';
import tw from 'twin.macro';
import { StyledLogo } from './StyledLogo';

export const StyledFooter = styled.footer`
  ${tw`relative z-10 py-10 bg-main-white`}

  &::after {
    ${tw`content-[''] absolute inset-y-0 inset-x-0 z-[-1] bg-cover	bg-no-repeat	opacity-[0.16]`}
    background-image: url(${bg});
  }

  ${StyledLogo} {
    ${tw`shrink-0	max-w-none`}
  }
`;
export const StyledSocials = styled.div`
  ${tw`mt-20`}

  @media (max-width: ${EnumBreakpoints.mobile}) {
    ${tw`mt-8`}
  }

  ul {
    ${tw`mt-6`}
  }

  svg {
    ${tw`w-8 h-8 stroke-main-black`}

    &.icon-yt {
      path {
        &:first-child {
          ${tw`fill-main-black`}
        }
      }
    }
  }
`;

export const StyledMenu = styled.div`
  &:not(:last-child) {
    ${tw`mr-[151px]`}

    @media (max-width: ${EnumBreakpoints.mobile}) {
      ${tw`flex-1	mr-2.5`}
    }
  }

  ul {
    ${tw`mt-6`}
  }

  li {
    &:not(:last-child) {
      ${tw`mb-4`}
    }
  }
`;

export const StyledCopyright = styled.div`
  ${tw`block mt-20 text-center`}
`;
