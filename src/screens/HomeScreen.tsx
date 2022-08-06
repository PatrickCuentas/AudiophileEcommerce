import Header from "../components/header";
import Categories from "../components/categories";
import Products from "../components/products";
import Testimonial from "../components/testimonial";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[480px] px-4 pb-[70px] md:max-w-[1100px] lg:p-0">
        <Categories />
        <Products />
        <Testimonial />
      </div>
    </>
  );
}
