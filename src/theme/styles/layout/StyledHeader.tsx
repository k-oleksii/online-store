import { styled } from 'styled-components';
import tw from 'twin.macro';
export const StyledHeader = styled.header`
  ${tw`fixed top-0 inset-x-0`}

  .content {
    ${tw`flex items-center justify-between`}
  }
`;
