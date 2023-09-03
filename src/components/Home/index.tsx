import { otherProductData, productData } from '@/mock-data/products';
import { FC } from 'react';
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
    </>
  );
};
