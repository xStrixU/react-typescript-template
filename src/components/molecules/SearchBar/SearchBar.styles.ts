import styled from 'styled-components';

export const Wrapper = styled.form<{ isInputFocused: boolean }>`
  flex-grow: 1;
  display: flex;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  outline: ${props => (props.isInputFocused ? '3px solid #f49200' : 'none')};
  outline-offset: -1px;
  margin: 0 20px;

  & > * {
    border: none;
  }
`;

export const StyledSelect = styled.select`
  background: #f3f3f3;
  border-right: 1px solid #cdcdcd;
  color: #666;
  padding: 0 10px;

  &:hover {
    cursor: pointer;
    background: #dadada;
    color: #000;
  }
`;

export const StyledInput = styled.input`
  font-size: 15px;
  padding: 10px;
  width: 100%;
`;

export const StyledButton = styled.button`
  background: #febd69;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  &:hover {
    cursor: pointer;
    background: #f3a847;
  }

  svg {
    fill: #333;
  }
`;
