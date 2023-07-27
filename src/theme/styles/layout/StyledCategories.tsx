import { styled } from 'styled-components';
export const StyledCategories = styled.div`
  height: 624px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(0, 1fr);
  justify-content: center;
  transition: height 2s easy-out;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    height: 960px;
  }
  @media (max-width: 720px) {
    height: 520px;
  }

  .category__container {
    max-width: 100%;
  }
  .category__img {
    max-width: 100%;
    height: auto;
  }

  .category__link {
    position: relative;
  }

  .category__header {
    color: #fbfbfb;
    font-family: Lato;
    font-size: 45px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    position: absolute;
    padding-left: 32px;
    bottom: 32px;
    transition: font-size 0.8s ease-out;
  }

  @media (max-width: 1420px) {
    .category__header {
      font-size: 26px;
      padding-left: 15px;
      bottom: 12px;
    }
  }
`;
