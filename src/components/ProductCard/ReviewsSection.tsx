import { getIcon } from '@/helpers/getIcon';
import { FC } from 'react';
import {
  StyledAddButton,
  StyledContainerReviewSlider,
  StyledFeedbackWrapper,
  StyledNoReviews,
  StyledReview,
  StyledReviewCard,
  StyledReviewSection,
  StyledReviewSlider,
  StyledReviewsWrapper,
} from '@/theme/styles/components/StyledReviewSection';
import {
  StyledContainerSlider,
} from '@/theme/styles/layout/StyledWrappers';
import { StyledSlider } from '@/theme/styles/ui/StyledSlider';
import { EnumIcons, ICardProps } from '@/types';
import { IconButton, Typography } from '@mui/material';
import { AddReviewPopUp } from './AddReviewPopUp';
import { ReviewCard } from './ReviewCard';

interface ISliderProps {
  title?: string;
  reviews?: [];
  url: string;
  name: number;
  
}

interface IArrowProps {
  onClick?: () => void; // Define the type for onClick prop
}
const NextArrow: FC<IArrowProps> = ({ onClick }) => (
  <IconButton onClick={onClick} className="button button-next">
    {getIcon(EnumIcons.arrowRight)}
  </IconButton>
);

const PrevArrow: FC<IArrowProps> = ({ onClick }) => (
  <IconButton onClick={onClick} className="button button-prev">
    {getIcon(EnumIcons.arrowLeft)}
  </IconButton>
);

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // {
    //   breakpoint: 1280,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //   },
    // },
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //   },
    // },
    {
      breakpoint: 980,
      settings: {
        autoSlidesToShow: true,
        slidesToScroll: 1,
      },
    },
  ],
};

export const ReviewsSection: FC<ISliderProps> = ({ reviews, url, name }) => {
  return (
    <StyledReviewSection>
      <Typography component="h2" variant="h2" sx={{ marginBottom: '24px' }}>
        Reviews
      </Typography>
      <StyledReview>
        <StyledFeedbackWrapper>
          <Typography component="h3" variant="body2">
            Leave your feedback about the product
          </Typography>
          <StyledAddButton>
            <AddReviewPopUp url={url} name={name} />
          </StyledAddButton>
        </StyledFeedbackWrapper>
        <StyledReviewsWrapper>
          {!reviews.length && (
            <StyledNoReviews>
              <Typography>
                There are no reviews for this product on this site yet.
              </Typography>
            </StyledNoReviews>
          )}
          {reviews.length === 1 && (
            <StyledReviewCard
              stars={reviews[0].stars}
              id={reviews[0].id}
              text={reviews[0].text}
              date={reviews[0].createdAt}
            />
          )}
          {reviews.length > 1 && (
            <StyledContainerReviewSlider>
              <StyledReviewSlider {...settings}>
                {reviews?.map((review, index) => (
                  <ReviewCard key={index} {...review} />
                ))}
              </StyledReviewSlider>
            </StyledContainerReviewSlider>
          )}
        </StyledReviewsWrapper>
      </StyledReview>
    </StyledReviewSection>
  );
};
