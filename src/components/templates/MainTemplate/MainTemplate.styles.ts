import styled from 'styled-components';

import logo from 'assets/images/header-logo.png';

export const StyledHeader = styled.header`
  background: #131921;
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.large};
`;

export const StyledLogo = styled.img.attrs({ src: logo })`
  height: 35px;
`;
