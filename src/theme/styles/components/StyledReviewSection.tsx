import { ReviewCard } from '@/components/ProductCard/ReviewCard';
import { Dialog, TextField, TextareaAutosize } from '@mui/material';
import Slider from 'react-slick';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledReviewSection = styled.section`
  ${tw`mb-14`}
`;

export const StyledReview = styled.div`
  ${tw`flex gap-x-5`}

  .slick-slider {
    ${tw`relative`}

    .button {
      ${tw`absolute top-1/2 -left-3 -translate-y-2/4`}
    }

    // .button-next {
    //   ${tw`absolute -right-10 left-auto`}
    // }

  //   .MuiIconButton-root {
  //     ${tw`w-6 h-6 p-0`}

  //     svg {
  //       ${tw`stroke-secondary-gray`}
  //     }
  //   }
  // }

  .slick-list {
    ${tw`overflow-hidden`}
  }
  .slick-track {
    ${tw`flex gap-x-5`}
  }
`;

export const StyledDialog = styled(Dialog)`
.MuiPaper-root {
  ${tw`rounded-3xl p-10 pt-16`}
`;

export const StyledFeedbackWrapper = styled.div`
  ${tw`w-[414px] h-[254px] flex flex-col gap-y-6 p-4 justify-center items-center bg-main-white rounded-3xl`}
`;

export const StyledReviewsWrapper = styled.div`
  ${tw`w-full grid p-4 bg-main-white rounded-3xl`}
`;

export const StyledAddButton = styled.div`
  svg {
    ${tw`h-full w-full stroke-[#878D99] transition-all`}
  }

  .MuiIconButton-root {
    ${tw`p-0 cursor-pointer`}

    &:hover {
      background-color: transparent;

      svg {
        ${tw`stroke-main-red`}
      }
    }
  }
`;

export const StyledNoReviews = styled.div`
  ${tw`place-self-center`}
`;
export const StyledReviewCard = styled(ReviewCard)`
  ${tw`place-self-start`}
`;
export const StyledReviewCardWrapper = styled.div`
  ${tw``}
`;
export const StyledContainerReviewSlider = styled.div`
  // ${tw`w-full lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto`}
`;

export const StyledReviewSlider = styled(Slider)`
  // .slick-slide {
  //   @media (max-width: 1000px) {
  //     ${tw`!w-[220px]`}
  //   }

  //   > div {
  //     ${tw`h-full`}
  //   }
  // }

  // ${StyledReviewCard} {
  //   ${tw`min-w-[220px]`}
  // }

  // .button {
  //   ${tw`hidden lg:inline-flex`}
  // }
`;

export const StyledReviewPopUpWrapper = styled.div`
  ${tw`grid grid-cols-2 gap-x-5`}
`;

export const StyledProductInfo = styled.div``;

export const StyledReviewInfo = styled.div``;

export const StyledReviewRating = styled.div`
  ${tw`grid grid-cols-2 content-center items-center`}
`;

export const StyledTextArea = styled(TextareaAutosize)`
  width: 250px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #8083ff;
  &:hover {
    border: 1px solid #D25;
  }
  &:focus{
    border: 1px solid yellow;
  }
`;
