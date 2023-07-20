import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledHeader = styled.header`
  ${tw`fixed top-0 inset-x-0 backdrop-blur-lg`}

  .content {
    ${tw`flex items-center justify-between`}
  }
`;

export const StyledOptions = styled.div`
  ${tw`flex items-center gap-x-6`}

  svg {
    ${tw`w-8 h-8 stroke-main-black transition-all`}

    &.icon-cart {
      path:first-child {
        ${tw`fill-main-black`}
      }
    }
  }

  .MuiIconButton-root {
    ${tw`p-0 cursor-pointer`}

    &:hover {
      background-color: transparent;

      svg {
        ${tw`stroke-main-red`}

        &.icon-cart {
          path:first-child {
            ${tw`fill-main-red`}
          }
        }
      }
    }

    .MuiTouchRipple-root {
      span {
        ${tw`scale-50	text-main-red`}
      }
    }
  }
`;
