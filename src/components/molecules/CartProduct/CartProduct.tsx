import { useContext } from 'react';

import { useCart } from 'hooks/useCart';
import { ProductsContext } from 'providers/ProductsProvider';
import { CartProductType } from 'types';

import {
  ProductInfoWrapper,
  StyledButton,
  StyledDescription,
  Wrapper,
} from './CartProduct.styles';

export const CartProduct = ({
  productData: { id, quantity },
}: {
  productData: CartProductType;
}) => {
  const products = useContext(ProductsContext);
  const { removeFromCart } = useCart();

  const product = products.find(product => product.id === id);

  if (product === undefined) return null;

  const { description, price, rating, img } = product;

  return (
    <Wrapper>
      <img src={img} alt="cart product image" />
      <ProductInfoWrapper>
        <StyledDescription>{description}</StyledDescription>
        <strong>${price}</strong>
        {'⭐'.repeat(rating)}
        <span>
          In cart: <b>{quantity}</b>
        </span>
        <StyledButton onClick={() => removeFromCart(id)}>
          Remove from cart
        </StyledButton>
      </ProductInfoWrapper>
    </Wrapper>
  );
};
