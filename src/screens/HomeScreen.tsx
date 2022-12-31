import Products from '../components/Products';
import AboutUs from '../components/AboutUs';
import Categories from '../components/Categories';
import Main from '../layout/Main';

export default function HomeScreen() {
  return (
    <Main>
      <Categories />
      <Products />
      <AboutUs />
    </Main>
  );
}
