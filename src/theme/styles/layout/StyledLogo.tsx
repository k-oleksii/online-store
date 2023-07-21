import { EnumBreakpoints } from '@/types';
import { styled } from 'styled-components';

export const StyledLogo = styled.div`
  max-width: 172px;

  @media (max-width: ${EnumBreakpoints.desktopMedium}) {
    max-width: 100px;
  }

  @media (max-width: ${EnumBreakpoints.mobile}) {
    max-width: 50px;
  }
`;
