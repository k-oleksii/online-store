import { FC } from 'react';
import { StyledMain } from '@/theme/styles/layout/StyledMain';
import { StyledMainContent } from '@/theme/styles/layout/StyledMainContent';
import { Categories } from './Categories';
import { Cart } from './Cart';

export const Main: FC = () => {
  return (
    <StyledMain>
      <StyledMainContent>
        <Categories />
        <Cart />
        <Cart />
        <Cart />
      </StyledMainContent>
    </StyledMain>
  );
};
