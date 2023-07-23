import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledLayout = styled.div`
  ${tw`flex flex-col min-h-full pt-[150px]`}

  main {
    flex: 1 1 auto;
  }
`;
