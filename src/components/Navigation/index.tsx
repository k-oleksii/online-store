import { navigation } from '@/configs/navigation';
import { StyledNav } from '@/theme/styles/layout/StyledNav';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Navigation: FC = () => {
  return (
    <StyledNav>
      <ul className='list'>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </StyledNav>
  );
};
