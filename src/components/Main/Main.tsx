import { FC } from 'react';
import { StyledMain } from '@/theme/styles/layout/StyledMain';
import { StyledMainContent } from '@/theme/styles/layout/StyledMainContent';
import { Categories } from './Categories';
import { Sale } from '@/ui/Sale';
import { bikesData } from '@/mock-data/products';
import { CustomSlider } from '@/ui/CustomSlider';
import { Like } from '@/ui/Like';
import { Raiting } from '@/ui/Raiting';
import { Buy } from '@/ui/Buy';
import { Button } from '@/ui/Button';

export const Main: FC = () => {
  return (
    <StyledMain>
      <StyledMainContent>
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
        <Button />
      </StyledMainContent>
    </StyledMain>
  );
};
