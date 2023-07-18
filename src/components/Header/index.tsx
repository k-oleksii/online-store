import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';
import { StyledHeader } from '@/theme/styles/layout/StyledHeader';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <div className='content'>
          <Logo link='/' alt='City Wheels' />
          <Navigation />
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};
