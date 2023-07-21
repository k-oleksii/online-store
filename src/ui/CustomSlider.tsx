import React, { FC } from 'react';
import Slider from 'react-slick';
import { StyledCustomSlider } from '@/theme/styles/layout/StyledCustomSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps {
  saleComponent?: React.ReactNode;
  like?: React.ReactNode;
  raiting?: React.ReactNode;
  buyButton?: React.ReactNode;
  headerName?: string;
  bikesData?: {
    title: string;
    img: string;
    description: string;
    price: number;
  }[];
}

export const CustomSlider: FC<SliderProps> = ({
  saleComponent,
  like,
  raiting,
  buyButton,
  headerName,
  bikesData,
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledCustomSlider>
      <div className="product__header">
        <h2>{headerName}</h2>
      </div>
      <Slider {...settings}>
        {bikesData?.map((item, index) => (
          <div className="product__singleCart" key={index}>
            <div className="product__like">
              <div>{saleComponent}</div>
              <div>{like}</div>
            </div>
            <div className="product__image">
              <img src={item.img} alt="product img"></img>
            </div>
            <div className="product__raiting">
              {raiting}
              {raiting}
              {raiting}
              {raiting}
              {raiting}
            </div>
            <div className="product__title">
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
            <div className="product__price">$ {item.price}</div>
            <div>{buyButton}</div>
          </div>
        ))}
      </Slider>
    </StyledCustomSlider>
  );
};
