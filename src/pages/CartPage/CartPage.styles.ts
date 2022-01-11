import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 35px 55px;
`;

export const CartProductsWrapper = styled.div`
  flex: 1;
  background: #fff;
  padding: 12px 10px;
  margin-right: 25px;
`;

export const SubtotalWrapper = styled.div`
  width: 300px;
  height: fit-content;
  background: #fff;
  padding: 20px;
`;

export const SubtotalTitle = styled.span`
  font-size: 19px;
  margin-bottom: 5px;
  display: inline-block;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
