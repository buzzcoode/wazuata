import { Link } from "react-router-dom";

import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-blue'>Ofertas </span>
          Eclusivas
        </h2>
        <p className='mt-4 info-text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam fugiat sequi omnis, earum deleniti, eveniet esse libero exercitationem sed officiis incidunt quos debitis est fuga assumenda, vitae ab maxime ipsam!
        </p>
        <p className='mt-6 info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit omnis, quia itaque fugiat culpa, eaque libero doloribus repudiandae voluptatem laboriosam repellat magni aspernatur minima accusamus! Porro cupiditate ad culpa vero!
        </p>

        <div className='mt-11 flex flex-wrap gap-4'>
          <Link to="/lista-reserva" className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-blue text-white border-coral-blue rounded-full'>Garantir</Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer