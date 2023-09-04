import { RadioGroup } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledRadioSwitch = styled(RadioGroup)`
  &.MuiFormGroup-root {
    ${tw`flex-row p-0.5	bg-main-black rounded-xl`}
  }

  label {
    ${tw`relative z-10 flex items-center justify-center flex-1 m-0 min-h-[32px]`}

    span {
      transition: background-color 0.5s;

      &.MuiRadio-root {
        ${tw`absolute inset-0	 rounded-xl -z-[1]`}

        svg {
          display: none;
        }
      }

      &.Mui-checked {
        ${tw`bg-main-white`}

        ~ span {
          ${tw`text-main-black`}
        }
      }

      &.MuiTypography-root {
        ${tw`text-base font-bold text-main-white`}
      }
    }
  }
`;
