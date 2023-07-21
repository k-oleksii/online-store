import { getIcon } from '@/helpers/getIcon';
import { getSearchOpen } from '@/lib/redux/selectors';
import { StyledHeaderSearch } from '@/theme/styles/layout/StyledHeader';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { EnumIcons } from '@/types';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { OutsideContainer } from '../OutsideContainer';

export const HeaderSearch = () => {
  const dispatch = useDispatch();
  const isSearchOpen = useSelector(getSearchOpen);
  console.log(isSearchOpen);

  const searchClasses = cx({
    open: isSearchOpen,
  });

  const handleOutsideClick = () => {
    // dispatch(headerActions.setIsSearchOpen(false));
  };

  return (
    <OutsideContainer onOutsideClick={handleOutsideClick} state={isSearchOpen}>
      <StyledHeaderSearch className={searchClasses}>
        <StyledContainer>
          <div className="search-content">
            <TextField
              placeholder="What are you looking for?"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {getIcon(EnumIcons.search)}
                  </InputAdornment>
                ),
              }}
            />

            <IconButton>{getIcon(EnumIcons.close)}</IconButton>
          </div>
        </StyledContainer>
      </StyledHeaderSearch>
    </OutsideContainer>
  );
};
