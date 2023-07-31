import { bikesData } from '@/mock-data/products';
import {
  StyledButton,
  StyledHero,
  StyledHeroFrame,
} from '@/theme/styles/layout/StyledHomeBanner';
import { StyledHomeContent } from '@/theme/styles/layout/StyledHomeContent';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { Buy } from '@/ui/Buy';
import { CustomSlider } from '@/ui/CustomSlider';
import { Like } from '@/ui/Like';
import { Raiting } from '@/ui/Raiting';
import { Sale } from '@/ui/Sale';
import { Typography } from '@mui/material';
import { FC } from 'react';
import { Categories } from './Categories';

export const HomeComponent: FC = () => {
  return (
    <>
      <StyledHero>
        <StyledContainer>
          <StyledHeroFrame>
            <Typography variant="h1" component="h1">
              Faster on wheels
            </Typography>
            <Typography variant="subtitle" component="p">
              Buy new wheels for yourself and move with pleasure
            </Typography>

            <StyledButton>
              <p>Button</p>
            </StyledButton>
          </StyledHeroFrame>
        </StyledContainer>
      </StyledHero>
      <StyledHomeContent>
        <Categories />
        <CustomSlider
          bikesData={bikesData}
          headerName={'Best seller'}
          saleComponent={<Sale />}
          like={<Like />}
          raiting={<Raiting />}
          buyButton={<Buy />}
        />
        <CustomSlider
          headerName={'Skateboards'}
          bikesData={bikesData}
          like={<Like />}
          raiting={<Raiting />}
          buyButton={<Buy />}
        />
        <CustomSlider
          headerName={'Bicucle'}
          bikesData={bikesData}
          like={<Like />}
          raiting={<Raiting />}
          buyButton={<Buy />}
        />
      </StyledHomeContent>
    </>
  );
};
