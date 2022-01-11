import { useContext } from 'react';
import styled from 'styled-components';

import { Product } from 'components/molecules/Product/Product';
import { ProductsContext } from 'providers/ProductsProvider';

const ProductsWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const ProductsPage = () => {
  const products = useContext(ProductsContext);

  return (
    <>
      <ProductsWrapper>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsWrapper>
    </>
  );
};
