import { getIcon } from '@/helpers/getIcon';
import {
  StyledCard,
  StyledCardImg,
  StyledCardInfo,
  StyledCardTop,
  StyledPrices,
} from '@/theme/styles/components/StyledCard';
import { StyledSale } from '@/theme/styles/components/StyledSale';
import { StyledRating } from '@/theme/styles/ui/StyledRating';
import { EnumIcons, ICardProps } from '@/types';
import { Button, Checkbox, Typography } from '@mui/material';
import { FC, memo } from 'react';
import Image from 'react-image-webp';
import { Link } from 'react-router-dom';

export const Card: FC<ICardProps> = memo(
  ({ path, title, img, imgWebp, price, oldPrice, sale, rating }) => {
    return (
      <StyledCard>
        <StyledCardTop>
          {sale && (
            <StyledSale>
              <Typography variant="body2" component="span">
                Sale
              </Typography>
            </StyledSale>
          )}
          <Checkbox
            aria-label="Checkbox demo"
            icon={getIcon(EnumIcons.heart)}
            checkedIcon={getIcon(EnumIcons.heart)}
          />
        </StyledCardTop>
        <StyledCardImg>
          <Link to={path}>
            <Image src={img} webp={imgWebp} alt={title} />
          </Link>
        </StyledCardImg>
        <StyledCardInfo>
          <StyledRating
            name={`rating-${rating}`}
            defaultValue={rating}
            size="small"
            icon={getIcon(EnumIcons.star)}
            emptyIcon={getIcon(EnumIcons.star)}
            readOnly
          />
          <Link to={path} className="title">
            <Typography variant="body2" component="span">
              {title}
            </Typography>
          </Link>
          <StyledPrices>
            <Typography variant="newPrice" component="span">
              ${price}
            </Typography>

            {oldPrice && (
              <Typography variant="oldPrice" component="span">
                ${oldPrice}
              </Typography>
            )}
          </StyledPrices>
          <Button variant="contained">Buy</Button>
        </StyledCardInfo>
      </StyledCard>
    );
  }
);
