import logo from '@/assets/logo.svg';
import { StyledLogo } from '@/theme/styles/layout/StyledLogo';
import { FC } from 'react';

interface ILogoProps {
  link: string;
  alt: string;
}

export const Logo: FC<ILogoProps> = ({ link, alt }) => {
  return (
    <StyledLogo>
      <a href={link} className="link">
        <img src={logo} className="img" alt={alt} />
      </a>
    </StyledLogo>
  );
};
