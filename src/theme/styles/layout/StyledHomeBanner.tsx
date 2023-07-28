import bg from '@/assets/Home-banner-bg.png';
import { EnumBreakpoints } from '@/types';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledHero = styled.div`
  ${tw`max-w-full h-[845px]`}
  position:relative;
  &::after {
    ${tw`content-[''] absolute inset-y-0 inset-x-0 z-[-1] bg-cover bg-center bg-no-repeat`}
    background-image: url(${bg});
  }
`;
export const StyledHeroFrame = styled.div`
  ${tw`h-[670px] w-[1000px] py-[260px] pr-40 pl-40 pb-[106px] flex flex-col justify-around items-start gap-9`}
  position:absolute;
  bottom:0;

  h2 {
    ${tw`text-[63px] font-normal not-italic leading-[76px]`}
    font-family: Bruno Ace;
    color: #fbfbfb;

    @media (max-width: ${EnumBreakpoints.tabletPortrait}) {
      ${tw`text-[24px] `}
    }
  }
  p {
    ${tw`text-[32px] w-[396px] font-normal not-italic leading-[40px]`}
    font-family: Lato;
    color: #fbfbfb;
  }
`;
export const StyledButton = styled.button`
  ${tw`w-[275px] h-[80px] flex justify-center items-center gap-2.5 rounded-3xl py-6 px-10`}
  background: #212121;
  box-shadow: 2px 4px 16px 0px rgba(255, 255, 255, 0.16);

  p {
    ${tw` text-[26px] not-italic font-bold leading-8`}
    font-family: Lato;
    color: #fbfbfb;
  }
`;
