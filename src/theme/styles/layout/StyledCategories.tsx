import { styled } from 'styled-components';
export const StyledCategories = styled.div`

  height: 624px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  .category__container {
    position: relative;
  }
  .category__img {
    max-width: 100%;
    height: auto;
  }

  .category__header {
    color: #fbfbfb;
    font-family: Lato;
    font-size: 45px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    position: absolute;
    bottom: 32px;
    left: 32px;
  }
`;
