import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledProductCard = styled.div`
  ${tw`grid grid-rows-1 gap-y-6 sm:grid-cols-[41% auto] sm:gap-x-32 mt-8 sm:mt-14 mb-14 overflow-hidden`}
`;

export const StyledCardRight = styled.div`
  ${tw`relative flex flex-col h-[290px] lg:h-[580px] bg-main-red pb-8 lg:pb-16 pt-8 rounded-3xl`}
`;
export const StyledSale = styled.div`
  ${tw`w-[191px] flex items-center justify-center py-4 px-16 text-main-white bg-main-red rounded-r`}
  .MuiTypography-root {
    ${tw`text-2xl`}
  }
`;
export const StyledNoSale = styled.div`
  ${tw`bg-main-white pt-16 `}
    }
`;

export const StyledCardImg = styled.div`
  ${tw`shrink-0 px-10 lg:px-20 bg-main-black`}

  img {
    ${tw`object-contain	h-[211px] lg:w-full lg:h-full`}
  }
`;

export const StyledCardInfo = styled.div`
  ${tw`flex flex-col gap-y-2 h-full `}
`;

export const StyledProductCode = styled.div`
  ${tw` flex items-center gap-x-4 text-secondary-gray`}
`;

export const StyledProductPrices = styled.div`
  ${tw` flex items-center gap-x-6 mt-6`}
`;

export const StyledRs = styled.div`
  ${tw`flex items-center gap-x-4`}
`;

export const StyledButtonHeartGroup = styled.div`
  ${tw`mt-2 mb-6`}

  .MuiCheckbox-root {
    ${tw`min-w-[50px] min-h-[50px] lg:min-w-[60px] lg:min-h-[60px] ml-1 lg:ml-4 p-2 lg:p-3 stroke-main-black rounded-[16px] border-2 border-solid border-main-black`}
  }

  .MuiCheckbox-root:hover {
    ${tw`border-main-red stroke-main-red  `}
  }

  .Mui-checked {
    svg {
      ${tw`stroke-main-red fill-main-red`}
    }
  }
`;
