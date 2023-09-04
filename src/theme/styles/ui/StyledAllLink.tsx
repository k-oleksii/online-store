import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledAllLink = styled.div`
  ${tw`flex justify-end`}

  a {
    ${tw`flex items-center gap-x-2 font-bruno text-[24px] transition-all`}

    &:hover {
      ${tw`text-main-red`}

      .icon-arrowLong {
        ${tw`fill-main-red`}
      }
    }
  }

  .icon-arrowLong {
    ${tw`w-[81px] fill-main-black transition-all`}
  }
`;
