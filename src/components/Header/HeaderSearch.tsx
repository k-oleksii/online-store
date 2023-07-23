import { getIcon } from '@/helpers/getIcon';
import { headerActions } from '@/lib/redux/actions';
import { StyledHeaderSearch } from '@/theme/styles/layout/StyledHeader';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { EnumBreakpoints, EnumIcons } from '@/types';
import {
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
} from '@mui/material';
import { useDispatch } from 'react-redux';

export const HeaderSearch = () => {
  const dispatch = useDispatch();

  const isMobileScreen = useMediaQuery(
    `(min-width: ${EnumBreakpoints.tablet})`
  );

  return (
    <StyledHeaderSearch>
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
          {isMobileScreen && (
            <IconButton
              onClick={() => dispatch(headerActions.setIsSearchOpen(false))}
            >
              {getIcon(EnumIcons.close)}
            </IconButton>
          )}
        </div>
      </StyledContainer>
    </StyledHeaderSearch>
  );
};
