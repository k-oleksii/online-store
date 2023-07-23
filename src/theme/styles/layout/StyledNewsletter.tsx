import { EnumBreakpoints } from '@/types';
import { IconButton } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledNewsletter = styled.div`
  ${tw`pt-16 pb-14 bg-main-white`}

  .content {
    ${tw`w-[542px] mx-auto`}

    @media (max-width: ${EnumBreakpoints.mobile}) {
      ${tw`w-full`}
    }
  }

  .title {
    &:not(:last-child) {
      ${tw`block mb-8`}
    }
  }

  .subtitle {
    &:not(:last-child) {
      ${tw`block mb-6`}
    }
  }

  form {
    ${tw`flex`}
  }

  .MuiFormControl-root {
    ${tw`flex-1 mr-6`}

    .MuiInputBase-root {
      .MuiInputBase-input {
        ${tw`h-12`}
      }

      fieldset {
        ${tw`rounded-2xl	`}
      }
    }
  }
`;

export const StyledNewsletterButton = styled(IconButton)`
  &.MuiButtonBase-root {
    ${tw`px-6 py-2 bg-secondary-gray rounded-lg	cursor-pointer`}
  }

  svg {
    ${tw`w-8 h-8 stroke-main-white`}
  }
`;
