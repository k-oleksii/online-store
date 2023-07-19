import { styled } from 'styled-components';

export const StyledCart = styled.div`
  max-width: 1600px;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

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
    gap: 24px;
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
    display:flex;
    justify-content:space-between;
    width:218px;
  }
`;
