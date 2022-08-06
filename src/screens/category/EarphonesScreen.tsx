import { useEffect, useState } from "react";

import Categories from "../../components/categories";
import CategoryTitle from "../../components/categoryTitle";
import Product from "../../components/product";
import Testimonial from "../../components/testimonial";

//utils
import { getProductsByCategory } from "../../utils/fetchProducts";
import { sortProductsByNewest } from "../../utils/sortProducts";
import { getDeviceType } from "../../utils/windowSize";

export default function EarphonesScreen() {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const products = getProductsByCategory("earphones");
    const mappedProducts = products.map((product) => {
      const device = getDeviceType();
      const resProduct = {
        id: product.id,
        slug: product.slug,
        name: product.name,
        description: product.description,
        imagePath: product.categoryImage[device.type],
        new: product.new,
      };
      return resProduct;
    });

    const sortedProducts = sortProductsByNewest(mappedProducts);

    setProducts(sortedProducts);
  }, []);

  return (
    <div>
      <CategoryTitle title={"EARPHONES"} />
      <div className="flex flex-col gap-[120px] py-[64px] px-[24px] text-center lg:text-start">
        {products.map((product, i) => (
          <Product
            key={product.id}
            slug={product.slug}
            name={product.name}
            description={product.description}
            imagePath={product.imagePath}
            isNew={product.new}
            position={i % 2 === 0 ? "left" : "right"}
          />
        ))}
        <Categories />
        <Testimonial />
      </div>
    </div>
  );
}
