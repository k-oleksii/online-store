import { EnumBreakpoints } from '@/types';
import { styled } from 'styled-components';
import tw from 'twin.macro';

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

export const StyledHeaderSearch = styled.div`
  ${tw`fixed top-0 inset-x-0 py-12 z-[1000] bg-main-white transition-all duration-300	-translate-y-full`}

  &.open {
    ${tw`translate-y-0`}
  }

  .search-content {
    ${tw`flex items-center`}
  }

  .MuiFormControl-root {
    ${tw`relative z-20 w-[1000px] mx-auto`}
  }

  .MuiInputBase-root {
    ${tw`h-16	px-8 font-lato text-xl text-main-black rounded-3xl`}

    .MuiInputAdornment-root {
      ${tw`mr-6`};
    }

    svg {
      ${tw`w-8 h-8 stroke-secondary-gray`}
    }

    &:hover {
      .MuiOutlinedInput-notchedOutline {
        ${tw`border-secondary-blue`};
      }
    }

    .MuiInputBase-input {
      &::placeholder {
        ${tw`opacity-100`};
      }
    }

    .MuiOutlinedInput-notchedOutline {
      ${tw`border-secondary-blue`};
    }

    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        ${tw`border`};
      }
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
