import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledNavigationCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ theme }) => theme.zIndex.small};
`;

export const NavigationCover = () =>
  ReactDOM.createPortal(<StyledNavigationCover />, document.body);
