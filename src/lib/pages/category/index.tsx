import { useParams } from 'react-router';
import useSWR from 'swr';
import { v4 as uuidv4 } from 'uuid';
import Main from 'lib/layout/Main';
import AboutUs from 'lib/components/AboutUs';
import Categories from 'lib/components/Categories';
import Product from 'lib/components/Product';
import fetcher from 'lib/swr/fetcher';
import { findByCategoryQuery } from 'lib/utils/fetchProducts';

export default function CategoryScreen() {
  const params = useParams();
  const { categoryName } = params;
  const query = findByCategoryQuery(categoryName as string);
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/products${query}&sort=-new`,
    fetcher
  );
  const products = data?.docs;
  console.log(products);

  if (isLoading || products === undefined) return <div />;

  return (
    <>
      <div className="flex h-[102px] items-center justify-center bg-black">
        <p className="text-[28px] font-bold tracking-[2px] text-white">
          {categoryName?.toUpperCase()}
        </p>
      </div>
      <Main>
        <div className="flex flex-col gap-[120px] py-[64px] px-[24px] text-center lg:text-start">
          {products.map((product, i) => {
            const productMapped = {
              id: product._id,
              slug: product.slug,
              name: product.name,
              description: product.description[0]?.children[0]?.text,
              image: product.categoryImage,
              isNew: product.new,
              position: i % 2 === 0 ? 'left' : 'right',
            };
            return <Product key={uuidv4()} product={productMapped} />;
          })}
          <Categories />
          <AboutUs />
        </div>
      </Main>
    </>
  );
}
