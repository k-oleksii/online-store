import { Button } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledGoogleBtn = styled(Button)`
  &.MuiButtonBase-root {
    ${tw`flex items-center justify-center gap-x-4	min-h-[40px] text-sm text-main-black bg-main-white border border-solid border-main-black rounded-xl`}
  }
`;
