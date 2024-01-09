import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledProductCard = styled.div`
  ${tw`grid grid-cols-2	gap-32 mt-14 mb-10`}
`;

export const StyledCardRight = styled.div`
  ${tw`flex flex-col min-h-[28px] pr-4`}
`;

export const StyledCardImg = styled.div`
  ${tw`shrink-0	h-[405px]`}

  img {
    ${tw`object-contain	w-full h-full`}
  }

  a {
    ${tw`flex justify-center h-full px-2`}
  }
`;

export const StyledCardInfo = styled.div`
  ${tw`flex flex-col gap-y-2 h-full px-4 mb-9`}
`;

export const StyledProductPrices = styled.div`
  ${tw` mt-6 flex items-center gap-x-6`}
`;

export const StyledProductCode = styled.div`
  ${tw` mt-7 flex items-center gap-x-4`}
`;
export const StyledRs = styled.div`
  ${tw`flex items-center gap-x-4`}
`;

export const StyledButtonHeartGroup = styled.div`
  ${tw`mt-2 mb-6`}

  .MuiCheckbox-root {
    ${tw`sm:min-w-[50px] sm:min-h-[50px] md:min-w-[60px] md:min-h-[60px] ml-4 p-3 stroke-main-black rounded-[16px] border-2 border-solid border-main-black`}
  }

  .Mui-checked {
    svg {
      ${tw`stroke-main-red fill-main-red`}
    }
  }
`;
