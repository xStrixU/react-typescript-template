import styled from 'styled-components';

import logo from 'assets/images/logo.png';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img.attrs({ src: logo })`
  width: 100px;
  margin-top: 15px;
  margin-bottom: 23px;
`;

export const Box = styled.div`
  width: 350px;
  border: 1px solid #ddd;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 14px 25px;
`;

export const LoginForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-top: 10px;
`;

export const AuthErrorWrapper = styled.div`
  width: 350px;
  border: 1px solid ${({ theme }) => theme.errorRed};
  box-shadow: ${({ theme }) => theme.errorBoxShadow};
  border-radius: 3px;
  padding: 15px 25px;
  margin-bottom: 23px;

  h4 {
    color: ${({ theme }) => theme.errorRed};
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 10px;
  }

  span {
    font-size: 13px;
    text-align: justify;
  }
`;
