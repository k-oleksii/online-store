import { StyledLoading } from '@/theme/styles/ui/StyledLoading';
import { CircularProgress, Typography } from '@mui/material';
import { FC } from 'react';

export const Loading: FC = () => {
  return (
    <StyledLoading>
      <CircularProgress size="1.5rem" />
      <Typography variant="body1">Loading...</Typography>
    </StyledLoading>
  );
};
