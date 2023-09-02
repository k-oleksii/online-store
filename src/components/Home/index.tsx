import { bikesData } from '@/mock-data/products';
import { Buy } from '@/ui/Buy';
import { CustomSlider } from '@/ui/CustomSlider';
import { Like } from '@/ui/Like';
import { Raiting } from '@/ui/Raiting';
import { Sale } from '@/ui/Sale';
import { FC } from 'react';
import { Hero } from '../Hero';
import { Categories } from './Categories';

export const Home: FC = () => {
  return (
    <>
      <Hero />
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
      {/* <StyledHomeContent>

      </StyledHomeContent> */}
    </>
  );
};
