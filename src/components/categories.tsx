import { useContext } from 'react'

import { NavbarContext } from '../context/NavbarContext.jsx'
import { IconContext } from 'react-icons'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 1,
    name: 'Headphones',
    path: '../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview-removebg.png',
  },
  {
    id: 2,
    name: 'Speakers',
    path: '../../assets/product-zx9-speaker/mobile/image-category-page-preview-removebg.png',
  },
  {
    id: 3,
    name: 'Earphones',
    path: '../../assets/product-yx1-earphones/mobile/image-category-page-preview-removebg.png',
  },
]

interface Category {
  id?: number
  name: string
  path: string
  position?: number
  onClick?: () => void
}

interface Categories {
  isNavbar: boolean
}

export default function Categories({ isNavbar }: Categories) {
  const [isNavbarOpen, setIsNavbarOpen, toggleNavbar] =
    useContext(NavbarContext)
  const paddingStyles = !isNavbar && 'pt-[90px] pb-[120px]'

  return (
    <div className={`${paddingStyles}`}>
      {categories.map((category: Category, i) => (
        <Category
          key={category.id}
          name={category.name}
          path={category.path}
          position={+i}
          onClick={() => isNavbar && toggleNavbar()}
        />
      ))}
    </div>
  )
}

function Category({ name, path, position, onClick }: Category) {
  const marginTop = position === 0 ? 'mt-[0px]' : 'mt-[60px]'

  const divImage = {
    backgroundImage: `url("${path}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '120px',
    height: '100%',
  }

  return (
    <div className={`relative text-center ${marginTop}`}>
      <div className="h-[165px] bg-bg_primary rounded-[8px]">
        <div className="h-full absolute left-[37%] top-[-60px]">
          <div style={divImage}></div>
        </div>
        <div className="h-[88px]"></div>
        <p className="text-black mb-[8px]">{name.toUpperCase()}</p>
        <Link
          to={`/category/${name.toLocaleLowerCase()}`}
          className="flex items-center justify-center flex-wrap gap-1"
          onClick={onClick}
        >
          <span className="text-gray-500">SHOP</span>
          <IconContext.Provider value={{ style: { color: 'orange' } }}>
            <IoIosArrowForward className="text-gray-500" />
          </IconContext.Provider>
        </Link>
      </div>
    </div>
  )
}
