import { getIcon } from '@/helpers/getIcon';
import { useLoadUserInfo } from '@/hooks/useLoadUserInfo';
import { StyledReviewCardWrapper } from '@/theme/styles/components/StyledReviewSection';
import { StyledRating } from '@/theme/styles/ui/StyledRating';
import { EnumIcons, ICardProps } from '@/types';
import { Typography } from '@mui/material';
import { FC, memo } from 'react';

export const ReviewCard: FC<ICardProps> = props => {
  const { id, text, stars, date } = props;
  const {responseUserInfo} = useLoadUserInfo(id);
  console.log(responseUserInfo);
  const dateFormatted = new Date(date);
  const year = dateFormatted.getFullYear();
  const month = dateFormatted.getMonth() + 1;
  const formattedMonth = month < 10 ? '0' + month : month;
  const day = dateFormatted.getDate();
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;

  return (
    <StyledReviewCardWrapper>
      <Typography variant="name" component="h3" mb={1}>
        {id}
      </Typography>
      <Typography
        variant="body3"
        component="p"
        mb={3}
        sx={{ color: '#878D99' }}
      >
        {formattedDate}
      </Typography>
      <StyledRating
        name={`rating-${stars}`}
        defaultValue={stars ?? 0}
        size="small"
        icon={getIcon(EnumIcons.star)}
        emptyIcon={getIcon(EnumIcons.star)}
        readOnly
      />
      <Typography variant="body2" component="p" mt={3}>
        {text}
      </Typography>
    </StyledReviewCardWrapper>
  );
};
