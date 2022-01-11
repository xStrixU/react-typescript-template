import { Route, Routes } from 'react-router-dom';

import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { CartPage } from 'pages/CartPage/CartPage';
import { ProductsPage } from 'pages/ProductsPage';

export const MainView = () => (
  <MainTemplate>
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </MainTemplate>
);
