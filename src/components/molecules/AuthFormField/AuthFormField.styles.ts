import styled, { css } from 'styled-components';

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;

  &:last-of-type {
    margin-bottom: 25px;
  }
`;

export const StyledInput = styled.input<{ error: boolean }>`
  padding: 7px;
  border-radius: 3px;
  ${({ error, theme }) => {
    if (error) {
      return css`
        border: 1px solid ${({ theme }) => theme.errorRed};
        box-shadow: ${({ theme }) => theme.errorBoxShadow};
      `;
    }

    return css`
      border: 1px solid #a6a6a6;
      border-top-color: #949494;
      box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
    `;
  }};
`;

export const StyledError = styled.span`
  color: ${({ theme }) => theme.errorRed};
  font-size: 12px;
`;
