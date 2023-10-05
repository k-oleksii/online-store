import { categories } from '@/mock-data/categories';
import {
  StyledCategories,
  StyledCategoriesContainer,
} from '@/theme/styles/components/StyledCategories';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { FC } from 'react';
import { Category } from './Сategory';

export const Categories: FC = () => {
  return (
    <StyledCategories>
      <StyledContainer>
        <StyledCategoriesContainer>
          {categories.map((item, index) => (
            <Category key={index} {...item} />
          ))}
        </StyledCategoriesContainer>
      </StyledContainer>
    </StyledCategories>
  );
};
