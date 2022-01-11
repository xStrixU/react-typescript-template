import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

import { SearchBar } from 'components/molecules/SearchBar/SearchBar';
import { ReactComponent as ShoppingCartIcon } from 'assets/icons/shopping-cart.svg';
import { useAuth } from 'hooks/useAuth';
import { useCart } from 'hooks/useCart';

import { LinkWrapper, ShoppingCartWrapper, Wrapper } from './Navigation.styles';

export const Navigation = () => {
  const { user } = useAuth();
  const { calculateCartSize } = useCart();
  const navigate = useNavigate();

  const handleAuthClick = () =>
    user === null ? navigate('/login') : getAuth().signOut();

  return (
    <Wrapper>
      <SearchBar />
      <LinkWrapper onClick={handleAuthClick}>
        Hello, {user === null ? 'Guest' : user.email}
        <strong>Sign {user === null ? 'In' : 'Out'}</strong>
      </LinkWrapper>
      <LinkWrapper>
        Return
        <strong>& Orders</strong>
      </LinkWrapper>
      <ShoppingCartWrapper to="/cart">
        <ShoppingCartIcon />
        &nbsp;
        {calculateCartSize()}
      </ShoppingCartWrapper>
    </Wrapper>
  );
};
