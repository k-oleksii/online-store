import { styled } from 'styled-components';
const ArrowRight = `<svg
width="56"
height="56"
viewBox="0 0 56 56"
fill="grey"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M18.6665 28.0001H37.3332M37.3332 28.0001L29.1665 19.8334M37.3332 28.0001L29.1665 36.1667M27.9998 51.3334C40.8868 51.3334 51.3332 40.8871 51.3332 28.0001C51.3332 15.1131 40.8868 4.66675 27.9998 4.66675C15.1128 4.66675 4.6665 15.1131 4.6665 28.0001C4.6665 40.8871 15.1128 51.3334 27.9998 51.3334Z"
  stroke="#212121"
  strokeWidth="3.5"
  strokeLinecap="round"
  strokeLinejoin="round"
/>
</svg>`;
const ArrowLeft = `<svg
width="56"
height="56"
viewBox="0 0 56 56"
fill="grey"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M18.6665 28.0001H37.3332M37.3332 28.0001L29.1665 19.8334M37.3332 28.0001L29.1665 36.1667M27.9998 51.3334C40.8868 51.3334 51.3332 40.8871 51.3332 28.0001C51.3332 15.1131 40.8868 4.66675 27.9998 4.66675C15.1128 4.66675 4.6665 15.1131 4.6665 28.0001C4.6665 40.8871 15.1128 51.3334 27.9998 51.3334Z"
  stroke="#212121"
  strokeWidth="3.5"
  strokeLinecap="round"
  strokeLinejoin="round"
/>
</svg>`;

export const StyledCart = styled.div`
  max-width: 1600px;
  height: 572px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  product__slider {
    position: relative;
    padding-left: 30px;
  }
  product__slider-arrow {
    position: unsent;

    .react-multiple-carousel__arrow {
      position: absolute;
    }
    .react-multiple-carousel__arrow--right {
      right: calc(0% + 1px);
      z-index: 100;
    }
    .react-multiple-carousel__arrow--left {
      left: calc(0% + 1px);
    }
  }

  .product__singleCart {
    height: 500px;
    max-width: 250px;
    border-radius: 24px;
    background: #fff;
    display: flex;
    width: 250px;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
  }
  .product__header {
    text-align: left;
    color: var(--black, #212121);
    font-family: Lato;
    font-size: 34px;
    font-style: normal;
    font-weight: 900;
    line-height: 120%; /* 40.8px */
  }

  .product__image {
    width: 220px;
    height: 144px;
  }

  .product__title {
    color: #212121;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
  }

  .product__price {
    color: var(--black, #212121);
    font-family: Lato;
    font-size: 26px;
    font-style: normal;
    font-weight: 900;
    line-height: 120%;
  }

  .product__like {
    display: flex;
    justify-content: space-between;
    width: 218px;
  }

  .product__raiting {
    display: flex;
    flex-direction: row;
  }

  .react-multiple-carousel__arrow--right::before {
    content: url('data:image/svg+xml;utf8,${encodeURIComponent(ArrowRight)}');
  }
  .react-multiple-carousel__arrow:hover {
    background: none;
  }
  .react-multiple-carousel__arrow--left::before {
    content: url('data:image/svg+xml;utf8,${encodeURIComponent(ArrowLeft)}');
    transform:rotate(180deg);
  }
`;
