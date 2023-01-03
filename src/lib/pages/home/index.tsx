import AboutUs from 'lib/components/AboutUs';
import Categories from 'lib/components/Categories';
import Products from 'lib/components/Products';
import Header from 'lib/layout/Header';
import Main from 'lib/layout/Main';

export default function HomeScreen() {
  return (
    <>
      <Header />
      <Main>
        <Categories />
        <Products />
        <AboutUs />
      </Main>
    </>
  );
}
