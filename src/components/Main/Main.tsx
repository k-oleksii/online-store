import { FC } from 'react';
import { StyledMain } from '@/theme/styles/layout/StyledMain';
import { StyledMainContent } from '@/theme/styles/layout/StyledMainContent';
import { Categories } from './Categories';
import { Cart } from './Cart';
import { Sale } from '@/ui/Sale';
import { bikesData } from '@/mock-data/products';

export const Main: FC = () => {
  return (
    <StyledMain>
      <StyledMainContent>
        <Categories />
        <Cart saleComponent={<Sale />} bikesData={bikesData} headerName={"Best seller"} />
        <Cart bikesData={bikesData} headerName={"Skateboards"} />
        <Cart bikesData={bikesData} headerName={"Bicucles"} />
      </StyledMainContent>
    </StyledMain>
  );
};
