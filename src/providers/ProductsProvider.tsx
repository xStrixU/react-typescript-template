import { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

import { ProductType } from 'types';

export const ProductsContext = createContext<ProductType[]>([]);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/products.json')
      .then(({ data }) => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
