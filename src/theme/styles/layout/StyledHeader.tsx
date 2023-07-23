import { EnumBreakpoints } from '@/types';
import { Dialog } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

interface StyledHeaderSearchProps {
  open?: boolean;
}

export const StyledHeader = styled.header`
  ${tw`fixed top-0 inset-x-0 py-8	backdrop-blur-lg`}

  .content {
    ${tw`flex items-center`}
  }
`;

export const StyledOptions = styled.div`
  ${tw`flex items-center gap-x-6`}

  @media (max-width: ${EnumBreakpoints.tabletPortrait}) {
    margin-left: auto;
  }

  @media (max-width: ${EnumBreakpoints.desktopMedium}) {
    ${tw`gap-x-4`}
  }

  @media (max-width: ${EnumBreakpoints.mobile}) {
    ${tw`gap-x-2`}
  }

  svg {
    ${tw`w-8 h-8 stroke-main-black transition-all`}

    @media (max-width: ${EnumBreakpoints.desktopMedium}) {
      ${tw`w-6 h-6`}
    }

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

  @media (max-width: ${EnumBreakpoints.desktopMedium}) {
    svg {
      ${tw`w-6 h-6`}
    }
  }
`;

export const StyledSearchDialog = styled(Dialog)<StyledHeaderSearchProps>`
  .MuiBackdrop-root {
    ${tw`bg-main-transparent`}
  }

  .MuiDialog-container {
    ${tw`h-auto`}
  }

  .MuiPaper-root {
    ${tw`max-w-full w-full m-0 bg-main-transparent shadow-none rounded-none`}
  }
`;

export const StyledHeaderSearch = styled.div`
  ${tw`py-12 z-[1000] bg-main-white`}

  @media (max-width: ${EnumBreakpoints.tablet}) {
    ${tw`mt-4 py-2`}
  }

  .search-content {
    ${tw`flex items-center`}
  }

  .MuiFormControl-root {
    ${tw`relative z-20 w-[1000px] mx-auto`}

    @media (max-width: ${EnumBreakpoints.tablet}) {
      ${tw`w-full`}
    }
  }

  .MuiButtonBase-root {
    ${tw`p-0 cursor-pointer`}

    svg {
      ${tw`w-8 h-8 stroke-secondary-gray`}
    }

    &:hover {
      ${tw`bg-main-transparent`}
    }

    .MuiTouchRipple-root {
      span {
        ${tw`scale-50	text-secondary-gray`}
      }
    }
  }
`;
