import { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { AuthProvider } from 'hooks/useAuth';
import { ProductsProvider } from './ProductsProvider';
import { CartProvider } from 'hooks/useCart';

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <Router>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <GlobalStyle />
            {children}
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </ThemeProvider>
  </Router>
);
