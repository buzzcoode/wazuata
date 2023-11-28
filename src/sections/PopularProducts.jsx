import PopularProductCard from '../components/PopularProductCard'
import { products } from '../constants/index'

const PopularProducts = () => {
  return <>
    <div className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className='text-4xl font-palanquin'>Lorem ipsum dolor <span className="text-coral-blue">Dolor</span></h2>
        <p className=' lg:max-w-lg text-slate-gray mt-2 font-montserrat'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus itaque nisi consectetur odit aspernatur debitis dicta quia cupiditate sint quas ipsum quos dignissimos vel.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 gap-4">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  </>
}

export default PopularProducts