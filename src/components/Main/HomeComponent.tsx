import { FC } from 'react';
import { StyledHome } from '@/theme/styles/layout/StyledHome';
import { StyledHomeContent } from '@/theme/styles/layout/StyledHomeContent';
import { Categories } from './Categories';
import { Sale } from '@/ui/Sale';
import { bikesData } from '@/mock-data/products';
import { CustomSlider } from '@/ui/CustomSlider';
import { Like } from '@/ui/Like';
import { Raiting } from '@/ui/Raiting';
import { Buy } from '@/ui/Buy';
import {
  StyledHeroFrame,
  StyledButton,
  StyledHero,
} from '@/theme/styles/layout/StyledHomeBanner';

export const HomeComponent: FC = () => {
  return (
    <StyledHome>
      <StyledHero>
        <StyledHeroFrame>
          <h2>Faster on wheels</h2>
          <p>Buy new wheels for yourself and move with pleasure</p>
          <StyledButton>
            <p>Button</p>
          </StyledButton>
        </StyledHeroFrame>
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
    </StyledHome>
  );
};
