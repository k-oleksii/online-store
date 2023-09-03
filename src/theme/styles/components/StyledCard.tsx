import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledCard = styled.div`
  ${tw`relative flex flex-col gap-y-6	py-4 bg-main-white overflow-hidden rounded-3xl`}
`;

export const StyledCardTop = styled.div`
  ${tw`flex items-center justify-between pr-4`}

  .MuiCheckbox-root {
    ${tw`w-6 h-6 ml-auto p-0 stroke-main-black`}
  }

  .Mui-checked {
    svg {
      ${tw`stroke-main-red fill-main-red`}
    }
  }
`;

export const StyledCardImg = styled.div`
  ${tw`h-[144px]`}

  a {
    ${tw`flex justify-center`}
  }
`;

export const StyledCardInfo = styled.div`
  ${tw`flex flex-col gap-y-3 px-4`}
`;

export const StyledPrices = styled.div`
  ${tw`flex items-center justify-between`}
`;
