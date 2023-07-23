import bg from '@/assets/footer-bg.jpg';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledFooter = styled.footer`
  ${tw`relative z-10 py-10 bg-main-white`}

  &::after {
    ${tw`content-[''] absolute inset-y-0 inset-x-0 z-[-1] bg-cover	bg-no-repeat	opacity-[0.16]`}
    background-image: url(${bg});
  }
`;
export const StyledSocials = styled.div`
  ${tw`mt-20`}

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
