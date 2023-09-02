import { StyledBtn } from '@/theme/styles/components/StyledBtn';
import { FC } from 'react';

export const Button: FC = () => {
  return (
    <StyledBtn>
      <div className="btn__style">
        <button>Button</button>
      </div>
    </StyledBtn>
  );
};
