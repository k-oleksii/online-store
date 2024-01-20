import { FC } from 'react';
import { IconButton } from '@mui/material';
import Image from 'react-image-webp';

import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';
import { StyledCardImg, StyledContainerImagesSlider, StyledImagesSlider } from '@/theme/styles/components/StyledProductCard';

interface ISliderImagesProps {
  images: { url: string; name: string }[];
}

interface IArrowProps {
  onClick?: () => void; // Define the type for onClick prop
}
const NextArrow: FC<IArrowProps> = ({ onClick }) => (
  <IconButton onClick={onClick} className="button button-next">
    {getIcon(EnumIcons.arrowRight)}
  </IconButton>
);

const PrevArrow: FC<IArrowProps> = ({ onClick }) => (
  <IconButton onClick={onClick} className="button button-prev">
    {getIcon(EnumIcons.arrowLeft)}
  </IconButton>
);

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 980,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
};

export const ImageSlider: FC<ISliderImagesProps> = ({images}) => {
  return (
    <StyledContainerImagesSlider>
      <StyledImagesSlider {...settings}>
        {images?.map((image) => (
          <StyledCardImg key={image.name}>
            <Image src={image.url} webp={image.url} alt={image.name} />
          </StyledCardImg>
        ))}
      </StyledImagesSlider>
    </StyledContainerImagesSlider>
  );
};
