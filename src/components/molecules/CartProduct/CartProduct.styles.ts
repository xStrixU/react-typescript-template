import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  border-top: 1px solid #ddd;
  display: flex;
  padding: 10px;
  align-items: center;

  &:last-child {
    border-bottom: 1px solid #ddd;
  }

  img {
    object-fit: contain;
    height: 180px;
    width: 180px;
  }
`;

export const ProductInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-left: 20px;
  height: 120px;
`;

export const StyledDescription = styled.span`
  font-size: 20px;
`;

export const StyledButton = styled(Button)`
  width: fit-content;
  padding: 2px 15px;
  margin-top: 20px;
`;
