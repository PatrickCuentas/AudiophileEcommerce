import type { PathRouteProps } from 'react-router-dom';

import Home from 'lib/pages/home';
import CategoryScreen from 'lib/pages/category';
import ProductScreen from 'lib/pages/product';
import CheckoutScreen from 'lib/pages/checkout';

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/category/:categoryName',
    element: <CategoryScreen />,
  },
  {
    path: '/products/:productName',
    element: <ProductScreen />,
  },
  {
    path: '/checkout',
    element: <CheckoutScreen />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
