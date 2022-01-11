import styled from 'styled-components';

import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  width: 315px;
  height: 460px;
  background: #fff;
  margin: 15px;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;

  img {
    max-height: 220px;
    width: 100%;
    object-fit: contain;
    margin: auto 0;
  }
`;

export const StyledName = styled.span`
  font-weight: 500;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background: #6e6e6e;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const StyledDescription = styled.span`
  font-size: 14px;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const StyledButton = styled(Button)`
  margin-top: auto;
`;
