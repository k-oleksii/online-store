import { StyledCategory } from '@/theme/styles/components/StyledCategories';
import { Typography } from '@mui/material';
import { FC } from 'react';
import Image from 'react-image-webp';
import { Link } from 'react-router-dom';

interface ICategoryType {
  cardPic: string;
  path: string;
  category: string;
}

export const Category: FC<ICategoryType> = ({ cardPic, path, category }) => {
  return (
    <StyledCategory>
      <Link to={path}>
        <img src={cardPic} alt={category} />
        <Image src={cardPic} webp={cardPic} />
        <Typography variant="h2" component="h2" className="title">
          {category}
        </Typography>
      </Link>
    </StyledCategory>
  );
};
