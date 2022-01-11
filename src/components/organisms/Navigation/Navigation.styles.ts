import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  margin-right: 20px;

  strong {
    font-size: 16px;
    font-weight: 800;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ShoppingCartWrapper = styled(Link)`
  width: 55px;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;
