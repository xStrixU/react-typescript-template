import { useCart } from 'hooks/useCart';
import { ProductType } from 'types';

import {
  StyledButton,
  StyledDescription,
  StyledName,
  Wrapper,
} from './Product.styles';

export const Product = ({
  product: { id, name, description, price, rating, img },
}: {
  product: ProductType;
}) => {
  const { addToCart } = useCart();

  return (
    <Wrapper>
      <StyledName>{name}</StyledName>
      <StyledDescription>{description}</StyledDescription>
      <strong>${price}</strong>
      {'⭐'.repeat(rating)}
      <img src={img} alt="product image" />
      <StyledButton onClick={() => addToCart(id)}>Add to cart</StyledButton>
    </Wrapper>
  );
};
