import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';
import { getIcon } from '@/helpers/getIcon';
import {
  StyledHeader,
  StyledOptions,
} from '@/theme/styles/layout/StyledHeader';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { EnumIcons } from '@/types';
import { IconButton } from '@mui/material';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <div className="content">
          <Logo link="/" alt="City Wheels" />
          <Navigation />
          <StyledOptions>
            <IconButton>{getIcon(EnumIcons.search)}</IconButton>
            <IconButton>{getIcon(EnumIcons.heart)}</IconButton>
            <IconButton>{getIcon(EnumIcons.cart)}</IconButton>
            <IconButton>{getIcon(EnumIcons.user)}</IconButton>
          </StyledOptions>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};
