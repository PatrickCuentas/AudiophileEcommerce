import Header from '../components/header'
import Categories from '../components/categories'
import Products from '../components/products'
import Testimonial from '../components/testimonial'

export default function HomeScreen() {
  return (
    <>
      <Header />
      <div className="px-4 pb-[70px] max-w-[480px] mx-auto">
        <Categories isNavbar={false} />
        <Products />
        <Testimonial />
      </div>
    </>
  )
}
