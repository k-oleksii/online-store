import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';
import { getIcon } from '@/helpers/getIcon';
import {
  StyledHeader,
  StyledOptions,
} from '@/theme/styles/layout/StyledHeader';
import { StyledNavButton } from '@/theme/styles/layout/StyledNav';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { EnumBreakpoints, EnumIcons } from '@/types';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { headerActions } from '@/lib/redux/actions';
import { IconButton, useMediaQuery } from '@mui/material';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HeaderSearch } from './HeaderSearch';
import { HeaderSearchModal } from './HeaderSearchModal';

export const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const isTabletPortraitScreen = useMediaQuery(
    `(max-width: ${EnumBreakpoints.tabletPortrait})`
  );

  const isMobileScreen = useMediaQuery(
    `(min-width: ${EnumBreakpoints.tablet})`
  );

  const handleSearchBtnClick = () => {
    dispatch(headerActions.setIsSearchOpen(true));
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <div className="content">
          {isTabletPortraitScreen && (
            <StyledNavButton onClick={() => setOpen(!open)}>
              {!open ? <MenuIcon /> : <MenuOpenIcon />}
            </StyledNavButton>
          )}

          <Logo link="/online-store/" alt="City Wheels" />
          <Navigation />
          <StyledOptions>
            {isMobileScreen && (
              <IconButton onClick={handleSearchBtnClick}>
                {getIcon(EnumIcons.search)}
              </IconButton>
            )}

            <IconButton>{getIcon(EnumIcons.heart)}</IconButton>
            <IconButton>{getIcon(EnumIcons.cart)}</IconButton>
            <IconButton>{getIcon(EnumIcons.user)}</IconButton>
          </StyledOptions>
        </div>
      </StyledContainer>
      {!isMobileScreen ? <HeaderSearch /> : <HeaderSearchModal />}
    </StyledHeader>
  );
};
