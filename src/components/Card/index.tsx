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

export const Card: FC<ICardProps> = memo(props => {
  const { name, price, sale, id, images, rating } = props;
  console.log(props);

  return (
    <StyledCard>
      <StyledCardTop>
        {sale?.newPrise && (
          <StyledSale>
            <Typography variant="body2" component="span">
              Sale
            </Typography>
          </StyledSale>
        )}
        <Checkbox
          aria-label="Like"
          icon={getIcon(EnumIcons.heart)}
          checkedIcon={getIcon(EnumIcons.heart)}
        />
      </StyledCardTop>
      <StyledCardImg>
        <Link to={`${id}`}>
          <Image src={images[0].url} webp={images[0].url} alt={name} />
        </Link>
      </StyledCardImg>
      <StyledCardInfo>
        <StyledRating
          name={`rating-${rating}`}
          defaultValue={rating ?? 0}
          size="small"
          icon={getIcon(EnumIcons.star)}
          emptyIcon={getIcon(EnumIcons.star)}
          readOnly
        />
        <Link to={`${id}`} className="title">
          <Typography
            variant="body2"
            aria-label={name}
            title={name}
            component="span"
            className="line-clamp-2"
          >
            {name}
          </Typography>
        </Link>
        <StyledPrices>
          <Typography variant="newPrice" component="span">
            ${!sale?.newPrise ? price : sale?.newPrise}
          </Typography>

          {sale?.newPrise && (
            <Typography variant="oldPrice" component="span">
              ${price}
            </Typography>
          )}
        </StyledPrices>
        <Button variant="contained">Buy</Button>
      </StyledCardInfo>
    </StyledCard>
  );
});
