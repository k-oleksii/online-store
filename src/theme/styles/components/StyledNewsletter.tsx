import { EnumBreakpoints } from '@/types';
import { IconButton } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledNewsletter = styled.div`
  ${tw`pt-16 pb-14 bg-main-white`}

  .content {
    ${tw`w-[460px] mx-auto`}

    @media (max-width: ${EnumBreakpoints.mobile}) {
      ${tw`w-full`}
    }
  }

  .title {
    &:not(:last-child) {
      ${tw`block mb-4`}
    }
  }

  .subtitle {
    ${tw`opacity-70	`}

    &:not(:last-child) {
      ${tw`block mb-4`}
    }
  }

  form {
    ${tw`flex gap-x-4`}

    .MuiFormControl-root {
      ${tw`flex-1`}
    }

    .MuiInputBase-root {
      ${tw`border-main-black`}
    }

    .MuiInputAdornment-root {
      svg {
        ${tw`stroke-main-black`}
      }
    }

    .MuiInputBase-input {
      ${tw`text-sm`}
    }
  }
`;

export const StyledNewsletterButton = styled(IconButton)`
  &.MuiButtonBase-root {
    ${tw`px-7 py-2 bg-secondary-gray rounded-lg	cursor-pointer transition-all`}

    &:hover {
      ${tw`bg-main-red`}
    }

    &:active {
      ${tw`bg-main-darkRed`}
    }
  }

  svg {
    ${tw`w-6 h-6 stroke-main-white`}
  }
`;
