import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from 'components/organisms/Navigation/Navigation';

import { StyledHeader, StyledLogo } from './MainTemplate.styles';

export const MainTemplate = ({ children }: { children: ReactNode }) => (
  <>
    <StyledHeader>
      <Link to="/">
        <StyledLogo />
      </Link>
      <Navigation />
    </StyledHeader>
    {children}
  </>
);
