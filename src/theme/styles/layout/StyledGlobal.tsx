import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export const StyledGlobal = createGlobalStyle`
  body {
    ${tw`font-lato text-base antialiased bg-secondary-bg`}
  }

  a {
    ${tw`cursor-pointer	`}
  }
`;
