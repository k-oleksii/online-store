import { FC } from 'react';
import { StyledCategories } from '@/theme/styles/layout/StyledCategories';
import { categories } from '@/mock-data/categories';

import { Link } from 'react-router-dom';

export const Categories: FC = () => {
  return (
    <StyledCategories>
      {categories.map((item, index) => (
        <div className="category__container" key={index}>
          <img
            className="category__img"
            src={item.cardPic}
            alt={item.category + ' pic'}
          ></img>
          <Link to={item.path}>
            <h2 className="category__header" >
              {item.category}
            </h2>
          </Link>
        </div>
      ))}
    </StyledCategories>
  );
};
