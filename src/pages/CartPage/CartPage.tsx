import { useContext } from 'react';

import { CartProduct } from 'components/molecules/CartProduct/CartProduct';
import { useCart } from 'hooks/useCart';
import { ProductsContext } from 'providers/ProductsProvider';

import {
  StyledButton,
  CartProductsWrapper,
  SubtotalTitle,
  SubtotalWrapper,
  Wrapper,
} from './CartPage.styles';

export const CartPage = () => {
  const { calculateCartSize, cart } = useCart();
  const products = useContext(ProductsContext);

  const calculateTotalPrice = () => {
    let total = 0;

    products.forEach(({ id, price }) => {
      total += (cart.find(product => product.id === id)?.quantity || 0) * price;
    });

    return total.toFixed(2);
  };

  return (
    <Wrapper>
      <CartProductsWrapper>
        <h1>Shopping Cart</h1>
        <div>
          {cart.map((productData, key) => (
            <CartProduct key={key} productData={productData} />
          ))}
        </div>
      </CartProductsWrapper>
      <SubtotalWrapper>
        <SubtotalTitle>
          Subtotal ({calculateCartSize()} items):&nbsp;
          <strong>${calculateTotalPrice()}</strong>
        </SubtotalTitle>
        <div>
          <label>
            <input type="checkbox" />
            &nbsp; This order contains a gift
          </label>
        </div>
        <StyledButton>Proceed to checkout</StyledButton>
      </SubtotalWrapper>
    </Wrapper>
  );
};
