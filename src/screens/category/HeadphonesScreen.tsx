import { useEffect, useState } from 'react'

import Categories from '../../components/categories'
import CategoryTitle from '../../components/categoryTitle'
import Product from '../../components/product'
import Testimonial from '../../components/testimonial'

import { getProductsByCategory } from '../../utils/fetchProducts'
import { sortProductsByNewest } from '../../utils/sortProducts'
import { getDeviceType } from '../../utils/windowSize'

export default function HeadphonesScreen() {
  const [products, setProducts] = useState<any>([])

  useEffect(() => {
    const products = getProductsByCategory('headphones')
    const mappedProducts = products.map(product => {
      const device = getDeviceType()
      const resProduct = {
        id: product.id,
        slug: product.slug,
        title: product.name,
        description: product.description,
        imagePath: product.categoryImage[device.type],
        isNew: product.new,
      }
      return resProduct
    })

    const sortedProducts = sortProductsByNewest(mappedProducts)

    setProducts(sortedProducts)
  }, [])

  return (
    <div>
      <CategoryTitle title={'HEADPHONES'} />
      <div className="py-[64px] px-[24px] text-center flex flex-col gap-[120px]">
        {products.map(product => (
          <Product
            key={product.id}
            slug={product.slug}
            title={product.title}
            description={product.description}
            imagePath={product.imagePath}
            isNew={product.isNew}
          />
        ))}
        <Categories isNavbar={false} />
        <Testimonial />
      </div>
    </div>
  )
}
