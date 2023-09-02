import logo from '@/assets/logo.svg';
import { StyledLogo } from '@/theme/styles/components/StyledLogo';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ILogoProps {
  link: string;
  alt: string;
}

export const Logo: FC<ILogoProps> = ({ link, alt }) => {
  return (
    <StyledLogo>
      <Link to={link}>
        <img src={logo} className="img" alt={alt} />
      </Link>
    </StyledLogo>
  );
};
