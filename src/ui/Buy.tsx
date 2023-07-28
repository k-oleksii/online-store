import { FC } from 'react';
import { StyledBuy } from '@/theme/styles/layout/StyledBuy';
import { Link } from 'react-router-dom';

export const Buy: FC = () => {
  return (
    <StyledBuy>
      {/* should be linked to order page or something */}
      <Link to={" "}>
        <button>Buy</button>
      </Link>
    </StyledBuy>
  );
};
