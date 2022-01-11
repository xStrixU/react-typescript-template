import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: #0066c0;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #c45500;
  }
`;
