import {
  StyledHero,
  StyledHeroContent,
} from '@/theme/styles/components/StyledHomeBanner';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { Button, Typography } from '@mui/material';

import bg from '@/assets/banner-bg.jpg';

export const Hero = () => {
  return (
    <StyledHero bg={bg}>
      <StyledContainer>
        <StyledHeroContent>
          <Typography variant="h1" component="h1">
            Be faster on wheels
          </Typography>
          <Typography variant="body1" component="p">
            Buy new wheels for yourself and move with pleasure
          </Typography>
          <Button variant="contained">View the catalog</Button>
        </StyledHeroContent>
      </StyledContainer>
    </StyledHero>
  );
};
