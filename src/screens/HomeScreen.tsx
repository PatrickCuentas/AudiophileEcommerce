import Categories from '../components/categories';
import Products from '../components/products';
import Testimonial from '../components/testimonial';

export default function HomeScreen() {
  return (
    <main className="my-container">
      <Categories />
      <Products />
      <Testimonial />
    </main>
  );
}
