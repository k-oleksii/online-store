import { FC } from 'react';
import { StyledCart } from '@/theme/styles/layout/StyledCart';
import { Like } from '@/ui/Like';
import { Buy } from '@/ui/Buy';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Raiting } from '@/ui/Raiting';

interface CardProps {
  saleComponent?: React.ReactNode;
  bikesData?: {
    title: string;
    img: string;
    description: string;
    price: number;
  }[];
  headerName?: string;
}

export const Cart: FC<CardProps> = ({
  saleComponent,
  bikesData,
  headerName,
}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1640 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1640, min: 1420 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1420, min: 1180 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 1180, min: 960 },
      items: 3,
    },
    phone: {
      breakpoint: { max: 960, min: 280 },
      items: 2,
    },
  };
  return (
    <StyledCart>
      <div className="product__header">
        <h2>{headerName}</h2>
      </div>
      <div className="product__slider">
        <Carousel
          className="product__slider-arrow"
          responsive={responsive}
          removeArrowOnDeviceType={['phone']}
          itemClass="carousel-item-padding-40-px"
        >
          {bikesData?.map((item, index) => (
            <div className="product__singleCart" key={index}>
              <div className="product__like">
                {saleComponent}
                <div>
                  <Like />
                </div>
              </div>
              <div className="product__image">
                <img src={item.img} alt="product img"></img>
              </div>
              <div className="product__raiting">
                <Raiting />
                <Raiting />
                <Raiting />
                <Raiting />
                <Raiting />
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
        </Carousel>
      </div>
    </StyledCart>
  );
};
