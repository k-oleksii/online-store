import { FC } from 'react';
import { StyledCart } from '@/theme/styles/layout/StyledCart';
import { Like } from '@/ui/Like';
import { bikesData } from '../../mock-data/products';
import { Buy } from '@/ui/Buy';
import { Sale } from '@/ui/Sale';

export const Cart: FC = () => {
  return (
    <StyledCart>
      {bikesData.map((item, index) => (
        <div className="product__singleCart" key={index}>
          <div className="product__like">
            <div>
              <Sale />
            </div>
            <div>
              <Like />
            </div>
          </div>
          <div className="product__image">
            <img src={item.img}></img>
          </div>
          <div className="product__title">
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
          <div className="product__price">{item.price}</div>
          <div>
            <Buy />
          </div>
        </div>
      ))}
    </StyledCart>
  );
};
