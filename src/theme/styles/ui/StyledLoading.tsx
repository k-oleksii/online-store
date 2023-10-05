import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledLoading = styled.div`
  ${tw`flex items-center gap-x-3 text-secondary-blue`}

  svg {
    ${tw`text-secondary-blue`}
  }
`;
