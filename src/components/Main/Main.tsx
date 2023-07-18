import { FC } from 'react';
import { StyledMain } from '@/theme/styles/layout/StyledMain';
import { StyledMainContent } from '@/theme/styles/layout/StyledMainContent';
export const Main: FC = () => {
  return (
    <StyledMain>
      <StyledMainContent>
        <h1>Just to show that component exist</h1>
      </StyledMainContent>
    </StyledMain>
  );
};
