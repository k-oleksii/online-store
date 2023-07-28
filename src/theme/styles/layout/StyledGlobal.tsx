import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export const StyledGlobal = createGlobalStyle`
  html {
    ${tw`h-full`}
  }

  body {
    ${tw`h-full font-lato text-base antialiased bg-secondary-bg`}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    #root {
      ${tw`h-full`}
    }
  }

  a {
    ${tw`cursor-pointer	`}
  }
`;
