import { getIcon } from '@/helpers/getIcon';
import { otherProductData, productData } from '@/mock-data/products';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { StyledAllLink } from '@/theme/styles/ui/StyledAllLink';
import { EnumIcons } from '@/types';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../Hero';
import { ProductSection } from '../ProductSection';
import { Categories } from './Categories';

export const Home: FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <ProductSection data={productData} title={'Best seller'} />
      <ProductSection data={otherProductData} title={'Bicycles'} />
      <ProductSection data={otherProductData} title={'Skateboards'} />
      <StyledContainer>
        <StyledAllLink>
          <Link to="#">
            View All
            {getIcon(EnumIcons.arrowLong)}
          </Link>
        </StyledAllLink>
      </StyledContainer>
    </>
  );
};
