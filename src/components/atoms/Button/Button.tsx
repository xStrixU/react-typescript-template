import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  color: #111;
  border: 1px solid;
  border-radius: 3px;
  padding: 7px;
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  border-color: #a88734 #9c7e31 #846a29;

  &:hover {
    cursor: pointer;
    background: linear-gradient(to bottom, #f6dda0, #eeb933);
  }
`;
