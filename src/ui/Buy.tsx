import { StyledBuy } from '@/theme/styles/components/StyledBuy';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Buy: FC = () => {
  return (
    <StyledBuy>
      {/* should be linked to order page or something */}
      <Link to={' '}>
        <button>Buy</button>
      </Link>
    </StyledBuy>
  );
};
