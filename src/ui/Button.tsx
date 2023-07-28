import { FC } from 'react';
import { StyledBtn } from '@/theme/styles/layout/StyledBtn';

export const Button: FC = () => {
  return (
    <StyledBtn>
      <div className="btn__style">
        <button>Button</button>
      </div>
    </StyledBtn>
  );
};
