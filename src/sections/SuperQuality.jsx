import { Link } from 'react-router-dom'

import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return <>
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

      <div className="flex flex-1 flex-col">
        <h2 className='mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          <span className=' xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Lorem ipsum <span className='text-coral-blue inline-block mt-3'>Dolor </span>
          </span>
          <br />
          <span className='text-coral-blue inline-block mt-3'>Adipisicing</span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque iure ex a officia, expedita, error quos quod minima corporis nam, beatae eveniet possimus eum similique ullam eligendi iste excepturi ut.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatum facilis voluptates nam similique? Odio distinctio eos natus debitis sed ullam. Ex accusantium perspiciatis quam laborum aliquid quas repellat ducimus?
        </p>

        <div className="mt-11">
          <Link to="/lista-reserva" className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-blue text-white border-coral-blue rounded-full max-w-xs'>Lista de reserva</Link>
        </div>

      </div>

      <div className="flex-1 flex justify-center items-center bg-gradient-to-r from-blue-200 to-green-100 rounded-md">
        <img src={shoe8} alt="shoe8" width={777} height={522} className='object-contain' />
      </div>
    </section>
  </>
}

export default SuperQuality
