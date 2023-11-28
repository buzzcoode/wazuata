import { useState } from 'react'
import Button from './Button'

import { arrowRight } from '../assets/icons'
import { shoes } from '../constants/index'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return <>
    <section id="home" className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative lg:z-10 md:z-10 pr-10'>Lorem ipsum amet</span>

          <br />
          <span className='text-coral-blue inline-block mt-3'>Wa&apos;zuata</span> Store
        </h1>
        <p className=' font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-w-lg'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod accusantium sapiente rem nesciunt sunt, quaerat soluta excepturi dolores accusamus adipisci facere. Quis laborum tempora eligendi pariatur, error ipsa officiis aut.
        </p>
        <Button label="Lista de reserva" iconUrl={arrowRight} />
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-gradient-to-b from-blue-200 to-teal-50 bg-cover bg-center'>
        <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className='object-contain relative z-10' />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
}

export default Hero