import { Typography } from '@mui/material';
import { FC } from 'react';

import {
  StyledAddButton,
  StyledFeedbackWrapper,
  StyledReview,
  StyledReviewSection,
} from '@/theme/styles/components/StyledReviewSection';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { AddReviewPopUp } from '../AddReviewPopUp';
import { Reviews } from '../Reviews';
import { IReviewPopUpProps } from '@/types';


export const ReviewsSection: FC<IReviewPopUpProps> = ({ url, name, id }) => {
  return (
    <StyledReviewSection>
      <StyledContainer>
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
          <Reviews id={id} />
        </StyledReview>
      </StyledContainer>
    </StyledReviewSection>
  );
};
