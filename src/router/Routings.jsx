import HomeScreen from '../screens/HomeScreen.tsx';
import NotFoundScreen from '../screens/NotFoundScreen.tsx';
import LayoutScreen from '../screens/LayoutScreen.tsx';
import CategoryScreen from '../screens/category/CategoryScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import EarhphonesScreen from '../screens/category/EarphonesScreen';
import SpeakersScreen from '../screens/category/SpeakersScreen';
import HeadphonesScreen from '../screens/category/HeadphonesScreen';
import ProductScreen from '../screens/product/ProductScreen.tsx';

import { Route, Routes } from 'react-router';

export default function Routings() {
  return (
    <Routes>
      <Route path="/" element={<LayoutScreen />}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="category" element={<CategoryScreen />}>
          <Route path="headphones" element={<HeadphonesScreen />} />
          <Route path="speakers" element={<SpeakersScreen />} />
          <Route path="earphones" element={<EarhphonesScreen />} />
        </Route>
        <Route path="products/:productName" element={<ProductScreen />} />
        <Route path="checkout" element={<CheckoutScreen />} />
      </Route>

      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}
