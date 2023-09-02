import { navigation } from '@/configs/navigation';
import { StyledNav } from '@/theme/styles/layout/StyledHeader';
import { Typography } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: FC = () => {
  return (
    <StyledNav>
      <ul className="list">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.path}>
                <Typography variant="body1" component="span">
                  {item.name}
                </Typography>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </StyledNav>
  );
};
